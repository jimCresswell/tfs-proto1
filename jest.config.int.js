/**
 * Non-Vue integration tests. `yarn test:int`
 */

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/src/**/*.int.(spec|test).[jt]s?(x)'
  ]
}
