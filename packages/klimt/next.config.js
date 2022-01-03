/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@packages/ui",
  "@packages/utils",
]);
const withGraphql = require("next-plugin-graphql");
module.exports = withTM(
  withGraphql({
    images: {
      domains: ["a0.muscache.com", "media.graphcms.com"],
    },
    i18n: {
      locales: ["de", "en"],
      defaultLocale: "de",
    },
    reactStrictMode: true,
    swcMinify: true,
  })
);
