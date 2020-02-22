<template>
  <v-app id="trees-from-seed">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list v-for="(route, i) in mainRoutes" :key=i nav>
        <v-list-item :to="route.path" link>
          <v-list-item-action>
            <v-icon :color="route.icon.colour">mdi-{{route.icon.name}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{route.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Trees from Seed</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer
      app
      inset
      color="primary"
      dark
    >
      <v-btn
        link
        large
        outlined
        href="https://github.com/jimCresswell/trees-from-seed"
        target="_blank"
      >
        <v-icon>mdi-github-circle</v-icon>
        <span class="ml-2">Source code on GitHub</span>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import { routes } from './router'

export default {
  props: {
  },

  // Note: this is data local to the App component.
  // The Vuex store has also been injected in `main.js` and is available to all child components.
  data: () => ({
    routes,
    drawer: null
  }),
  computed: {
    mainRoutes () {
      return this.routes.filter((route) => route.isMainRoute)
    }
  }
}
</script>
