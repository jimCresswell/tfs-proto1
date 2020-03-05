
<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="start"
      justify="center"
    >
      <h1>404</h1>
    </v-row>
    <v-row
      justify="center"
    >
      <v-card class="text-center">
        <v-card-text>
          We're sorry, we couldn't find the page<br />
          <code class="info--text">{{attemptedRoute}}</code><br />
          Please navigate back or...
        </v-card-text>
        <v-card-actions class="justify-center"><v-btn link to="/">return to the main page</v-btn></v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FourOhFourView',
  computed: {
    attemptedRoute () {
      return this.$route.params.pathMatch
    }
  }
}
</script>
