/**
 * Non-Vue unit tests. `yarn test:unit`
 */

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/src/**/*.unit.(spec|test).[jt]s?(x)'
  ]
}
