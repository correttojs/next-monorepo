/** @type {import('next').NextConfig} */

const compose = require("lodash/flowRight");
const withGraphql = require("next-plugin-graphql");

const plugins = [withGraphql];

module.exports = compose(plugins)({
  images: {
    domains: ["a0.muscache.com"],
  },
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  },
  reactStrictMode: true,
});
