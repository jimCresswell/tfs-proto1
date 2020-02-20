import Vue from 'vue'
import VueRouter from 'vue-router'

import _cloneDeep from 'lodash.clonedeep'

import OldHome from '../views/OldHome.vue'
import TreesView from '../views/TreesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Trees',
    component: TreesView,
    icon: {
      name: 'tree-outline',
      colour: 'green'
    },
    isMainRoute: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    icon: {
      name: 'information-outline',
      colour: 'orange'
    },
    isMainRoute: true
  },
  {
    path: '/oldhome',
    name: 'OldHome',
    component: OldHome,
    icon: {
      name: 'home'
    },
    isMainRoute: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// Export *a copy* of the `routes` object so it can be used to dynamically construct navigation UI.
const routesCopy = _cloneDeep(routes)
export { routesCopy as routes }
