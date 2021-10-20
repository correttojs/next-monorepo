/** @type {import('next').NextConfig} */

const withGraphql = require("next-plugin-graphql");
module.exports = withGraphql({
  images: {
    domains: ["a0.muscache.com", "media.graphcms.com"],
  },
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  },
  reactStrictMode: true,
});
