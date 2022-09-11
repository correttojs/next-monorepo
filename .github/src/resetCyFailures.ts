import { createWorkflowAction } from './utils/createAction';
import { getPrNumberEnv, getProcessEnvs } from './utils/envUtils';
import fetch from 'node-fetch';
import { updateSummary } from './pr_summary';
import { log } from './utils/log';

// process.env.BUILD_ID = 'feature/web-2490-lane-layout--2022-02-04T19:50:47Z';
// process.env.GROUP_ID = './tests/features';
type Specs = { instanceId: string; groupId: string; spec: string; results: { stats: { failures: number } } };
type Result = { data: { runs: { runId: string; specs: Specs[] }[] } };

const getSorryCy = async (buildId: string, groupId: string) => {
    const data = (await fetch('https://sorry-cypress.dev.web.s.joyn.de/api', {
        headers: {
            accept: '*/*',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            pragma: 'no-cache',
            Referer: 'https://sorry-cypress.dev.web.s.joyn.de/api',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: `{\"operationName\":null,\"variables\":{},\"query\":\"{\\n  runs(\\n    filters: {key: \\\"meta.ciBuildId\\\", value: \\\"${buildId}\\\"}\\n  ) {\\n    runId\\n    specs {\\n      instanceId\\n  groupId\\n       spec\\n      results {\\n        stats {\\n          failures\\n        }\\n      }\\n    }\\n  }\\n}\\n\"}`,
        method: 'POST',
    }).then((r) => r.json())) as Result;

    const errorInstances = data.data.runs[0].specs.filter(
        (spec) => spec.groupId === groupId && spec.results && spec.results.stats.failures > 0
    );
    const res = { errorInstances, runId: data.data.runs[0].runId };

    log('blue', JSON.stringify(res));
    return res;
};

export const resetCyFailures = createWorkflowAction(async (args) => {
    const { BUILD_ID, GROUP_ID } = getProcessEnvs(args.process, ['BUILD_ID', 'GROUP_ID'] as const);
    const data = await getSorryCy(BUILD_ID, GROUP_ID);

    await Promise.all(
        data.errorInstances.map((instance: { instanceId: string }) =>
            fetch('https://sorry-cypress.dev.web.s.joyn.de/api', {
                headers: {
                    accept: '*/*',
                    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7',
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    pragma: 'no-cache',
                    Referer: 'https://sorry-cypress.dev.web.s.joyn.de/api',
                    'Referrer-Policy': 'strict-origin-when-cross-origin',
                },
                body: `{"operationName":null,"variables":{},"query":"mutation {\\n  resetInstance(instanceId: \\"${instance.instanceId}\\") {\\n    success\\n    message\\n  }\\n}\\n"}`,
                method: 'POST',
            })
                .then((r) => r.json())
                .then((result) => {
                    console.log(result);
                })
        )
    );
    log('red', `Errors count: ${data.errorInstances.length}`);
    return data.errorInstances.length;
});

export const getFailingTests = createWorkflowAction(async (args) => {
    const { BUILD_ID, GROUP_ID } = getProcessEnvs(args.process, ['BUILD_ID', 'GROUP_ID'] as const);
    const res = await getSorryCy(BUILD_ID, GROUP_ID);

    if (res.errorInstances.length > 0) {
        return `<https://sorry-cypress.dev.web.s.joyn.de/run/${res.runId}|SorryCypress>  ${res.errorInstances
            .map((i) => i.spec)
            .join(', ')}`;
    }
});

export const updateSummaryCypress = createWorkflowAction(async (args) => {
    const { BUILD_ID, GROUP_ID } = getProcessEnvs(args.process, ['BUILD_ID', 'GROUP_ID'] as const);
    const res = await getSorryCy(BUILD_ID, GROUP_ID);
    if (res.errorInstances.length > 0) {
        await updateSummary(args, getPrNumberEnv(args.process), (body) =>
            body.replace(
                `- Cypress Running ⏳ (Vercel deployment is ready)`,
                `- [ ] Cypress Failed ❌ [SorryCypress](https://sorry-cypress.dev.web.s.joyn.de/run/${res.runId}) - ${res.errorInstances
                    .map((i) => i.spec)
                    .join(', ')}`
            )
        );
    } else {
        await updateSummary(args, getPrNumberEnv(args.process), (body) =>
            body.replace(
                `- Cypress Running ⏳ (Vercel deployment is ready)`,
                `- Cypress Completed ✅ [SorryCypress](https://sorry-cypress.dev.web.s.joyn.de/run/${res.runId})`
            )
        );
    }
});
