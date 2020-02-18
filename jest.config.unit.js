/**
 * Non-Vue code tests, which should be unit tests.
 */

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/src/**/*.(spec|test).[jt]s?(x)',
    '**/tests/unit/**/*.(spec|test).[jt]s?(x)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/components/',
    '<rootDir>/src/router/',
    '<rootDir>/src/store/'
  ]
}
