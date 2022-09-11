import * as Chromatic from '../chromatic';
import { checkSummary, hasCheckboxChanged, updateSummarySourceTarget } from '../pr_summary';
const context = { repo: { owner: 'testOwner', repo: 'testRepo' } };
const core = { info: jest.fn() };
import * as childProcess from 'child_process';
import { ChromaticSuccess, ChromaticError } from '../__mocks__/chromaticLog';

const originalBody =
    '## 🤖 Bot Message 🤖 \n**Checks Status:** \n All the branches except for `/chore/*` and `/renovate/*` requires the `Cypress` and `Chromatic` checks \n - [ ] Run Cypress and Chromatic  \n - [ ] Cypress (⏱ Waiting for Vercel deployment)  \n - [ ] Chromatic \n - [ ] Vercel Stg \n - [ ] Vercel Int \n - [ ] Rebase  \n';
describe('Chromatic Action', () => {
    it('should parse output on success', async () => {
        const getGithub = jest.fn().mockResolvedValue({ data: { body: 'Test Body' } });
        const updateGithub = jest.fn().mockResolvedValue({ data: { body: 'Test Body' } });
        const createCommitStatus = jest.fn().mockResolvedValue({ data: { body: 'Test Body' } });
        const github = {
            rest: {
                pulls: {
                    get: getGithub,
                    update: updateGithub,
                },
                repos: {
                    createCommitStatus,
                },
            },
        };
        const runCommandSpy = jest.spyOn(Chromatic, 'runCommand').mockImplementation(() => {
            return {
                stdout: ChromaticSuccess,
                stderr: '',
                status: 0,
                pid: 1,
                output: [ChromaticSuccess, ''],
                signal: null,
            };
        });

        await Chromatic.runChromatic({
            github,
            context,
            core,
            process: {
                env: {
                    CHROMATIC_SHA: 'Test',
                    runId: 'runId1',
                    repository: 'repo',
                    CHROMATIC_BRANCH: 'branch',
                    CHROMATIC_PROJECT_TOKEN: 'token',
                    PR_NUMBER: '123',
                },
            },
        } as any);
        expect(runCommandSpy).toHaveBeenCalledWith('npx', ['chromatic', '--force-rebuild', '--ci'], {
            CHROMATIC_BRANCH: 'branch',
            CHROMATIC_PROJECT_TOKEN: 'token',
            CHROMATIC_SHA: 'Test',
            CHROMATIC_SLUG: 'joyn/web-client',
            PR_NUMBER: '123',
            repository: 'repo',
            runId: 'runId1',
        });
        expect(updateGithub).toHaveBeenCalledWith({ body: 'Test Body', owner: 'testOwner', pull_number: 123, repo: 'testRepo' });
        expect(createCommitStatus).toHaveBeenCalledWith({
            context: 'Chromatic',
            description: 'Chromatic succeeded ✅',
            owner: 'testOwner',
            sha: 'Test',
            repo: 'testRepo',
            state: 'success',
            target_url: 'https://61adb6fc8303bd003a0843f4-eoxctckrcm.chromatic.com',
        });
    });

    it('should parse output on error', async () => {
        const getGithub = jest.fn().mockResolvedValue({ data: { body: 'Test Body' } });
        const updateGithub = jest.fn().mockResolvedValue({ data: { body: 'Test Body' } });
        const createCommitStatus = jest.fn().mockResolvedValue({ data: { body: 'Test Body' } });
        const github = {
            rest: {
                pulls: {
                    get: getGithub,
                    update: updateGithub,
                },
                repos: {
                    createCommitStatus,
                },
            },
        };
        const runCommandSpy = jest.spyOn(Chromatic, 'runCommand').mockImplementation(() => {
            return {
                stdout: ChromaticSuccess,
                stderr: ChromaticError,
                status: 1,
                pid: 1,
                output: [ChromaticSuccess, ''],
                signal: null,
            };
        });

        const res = await Chromatic.runChromatic({
            github,
            context,
            core,
            process: {
                env: {
                    CHROMATIC_SHA: 'Test',
                    runId: 'runId1',
                    repository: 'repo',
                    CHROMATIC_BRANCH: 'branch',
                    CHROMATIC_PROJECT_TOKEN: 'token',
                    PR_NUMBER: '123',
                },
            },
        } as any);
        expect(runCommandSpy).toHaveBeenCalledWith('npx', ['chromatic', '--force-rebuild', '--ci'], {
            CHROMATIC_BRANCH: 'branch',
            CHROMATIC_PROJECT_TOKEN: 'token',
            CHROMATIC_SHA: 'Test',
            CHROMATIC_SLUG: 'joyn/web-client',
            PR_NUMBER: '123',
            repository: 'repo',
            runId: 'runId1',
        });

        expect(updateGithub).toHaveBeenCalledWith({ body: 'Test Body', owner: 'testOwner', pull_number: 123, repo: 'testRepo' });
        expect(createCommitStatus).toHaveBeenCalledWith({
            context: 'Chromatic',
            description: 'Chromatic failed ❌',
            owner: 'testOwner',
            sha: 'Test',
            state: 'failed',
            repo: 'testRepo',
            target_url: 'https://www.chromatic.com/build?appId=61adb6fc8303bd003a0843f4&number=2555',
        });
    });
});
