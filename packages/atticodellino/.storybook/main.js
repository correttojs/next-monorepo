const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
      })
    );

    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "false",
  },
  babel: (options) => {
    options.presets = options.presets.map((preset) => {
      if (Array.isArray(preset) && preset[0].includes("@babel/preset-react")) {
        return [require.resolve("@babel/preset-react"), { runtime: "classic" }];
      }

      return preset;
    });

    return options;
  },
};
