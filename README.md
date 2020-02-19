# trees-from-seed

A client-side web app providing information and guidance on growing native and naturalised trees (UK/northern Europe) from seed. The information should be applicable in any temperate zone although obviously native species will vary.

## Technology

This is a [Vue](https://vuejs.org/) client-side web app, using Vuex for (flux-like) state management and Vue-Router for client-side routing. UI components are defined in single-page components with the default Vue template syntax, ES6 and SCSS. Predefined UI components are from [Vuetify](https://vuetifyjs.com). Compilation is via Vue-CLI configured Babel and Webpack.

## Data

The initial data is specified in individual tree files e.g. the [common oak](src\data\trees\quercus_robur.js), the data is passed to an encapsulating [`Tree` class](src\data\trees\tree.js) and compared to a schema with [key and value-type checking](src\data\helpers\schema.js).

Additional data and CC licence images will be downloaded client-side from the [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/#/).

## Scripts

* `yarn install`.
* `yarn serve` - dev serve with hot reload.
* `yarn build`- production compilation with minification.
* Test
  * `yarn test:unit` - unit tests (Jest) that don't depend on Vue.
  * `yarn test:int` - unit-like tests (Jest) that do depend on Vue or Vue plugins.
  * `yarn test:code` - equivalent to `unit` and `int` tests.
  * `yarn test:e2e` - end-to-end web GUI tests using Cypress. Note that Cypress supports cross-browser tests from `4.0.0`, `@vue/cli-plugin-e2e-cypress` is currently using `3.8.3`, the intention is to upgrade when supported by Vue.
* `yarn lint` - lints and fixes, using the "Standard JavaScript" rules.

## Project Status

The project uses a [simple Kanban board](https://github.com/jimCresswell/trees-from-seed/projects/1). I'm currently building the data handling capabilities, UI is next.

## Customising the Build

If you want to change the build configuration see the [Configuration Reference](https://cli.vuejs.org/config/).
