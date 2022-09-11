import { createWorkflowAction } from './utils/createAction';
import { getProcessEnvs } from './utils/envUtils';

export const run = createWorkflowAction(async (args) => {
    const { BODY, ISSUE_NUMBER } = getProcessEnvs(args.process, ['BODY', 'ISSUE_NUMBER'] as const);
    const playerCheck = '<!-- unlimit-branch=renovate/joyn-player-monorepo -->';
    const source = `[ ] ${playerCheck}`;
    const target = `[x] ${playerCheck}`;

    if (BODY.split('## Rate-Limited')[1]?.split('---')?.[0]?.includes(source)) {
        console.log('Triggering player renovate');
        await args.github.rest.issues.update({
            owner: args.context.repo.owner,
            repo: args.context.repo.repo,
            issue_number: parseInt(ISSUE_NUMBER, 10),
            body: BODY.replace(source, target),
        });
    }
});
