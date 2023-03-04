module.exports = {
  plugins: [
    [
      "@csstools/postcss-global-data",
      {
        files: ["../ui/src/styles/mediaQueries.css"],
      },
    ],
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
    "postcss-custom-media",
  ],
};
