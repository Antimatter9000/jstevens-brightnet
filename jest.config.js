module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(js)",
    "**/?(*.)+(spec|test).+(js)"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js"
  ],
  moduleNameMapper: {
    "src(.*)$": "<rootDir>/src/$1",
  }
};
