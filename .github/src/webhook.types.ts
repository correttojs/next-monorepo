type GitMeta = {
    githubCommitAuthorName: string;
    githubCommitMessage: string;
    githubCommitOrg: string;
    githubCommitRef: string;
    githubCommitRepo: string;
    githubCommitSha: string;
    githubDeployment: string;
    githubOrg: string;
    githubRepo: string;
    githubCommitRepoId: string;
    githubRepoId: string;
    githubCommitAuthorLogin: string;
};
export type WebhookDeploy = {
    id: string;
    type: 'deployment-canceled' | 'deployment' | 'deployment-ready' | 'deployment-error' | 'deployment-prepared';
    clientId: string;
    createdAt: number;
    payload: {
        deployment: {
            id: string;
            meta: GitMeta;
            name: string;
            url: string;
            inspectorUrl: string;
        };
        meta?: GitMeta;
        links: {
            deployment: string;
            project: string;
        };
        deploymentId: string;
        name: string;
        plan: string;
        project: string;
        projectId: string;
        regions: [string];
        target: 'production' | 'preview' | null;
        type: 'LAMBDAS';
        url: string;
    };
    ownerId: string;
    teamId: string;
    userId: string;
    webhookId: string;
};

export type CheckType = {
    completedAt: number;
    conclusion: 'succeeded' | 'failed';
    createdAt: number;
    detailsUrl: string;
    id: string;
    integrationId: string;
    name: string;
    rerequestable: boolean;
    startedAt: number;
    status: 'completed';
    updatedAt: number;
};

export type WebhookCheck = {
    id: string;
    name: string;
    status: 'completed';
    conclusion: 'succeeded' | 'failed';
    blocking: boolean;
    integrationId: string;
};
