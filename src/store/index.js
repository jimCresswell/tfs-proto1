import Vue from 'vue'
import Vuex from 'vuex'

import trees from '../data/trees'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    trees
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
