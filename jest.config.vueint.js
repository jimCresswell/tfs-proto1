/**
 * Integration tests for Vue components and plugin configurations,
 * e.g. the Vue components that require rendering in a virtual DOM.
 * `yarn test:vueint`
 *
 * These tests are slower than the non-Vue tests.
 */

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/src/**/*.vueint.(spec|test).[jt]s?(x)'
  ]
}
