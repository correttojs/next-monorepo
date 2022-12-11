/** @type {import('next').NextConfig} */

const withGraphql = require("next-plugin-graphql");
module.exports = withGraphql({
  images: {
    domains: ["a0.muscache.com", "media.graphcms.com", "media.graphassets.com"],
  },

  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    transpilePackages: ["@packages/ui", "@packages/utils"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
});
