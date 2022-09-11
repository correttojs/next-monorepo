const checkBuild = () => {
    console.log(`Node version: ${process.version}`);

    return 1;
};

if (process.env.NODE_ENV !== 'test') {
    process.exit(checkBuild());
}

module.exports = {
    checkBuild,
};
