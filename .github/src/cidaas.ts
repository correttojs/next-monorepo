import fetch from 'node-fetch';
import { createWorkflowAction } from './utils/createAction';
import { getPrNumberEnv, getProcessEnvs } from './utils/envUtils';
import { findComment } from './utils/findComment';
import { getVercelPreviewLinkByComment } from './vercel_deployment_status';

const getEnvs = (process: { env: Record<string, string> }, previewLink: string) => {
    const isStg = () => /^https:\/\/web-stg-git/.test(previewLink);

    const CIDAAS_CLIENT_ID = !isStg() ? process.env.CIDAAS_CLIENT_ID : process.env.CIDAAS_STG_CLIENT_ID;
    const CIDAAS_CLIENT_SECRET = !isStg() ? process.env.CIDAAS_CLIENT_SECRET : process.env.CIDAAS_STG_CLIENT_SECRET;
    const CIDAAS_BASE_URL = !isStg() ? process.env.CIDAAS_BASE_URL : process.env.CIDAAS_STG_BASE_URL;
    const CIDAAS_TARGET_CLIENT_ID = !isStg() ? process.env.CIDAAS_TARGET_CLIENT_ID : process.env.CIDAAS_STG_TARGET_CLIENT_ID;

    console.log('isStg()', isStg());
    console.log('CIDAAS_CLIENT_ID', CIDAAS_CLIENT_ID, process.env.CIDAAS_CLIENT_ID);
    console.log('CIDAAS_CLIENT_SECRET', CIDAAS_CLIENT_SECRET, process.env.CIDAAS_CLIENT_SECRET);
    console.log('CIDAAS_BASE_URL', CIDAAS_BASE_URL, process.env.CIDAAS_BASE_URL);
    console.log('CIDAAS_TARGET_CLIENT_ID', CIDAAS_TARGET_CLIENT_ID, process.env.CIDAAS_TARGET_CLIENT_ID);
    return {
        CIDAAS_CLIENT_ID,
        CIDAAS_CLIENT_SECRET,
        CIDAAS_BASE_URL,
        CIDAAS_TARGET_CLIENT_ID,
    };
};

const getToken = async ({
    CIDAAS_CLIENT_ID,
    CIDAAS_CLIENT_SECRET,
    CIDAAS_BASE_URL,
}: {
    CIDAAS_CLIENT_ID: string;
    CIDAAS_CLIENT_SECRET: string;
    CIDAAS_BASE_URL: string;
}): Promise<string> => {
    var raw = JSON.stringify({
        grant_type: 'client_credentials',
        client_id: CIDAAS_CLIENT_ID,
        client_secret: CIDAAS_CLIENT_SECRET,
    });

    return (
        await fetch(`${CIDAAS_BASE_URL}/token-srv/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: raw,
            redirect: 'follow',
        }).then((response) => response.json())
    ).access_token;
};

type ArgsBase = {
    CIDAAS_BASE_URL: string;
    CIDAAS_TARGET_CLIENT_ID: string;
    token: string;
};

const getConfig = async ({ token, CIDAAS_BASE_URL, CIDAAS_TARGET_CLIENT_ID }: ArgsBase): Promise<string[]> => {
    return (
        await fetch(`${CIDAAS_BASE_URL}/apps-srv/clients/${CIDAAS_TARGET_CLIENT_ID}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            redirect: 'follow',
        }).then((response) => response.json())
    ).data.redirect_uris;
};

const setRedirectUrl = async ({ token, CIDAAS_TARGET_CLIENT_ID, CIDAAS_BASE_URL }: ArgsBase, config: string[]) => {
    const raw = JSON.stringify({
        client_id: CIDAAS_TARGET_CLIENT_ID,
        redirect_uris: config,
    });

    return await fetch(`${CIDAAS_BASE_URL}/apps-srv/clients`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        redirect: 'follow',
        body: raw,
    }).then((response) => response.json());
};

export const addRedirectionUrl = createWorkflowAction(async (args) => {
    const { ISSUE_COMMENT } = getProcessEnvs(args.process, ['ISSUE_COMMENT']);
    const previewLink = await getVercelPreviewLinkByComment(ISSUE_COMMENT, false);
    if (previewLink) {
        console.log('Adding previewLink', previewLink);
        const { CIDAAS_CLIENT_ID, CIDAAS_CLIENT_SECRET, CIDAAS_BASE_URL, CIDAAS_TARGET_CLIENT_ID } = getEnvs(args.process, previewLink);
        const token = await getToken({ CIDAAS_CLIENT_ID, CIDAAS_CLIENT_SECRET, CIDAAS_BASE_URL });
        const config = await getConfig({ CIDAAS_BASE_URL, CIDAAS_TARGET_CLIENT_ID, token });
        const res = await setRedirectUrl({ CIDAAS_BASE_URL, CIDAAS_TARGET_CLIENT_ID, token }, [
            ...config.filter((link) => link !== previewLink),
            previewLink,
        ]);
        console.log(res);
    }
});

export const removeRedirectionUrl = createWorkflowAction(async (args) => {
    const comment = await findComment(args, { issueNumber: getPrNumberEnv(args.process), bodyIncludes: 'Visit Preview' });
    const body = comment?.body ?? '';
    const previewLink = await getVercelPreviewLinkByComment(body, false);
    if (previewLink) {
        console.log('Removing previewLink', previewLink);
        const { CIDAAS_CLIENT_ID, CIDAAS_CLIENT_SECRET, CIDAAS_BASE_URL, CIDAAS_TARGET_CLIENT_ID } = getEnvs(args.process, previewLink);
        const token = await getToken({ CIDAAS_CLIENT_ID, CIDAAS_CLIENT_SECRET, CIDAAS_BASE_URL });
        const config = await getConfig({ CIDAAS_BASE_URL, CIDAAS_TARGET_CLIENT_ID, token });
        const res = await setRedirectUrl(
            { CIDAAS_BASE_URL, CIDAAS_TARGET_CLIENT_ID, token },
            config.filter((link) => link !== previewLink)
        );
        console.log(res);
    }
});
