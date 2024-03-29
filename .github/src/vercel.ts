import { createWorkflowAction } from "./utils/createAction";
import fetch from "node-fetch";
import { WebhookDeploy } from "./webhook.types";
import { updateSummary } from "./pr_summary";
import { getProcessEnvs, getPrNumberEnv } from "./utils/envUtils";
import { findComment } from "./utils/findComment";
import { log } from "./utils/log";

const TEAM_ID = "team_0JO2SA8NcZ0OOypnKoEva8cC";
const getVercelDeploymentMeta = async (
  appLink: string,
  vercelToken: string
) => {
  const url = appLink.replace("https://", "").replace(/\/$/, "");
  const data = await fetch(
    `https://api.vercel.com/v13/deployments/${url}?teamId=${TEAM_ID}`,
    {
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        Host: "api.vercel.com",
      },
    }
  ).then((r) => r.json());
  return data as WebhookDeploy["payload"]["deployment"];
};

export const getGithubMetaFromVercelLink = createWorkflowAction(
  async ({ github, context, process }) => {
    const { appLink, vercelToken } = getProcessEnvs(process, [
      "appLink",
      "vercelToken",
    ] as const);

    const data = await getVercelDeploymentMeta(appLink, vercelToken);

    const result = await github.rest.repos.listPullRequestsAssociatedWithCommit(
      {
        owner: context.repo.owner,
        repo: context.repo.repo,
        commit_sha: data.meta?.githubCommitSha,
      }
    );

    const pr = result.data.find((el) => el.state === "open");

    return {
      prNumber: pr?.number,
      sha: data.meta?.githubCommitSha,
      branch: data.meta?.githubCommitRef,
      meta: data.meta,
    };
  }
);

export const updateSummaryVercelManualDeploy = createWorkflowAction(
  async (args) => {
    const { check, vercelToken, status, appLink } = getProcessEnvs(
      args.process,
      ["check", "vercelToken", "status", "appLink"] as const
    );
    const { previewLink } = args.process.env;
    const data = await getVercelDeploymentMeta(appLink, vercelToken);
    await updateSummary(args, getPrNumberEnv(args.process), (body) =>
      body.replace(
        `- ${check} Running ⏳`,
        status === "error"
          ? `- [ ] ${process.env.check} Failed ❌ [Inspect](${data.inspectorUrl})`
          : `- ${check} Completed ✅  [Visit ${check} Preview](${previewLink}) - [Inspect](${data.inspectorUrl})`
      )
    );
  }
);

export const getVercelPreviewLinkByComment = async (
  issueComment: string,
  shouldThrow = true
) => {
  if (shouldThrow && /Building/.test(issueComment)) {
    throw new Error("Deployment in progress");
  }
  const matches = /\[Visit Preview\]\(([^\)]+)\)/.exec(issueComment);
  if (!matches || !matches[1]) {
    if (!shouldThrow) {
      return;
    }
    throw new Error("Missing Preview Link");
  }
  const previewLink = matches[1].trim();
  log("cyan", `previewLink link: ${previewLink}`);
  return previewLink;
};

export const getVercelPreviewLink = createWorkflowAction(async (args) => {
  const comment = await findComment(args, {
    issueNumber: getPrNumberEnv(args.process),
    bodyIncludes: "Visit Preview",
  });
  const body = comment?.body ?? "";
  log("cyan", `Found body: ${body}`);
  return getVercelPreviewLinkByComment(body);
});

export const createVercelDeploymentStg = createWorkflowAction(async (args) => {
  const repoId = 402537403;
  const { VERCEL_TOKEN, SHA, BRANCH_NAME, CHECK } = getProcessEnvs(
    args.process,
    ["VERCEL_TOKEN", "BRANCH_NAME", "SHA", "CHECK"] as const
  );
  const data = await fetch(
    `https://api.vercel.com/v13/deployments?forceNew=1&teamId=${TEAM_ID}`,
    {
      headers: {
        Authorization: `Bearer ${VERCEL_TOKEN}`,
        Host: "api.vercel.com",
      },
      method: "POST",
      body: JSON.stringify({
        name: /Vercel Klimt/.test(CHECK) ? "klimt" : "atticodellino",
        project: /Vercel Klimt/.test(CHECK)
          ? "prj_VGpgswh13VMdazSvo2ftLcv9Qr0j"
          : "QmSXfTkB2ZdGRj9ei7ANQFU97YJtq1PaFn7PJ2t7naTUVq",
        gitSource: {
          ref: BRANCH_NAME,
          repoId,
          sha: SHA,
          type: "github",
          prId: args.process.env.PR_NUMBER
            ? getPrNumberEnv(args.process)
            : null,
        },
        target: BRANCH_NAME === "main" ? "production" : "staging",
        projectSettings: {
          framework: "nextjs",
        },
      }),
    }
  ).then((r) => r.json());
  console.log(data);
  return data;
});
