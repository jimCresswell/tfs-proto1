/**
 * Integration tests for Vue components and plugin congfigurations,
 * e.g. the Vue components that require rendering in a virtual DOM.
 *
 * These tests are slower than the non-Vue unit tests.
 */

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/src/components/**/*.(spec|test).[jt]s?(x)',
    '**/src/router/**/*.(spec|test).[jt]s?(x)',
    '**/src/store/**/*.(spec|test).[jt]s?(x)'
  ]
}
