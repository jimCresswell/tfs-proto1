<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <div id="nav">
        |
        <template v-for="route in mainRoutes">
          <router-link :to="route.path" :key="route.path">{{route.name}}</router-link> |
        </template>
      </div>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style lang="scss">
#app {
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import { routes } from './router'

export default {
  name: 'App',

  // Note: this is data local to the App component.
  // The Vuex store has also been injected in `main.js` and is available to all child components.
  data: () => ({
    routes
  }),
  computed: {
    mainRoutes () {
      return this.routes.filter((route) => route.isMainRoute)
    }
  }
}
</script>
