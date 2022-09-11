const stopBuild = () => {
    console.log(
        `🛑 - Build cancelled: \n
Author: ${process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME}  \n
Branch:${process.env.VERCEL_GIT_COMMIT_REF} \n
Commit message: "${process.env.VERCEL_GIT_COMMIT_MESSAGE}"`
    );
    return 0;
};

const checkBuild = () => {
    console.log(`Node version: ${process.version}`);
    if (process.env.VERCEL_GIT_COMMIT_REF !== 'main') {
        return stopBuild();
    }
    return 1;
};

if (process.env.NODE_ENV !== 'test') {
    process.exit(checkBuild());
}

module.exports = {
    checkBuild,
};
