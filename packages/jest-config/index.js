/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  rootDir: './',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)test.[jt]s?(x)']
};
