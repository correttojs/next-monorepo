const path = require("path");
module.exports = {
  content: [
    path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)"),
    path.join(__dirname, "../ui/src/**/*.(js|jsx|ts|tsx)"),
  ],

  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  variants: {},
};
