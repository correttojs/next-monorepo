const compose = require("lodash/flowRight");
const withPWA = require("next-pwa");
const withGraphql = require("next-plugin-graphql");

const plugins = [withTM, withGraphql, withPWA];

module.exports = compose(plugins)({
  images: {
    domains: ["a0.muscache.com", "media.graphcms.com", "media.graphassets.com"],
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },
  experimental: {
    disableOptimizedLoading: false,
    transpilePackages: ["@packages/ui", "@packages/utils"],
  },
});
