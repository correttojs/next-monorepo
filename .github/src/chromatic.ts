import childProcess from "child_process";
import { updateSummary } from "./pr_summary";
import { ActionArgs, createWorkflowAction } from "./utils/createAction";
import { getPrNumberEnv, getProcessEnvs } from "./utils/envUtils";
import { updateCommitStatus } from "./status";
import { log } from "./utils/log";

type ChromaticCommandArgs = {
  CHROMATIC_BRANCH: string;
  CHROMATIC_PROJECT_TOKEN: string;
  CHROMATIC_SHA: string;
  processEnvs: Record<string, string>;
};

export const runCommand = (
  command: string,
  args: string[],
  env: Record<string, string>
) => {
  log(
    "magenta",
    `Running command ${command} with args ${args.join(
      ", "
    )} and env ${Object.keys(env)
      .filter((key) => key.includes("CHROMATIC_"))
      .map((key) => `${key}=${env[key]}`)
      .join(", ")}`
  );
  const child = childProcess.spawnSync(command, args, {
    encoding: "utf8",
    env,
  });
  return child;
};

const runChromaticCommand = ({
  processEnvs,
  ...chromaticArgs
}: ChromaticCommandArgs) => {
  const combinedArgs = ["chromatic", `--force-rebuild`, `--ci`];
  const env = {
    CHROMATIC_SLUG: "joyn/web-client",
    ...chromaticArgs,
  };
  const child = runCommand("npx", combinedArgs, { ...processEnvs, ...env });
  log("green", "OUTPUT", child.stdout);
  log("red", "ERROR", child.stderr);
  const buildUrl = child.stdout?.match(".*View build details at (.*)\n")?.[1];
  const storybookUrl = child.stdout?.match(
    ".*View your Storybook at (.*)\n"
  )?.[1];
  const errorUrl = child.stderr?.match(".*Review the changes at (.*)\n")?.[1];
  const changes = child.stderr?.match("Found (.*) visual change")?.[1];
  return {
    status: child.status || 0,
    buildUrl,
    storybookUrl,
    errorUrl,
    changes,
  };
};

export const runChromatic = createWorkflowAction(async (args: ActionArgs) => {
  const { SHA, runId, repository, CHROMATIC_PROJECT_TOKEN, BRANCH_NAME } =
    getProcessEnvs(args.process, [
      "SHA",
      "BRANCH_NAME",
      "CHROMATIC_PROJECT_TOKEN",
      "runId",
      "repository",
    ] as const);
  const { buildUrl, storybookUrl, errorUrl, status, changes } =
    runChromaticCommand({
      CHROMATIC_BRANCH: BRANCH_NAME,
      CHROMATIC_SHA: SHA,
      CHROMATIC_PROJECT_TOKEN,
      processEnvs: args.process.env,
    });
  const sourceMessage = `- Chromatic Running ⏳`;
  const targetMessage =
    status === 0
      ? `- Chromatic Completed ✅ [Storybook](${storybookUrl}) [Build Details](${buildUrl})`
      : `- [ ] Chromatic Failed ❌ [Storybook](${storybookUrl}) ${changes} change found [Review Changes](${errorUrl})`;
  await updateSummary(args, getPrNumberEnv(args.process), (body) =>
    body.replace(sourceMessage, targetMessage)
  );
  await updateCommitStatus(args, {
    sha: SHA,
    runId,
    repository,
    check: "Chromatic",
    state: status === 0 ? "success" : "failure",
    targetUrl: status === 0 ? storybookUrl : errorUrl,
  });
});
