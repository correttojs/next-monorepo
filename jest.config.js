/* eslint-disable */
process.env.WEBPACK_TOGGLE = {};
module.exports = {
  automock: false,
  moduleNameMapper: {
    "\\.(svg|jpg|webp|ttf|woff|png|gif|scss|css)$":
      "<rootDir>/.jest/fileMock.js",
    "^@/(.*)": "<rootDir>/packages/atticodellino/src/$1",
    "^@packages/utils/(.*)": "<rootDir>/packages/utils/src/$1",
    "^@packages/ui/(.*)": "<rootDir>/packages/ui/src/$1",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "graphql"],
  modulePathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/coverage/",
    "<rootDir>/cypress",
    "<rootDir>/cache",
    "<rootDir>/build",
    "<rootDir>/packages/atticodellino",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setupJest.js"],

  transform: {
    "\\.(gql|graphql)$": "jest-transform-graphql",
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  globals: {},
  testEnvironment: "jsdom",
};
