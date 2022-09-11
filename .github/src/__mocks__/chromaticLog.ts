export const ChromaticSuccess = `Chromatic CLI v6.9.0
https://www.chromatic.com/docs/cli

Authenticating with Chromatic
    → Connecting to https://index.chromatic.com
Authenticated with Chromatic
    → Using project token '********6df9'
Retrieving git information
ℹ Use our GitHub Action
It appears you are using a GitHub Actions workflow, but are not using the official GitHub Action for Chromatic.
Find it at https://github.com/marketplace/actions/publish-to-chromatic
Retrieved git information
    → Commit 'dc25323' on branch 'feature/WEB-3126-flyout-navigation'; found 2 parent builds
Collecting Storybook metadata
Collected Storybook metadata
    → Storybook 6.5.10 for React; using the webpack5 builder (6.5.10); supported addons found: Links, Essentials
Initializing build
Initialized build
    → Build 2539 initialized
Building your Storybook
    → Running command: npm run --silent build-storybook -- --output-dir /tmp/chromatic--1766-FkiuiwLjrO0E
Storybook built in 2 minutes 37 seconds
    → View build log at /home/runner/work/web-client/web-client/build-storybook.log
Publish your built Storybook
    → Validating Storybook files
Publishing your built Storybook
    → Retrieving target location
    → Starting publish
Publish complete in 3 seconds
    → View your Storybook at https://61adb6fc8303bd003a0843f4-eoxctckrcm.chromatic.com
Verifying your Storybook
    → This may take a few minutes
Started build 2539
    → View build details at https://www.chromatic.com/build?appId=61adb6fc8303bd003a0843f4&number=2539
Running 135 tests
    → This may take a few minutes
✔ Build 2539 passed!
No visual changes were found in this build.
ℹ View build details at https://www.chromatic.com/build?appId=61adb6fc8303bd003a0843f4&number=2539
Build 2539 passed!
    → Tested 106 stories across 65 components; captured 135 snapshots in 4 minutes 55 seconds`;

export const ChromaticError = `
    ERROR ⚠ Branch 'chore/web-00-chromatic-ts' does not exist
We tried to retrieve its latest commit but couldn't find it in your Git history.
Falling back to 5df7fff, but commit details (date, author) will be missing.
Pull request status updates likely won't work properly.
Please use our official GitHub Action or forward the pull_request event info to us.
ℹ Read more at https://www.chromatic.com/docs/github-actions
✖ Found 1 visual change: Review the changes at https://www.chromatic.com/build?appId=61adb6fc8303bd003a0843f4&number=2555
    `;
