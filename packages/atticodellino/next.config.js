const compose = require("lodash/flowRight");
const withGraphql = require("next-plugin-graphql");

const plugins = [withGraphql];

module.exports = compose(plugins)({
  images: {
    domains: ["a0.muscache.com", "media.graphcms.com", "media.graphassets.com"],
  },

  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },
  experimental: {
    disableOptimizedLoading: false,
  },
  transpilePackages: ["@packages/ui", "@packages/utils"],
});
