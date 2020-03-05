import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import filters from './filters'

Vue.config.productionTip = false

for (const filterName in filters) {
  Vue.filter(filterName, filters[filterName])
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
