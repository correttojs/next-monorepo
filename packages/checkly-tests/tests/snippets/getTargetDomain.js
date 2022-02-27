const getTargetDomain = () => {
  return process.env.ENVIRONMENT_URL || "https://www.atticodellino.com";
};

module.exports = getTargetDomain;
