
<template>
  <v-container>
    <h1>The Tree Data</h1>
    <v-row class="text-center trees">
      <v-col>
        <ul v-for="tree in trees" :key="tree.species">
          <li>{{ tree.species }}: {{ tree.name }}</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Trees',
  computed: mapState({
    trees: state => state.trees
  })
}
</script>
