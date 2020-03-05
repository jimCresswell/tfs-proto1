import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.filter('speciesToLink', function (speciesName) {
  if (!speciesName) return '/something_went_wrong'
  speciesName = speciesName.toString()
  const speciesPath = speciesName.trim().toLowerCase().replace(/\s+/g, '_')
  return `/trees/${speciesPath}`
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
