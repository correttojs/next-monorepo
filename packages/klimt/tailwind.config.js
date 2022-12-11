const path = require("path");

module.exports = {
  content: [
    path.join(__dirname, "./app/**/*.(js|jsx|ts|tsx)"),
    path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)"),
    path.join(__dirname, "../ui/src/**/*.(js|jsx|ts|tsx)"),
  ],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', "sans-serif"],
    },

    extend: {
      height: (theme) => ({
        map: "800px",
      }),
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
