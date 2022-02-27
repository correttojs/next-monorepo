/* eslint-disable */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/.jest/setupJest.js"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/packages/atticodellino/src/$1",
    "^@packages/utils/(.*)": "<rootDir>/packages/utils/src/$1",
    "^@packages/ui/(.*)": "<rootDir>/packages/ui/src/$1",
  },
  modulePathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/coverage/",
    "<rootDir>/cache",
    "<rootDir>/build",
  ],
  testEnvironment: "jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
