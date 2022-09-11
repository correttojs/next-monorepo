import { ActionArgs, createWorkflowAction } from './utils/createAction';
import { getProcessEnvs } from './utils/envUtils';

type UpdateStatusInputs = { sha: string; runId: string; repository: string; check: string; state: string; targetUrl?: string };
export const updateCommitStatus = async (
    { github, context }: ActionArgs,
    { sha, runId, repository, check, state, targetUrl }: UpdateStatusInputs
) => {
    const description = state === 'success' ? `${check} succeeded ✅` : state === 'skipped' ? `${check} skipped ☑️` : `${check} failed ❌`;
    await github.rest.repos.createCommitStatus({
        sha,
        state: state === 'skipped' ? 'success' : (state as 'success' | 'failure'),
        context: check,
        description,
        target_url: targetUrl ?? `https://github.com/${repository}/actions/runs/${{ runId }}`,
        owner: context.repo.owner,
        repo: context.repo.repo,
    });
};

export const updateStatus = createWorkflowAction(async (args: ActionArgs) => {
    const { sha, runId, repository, check, state } = getProcessEnvs(args.process, [
        'sha',
        'runId',
        'repository',
        'check',
        'state',
    ] as const);
    const { targetUrl } = process.env;
    await updateCommitStatus(args, { sha, runId, repository, check, state, targetUrl });
});
