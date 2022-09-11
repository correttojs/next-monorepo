import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';

import type Core from '@actions/core';

type CoreType = typeof Core;

export type ContextBase = {
    repo: {
        owner: string;
        repo: string;
    };
};

type User = RestEndpointMethodTypes['users']['list']['response']['data'][0];

export type Github = Octokit;

export type PrContext = ContextBase & {
    payload: {
        action: string;
        after: string;
        before: string;
        number: number;
        organization: RestEndpointMethodTypes['orgs']['get']['response']['data'];
        pull_request: RestEndpointMethodTypes['pulls']['checkIfMerged']['response']['data'];
        repository: RestEndpointMethodTypes['repos']['get']['response']['data'];
        sender: User;
    };
    eventName: 'pull_request';
    sha: string;
    ref: string;
    workflow: string;
    action: string;
    actor: string;
    job: string;
    runNumber: number;
    runId: number;
    apiUrl: string;
    serverUrl: string;
    graphqlUrl: string;
};

export type ActionArgs<T = ContextBase> = {
    github: Octokit;
    process: { env: Record<string, string> };
    core: CoreType;
    context: T;
};

const createAction =
    <T>() =>
    <S>(fn: (args: T) => S) =>
    (args: T) =>
        fn(args);

export const createPrAction = createAction<ActionArgs<PrContext>>();

export const createWorkflowAction = createAction<ActionArgs>();

type IssueContext = ContextBase & { issue: ContextBase['repo'] & { number: number }; payload: { comment: { id: number } } };
export const createIssueCommentAction = createAction<ActionArgs<IssueContext>>();
