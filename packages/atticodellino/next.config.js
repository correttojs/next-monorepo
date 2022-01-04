const compose = require("lodash/flowRight");
const withPWA = require("next-pwa");
const withGraphql = require("next-plugin-graphql");

const withTM = require("next-transpile-modules")([
  "@packages/ui",
  "@packages/utils",
]);

const plugins = [withTM, withGraphql, withPWA];

module.exports = compose(plugins)({
  target: "serverless",
  images: {
    domains: ["a0.muscache.com", "media.graphcms.com"],
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
    styledComponents: true,
  },
  // future: {
  //   webpack5: true,
  // },
});
