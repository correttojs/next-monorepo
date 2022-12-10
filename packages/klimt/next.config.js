/** @type {import('next').NextConfig} */

const withGraphql = require("next-plugin-graphql");
module.exports = withGraphql({
  images: {
    domains: ["a0.muscache.com", "media.graphcms.com", "media.graphassets.com"],
  },
  // i18n: {
  //   locales: ["de", "en"],
  //   defaultLocale: "de",
  // },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    transpilePackages: ["@packages/ui", "@packages/utils"],
  },
});
