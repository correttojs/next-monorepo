import { ActionArgs, createIssueCommentAction, createPrAction, PrContext } from './utils/createAction';
import fs from 'fs';
import { getPrNumberEnv, getProcessEnvs } from './utils/envUtils';
import { log } from './utils/log';
import { runChromatic } from './chromatic';

const botDelimiter = '## 🤖 Bot Message 🤖';

export const updateSummary = async ({ github, context, core }: ActionArgs, prNumber: number, replaceBody: (body: string) => string) => {
    const { data } = await github.rest.pulls.get({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: prNumber,
    });
    core.info(`Source: ${data.body}`);
    const body = replaceBody(data.body ?? '');
    core.info(`Target: ${body}`);
    await github.rest.pulls.update({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: prNumber,
        body,
    });
    return body;
};

export const initSummary = async ({ github, context }: ActionArgs, prNumber: number, branchRef: string, originalBody?: string) => {
    let prTemplate = fs.readFileSync('.github/pull_request_template.md', 'utf8');
    if (!originalBody) {
        const { data } = await github.rest.pulls.get({
            owner: context.repo.owner,
            repo: context.repo.repo,
            pull_number: prNumber,
        });
        originalBody = data.body ?? '';
    }

    let originalSummary = (originalBody || '').split(botDelimiter)[0];
    const ticketMatch = branchRef.match(/.+\/([a-zA-Z]{2,5}\-\d{2,5}).*/i);

    log('blue', `Jira ticket: ${ticketMatch?.[1]}`);
    if (ticketMatch?.[1]) {
        prTemplate = prTemplate.replace('{{jira_placeholder}}', `https://7tvrevolution.atlassian.net/browse/${ticketMatch[1]}`);
    }

    const body = `${originalSummary}${botDelimiter}${prTemplate.split(botDelimiter)[1]}`;

    await github.rest.pulls.update({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: prNumber,
        body,
    });
};

export const init = createPrAction(async (args) => {
    log('cyan', `Init PR Summary: ${JSON.stringify(args.context)}, ${args.context.payload.number}`);
    const { BRANCH } = getProcessEnvs(args.process, ['BRANCH'] as const);
    await initSummary(args, args.context.payload.number, BRANCH);
});

type PRChangeEvent = {
    changes: { body: { from: string } };
    pull_request: { number: number; body: string; head: { ref: string } };
    number: number;
};

export const hasCheckboxChanged = async (
    args: ActionArgs<PrContext>,
    event: PRChangeEvent,
    checkBoxText: string,
    replaceBody: (body: string) => string
) => {
    const prevState = `- [ ] ${checkBoxText}`;
    const nextState = `- [x] ${checkBoxText}`;
    const hasCheckboxUpdated =
        (event.changes.body.from.includes(prevState) && event.pull_request.body.includes(nextState));
    log(hasCheckboxUpdated ? 'cyan' : 'reset', `hasCheckboxUpdated ${checkBoxText} changed: ${hasCheckboxUpdated}`);
    if (hasCheckboxUpdated) {
        const body = await updateSummary(args, event.number, replaceBody);
        log('blue', `Updated ${checkBoxText} ${body}`);
        return { value: checkBoxText, body };
    } else {
        return { value: false, body: '' };
    }
};

export const checkSummary = createPrAction(async (args) => {
    const { prEvent } = getProcessEnvs(args.process, ['prEvent'] as const);

    const event: PRChangeEvent = JSON.parse(prEvent);
    // in case renovate removes the bot summary, regenerate it
    if (!event.pull_request.body.includes(botDelimiter)) {
        await initSummary(args, event.pull_request.number, event.pull_request.head.ref, event.pull_request.body);
        return { value: false, body: '' };
    }

    const values = await Promise.all(['Chromatic', 'Rebase', 'Vercel Klimt', 'Vercel Attico del Lino'].map(async (checkBoxText) => {
        return await hasCheckboxChanged(args, event, checkBoxText, (body: string) => {
            let newBody = body.replace(' Failed ❌', '');
            if (/Vercel/.test(checkBoxText)) {
                newBody = newBody.replace(`- [x] ${checkBoxText}`, `- ${checkBoxText} deployment triggered ☑️`);
            } else {
                newBody = newBody.replace(`- [x] ${checkBoxText}`, `- ${checkBoxText} Running ⏳`);
            }

            return newBody;
        });
    }));
    const changedValue = values.find((value) => !!value.value);
    if (changedValue) {
        log('green', `ChangedValue: ${JSON.stringify(changedValue)}`);
        if (changedValue.value === "Chromatic") {
            await runChromatic(args);
        }
        return { value: changedValue.value };
    } else {
        log('green', 'No checkbox changed');
        return { waitForVercel: null, value: null };
    }
});

export const updateSummarySourceTarget = async (args: ActionArgs) => {
    const { source, target } = getProcessEnvs(args.process, ['source', 'target'] as const);
    await updateSummary(args, getPrNumberEnv(args.process), (body) => body.replace(source, target));
};

export const regenerateSummary = createIssueCommentAction(async (args) => {
    const { owner, repo, number } = args.context.issue;
    const allData = await Promise.all([
        args.github.rest.reactions.createForIssueComment({
            owner,
            repo,
            comment_id: args.context.payload.comment.id,
            content: '+1',
        }),
        args.github.rest.pulls.get({
            owner,
            repo,
            pull_number: number,
        }),
    ]);
    const pr = allData[1].data;
    await initSummary(args, number, pr.head.ref, pr.body ?? '');
});
