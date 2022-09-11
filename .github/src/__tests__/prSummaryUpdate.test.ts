import { checkSummary, hasCheckboxChanged, updateSummarySourceTarget } from '../pr_summary';
const context = { repo: { owner: 'testOwner', repo: 'testRepo' } };
const core = { info: jest.fn() };

const originalBody =
    '## 🤖 Bot Message 🤖 \n**Checks Status:** \n All the branches except for `/chore/*` and `/renovate/*` requires the `Cypress` and `Chromatic` checks \n - [ ] Run Cypress and Chromatic  \n - [ ] Cypress (⏱ Waiting for Vercel deployment)  \n - [ ] Chromatic \n - [ ] Vercel Stg \n - [ ] Vercel Int \n - [ ] Rebase  \n';
describe('PR Summary Update', () => {
    it('should update the PR summary', async () => {
        const getGithub = jest.fn().mockResolvedValue({ data: { body: 'Test Body' } });
        const updateGithub = jest.fn().mockResolvedValue({ data: { body: 'Test Body' } });
        const github = {
            rest: {
                pulls: {
                    get: getGithub,
                    update: updateGithub,
                },
            },
        };
        const res = await updateSummarySourceTarget({
            github,
            context,
            core,
            process: {
                env: {
                    source: 'Test',
                    target: 'Updated',
                    PR_NUMBER: '123',
                },
            },
        } as any);
        expect(getGithub).toHaveBeenCalledWith({ owner: 'testOwner', pull_number: 123, repo: 'testRepo' });
        expect(updateGithub).toHaveBeenCalledWith({ body: 'Updated Body', owner: 'testOwner', pull_number: 123, repo: 'testRepo' });
    });
    it('should test one checkbox', async () => {
        const getGithub = jest.fn().mockResolvedValue({ data: { body: '- [x] Test Checkbox' } });
        const updateGithub = jest.fn().mockResolvedValue({ data: { body: 'Test Body' } });
        const github = {
            rest: {
                pulls: {
                    get: getGithub,
                    update: updateGithub,
                },
            },
        };
        const res = await hasCheckboxChanged(
            {
                github,
                context,
                core,
            } as any,
            {
                changes: { body: { from: '- [ ] Test Checkbox' } },
                pull_request: { body: '- [x] Test Checkbox', number: 123, head: { ref: 'testBranch' } },
                number: 123,
            },
            'Test Checkbox',
            (body) => body.replace('- [x] Test Checkbox', 'Running Test Checkbox ⏳')
        );
        expect(getGithub).toHaveBeenCalledWith({ owner: 'testOwner', pull_number: 123, repo: 'testRepo' });
        expect(updateGithub).toHaveBeenCalledWith({
            body: 'Running Test Checkbox ⏳',
            owner: 'testOwner',
            pull_number: 123,
            repo: 'testRepo',
        });
        expect(res).toEqual({ body: 'Running Test Checkbox ⏳', value: 'Test Checkbox' });
    });

    it('should test all checkboxes chromatic', async () => {
        const ToBody = originalBody.replace('- [ ] Chromatic', '- [x] Chromatic');
        const FinalBody = ToBody.replace('- [x] Chromatic', '- Chromatic Running ⏳');
        const getGithub = jest.fn().mockResolvedValue({ data: { body: ToBody } });
        const updateGithub = jest.fn();
        const github = {
            rest: {
                pulls: {
                    get: getGithub,
                    update: updateGithub,
                },
            },
        };
        const res = await checkSummary({
            github,
            context,
            core,
            process: {
                env: {
                    prEvent: JSON.stringify({
                        changes: { body: { from: originalBody } },
                        pull_request: { body: ToBody, number: 123, head: { ref: 'testBranch' } },
                        number: 123,
                    }),
                },
            },
        } as any);
        expect(getGithub).toHaveBeenCalledWith({ owner: 'testOwner', pull_number: 123, repo: 'testRepo' });
        expect(updateGithub).toHaveBeenCalledWith({
            body: FinalBody,
            owner: 'testOwner',
            pull_number: 123,
            repo: 'testRepo',
        });
        expect(res.value).toEqual('Chromatic');
        expect(res.waitForVercel).toBeTruthy();
    });

    it('should test all checkboxes run all', async () => {
        const ToBody = originalBody.replace('- [ ] Run Cypress and Chromatic', '- [x] Run Cypress and Chromatic');
        const FinalBody = ToBody.replace('- [ ] Chromatic', '- Chromatic Running ⏳')
            .replace('- [ ] Cypress', '- Cypress Running ⏳')
            .replace('- [x] Run Cypress and Chromatic', '- Run Cypress and Chromatic');
        const getGithub = jest.fn().mockResolvedValue({ data: { body: ToBody } });
        const updateGithub = jest.fn();
        const github = {
            rest: {
                pulls: {
                    get: getGithub,
                    update: updateGithub,
                },
            },
        };
        const res = await checkSummary({
            github,
            context,
            core,
            process: {
                env: {
                    prEvent: JSON.stringify({
                        changes: { body: { from: originalBody } },
                        pull_request: { body: ToBody, number: 123, head: { ref: 'testBranch' } },
                        number: '123',
                    }),
                },
            },
        } as any);
        expect(getGithub).toHaveBeenCalledWith({ owner: 'testOwner', pull_number: '123', repo: 'testRepo' });
        expect(updateGithub).toHaveBeenCalledWith({
            body: FinalBody,
            owner: 'testOwner',
            pull_number: '123',
            repo: 'testRepo',
        });
        expect(res.value).toEqual('Run Cypress and Chromatic');
        expect(res.waitForVercel).toBeTruthy();
    });

    it('should test all checkboxes Cypress (vercel done)', async () => {
        const FromBody = originalBody.replace('(⏱ Waiting for Vercel deployment)', '');
        const ToBody = FromBody.replace('- [ ] Cypress', '- [x] Cypress');

        const getGithub = jest.fn().mockResolvedValue({ data: { body: ToBody } });
        const updateGithub = jest.fn();
        const github = {
            rest: {
                pulls: {
                    get: getGithub,
                    update: updateGithub,
                },
            },
        };
        const res = await checkSummary({
            github,
            context,
            core,
            process: {
                env: {
                    prEvent: JSON.stringify({
                        changes: { body: { from: FromBody } },
                        pull_request: { body: ToBody, number: 123, head: { ref: 'testBranch' } },
                        number: '123',
                    }),
                },
            },
        } as any);

        expect(getGithub).toHaveBeenCalledWith({ owner: 'testOwner', pull_number: '123', repo: 'testRepo' });
        expect(updateGithub).toHaveBeenCalledWith({
            body: expect.any(String),
            owner: 'testOwner',
            pull_number: '123',
            repo: 'testRepo',
        });
        expect(res.value).toEqual('Cypress');
        expect(res.waitForVercel).toBeFalsy();
    });

    it('should test no changes', async () => {
        const ToBody = originalBody.replace('Checks Status', 'Checks Status Updates');
        const getGithub = jest.fn().mockResolvedValue({ data: { body: ToBody } });
        const updateGithub = jest.fn();
        const github = {
            rest: {
                pulls: {
                    get: getGithub,
                    update: updateGithub,
                },
            },
        };
        const res = await checkSummary({
            github,
            context,
            core,
            process: {
                env: {
                    prEvent: JSON.stringify({
                        changes: { body: { from: originalBody } },
                        pull_request: { body: ToBody, number: 123, head: { ref: 'testBranch' } },
                        number: '123',
                    }),
                },
            },
        } as any);

        expect(getGithub).not.toHaveBeenCalled();
        expect(updateGithub).not.toHaveBeenCalled();
        expect(res.value).toBeNull();
        expect(res.waitForVercel).toBeNull();
    });
});
