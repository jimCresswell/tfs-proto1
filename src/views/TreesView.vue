
<template>
  <v-container>
    <h1>The Tree Data</h1>
    <v-row class="text-center trees">
      <v-col>
        <ul v-for="tree in trees" v-bind:key="tree.species">
          <li><tree-summary v-bind:tree="tree"/></li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import TreeSummary from '../components/TreeSummary'

export default {
  name: 'TreesView',
  components: {
    TreeSummary
  },
  computed: mapState({
    trees: state => state.trees
  })
}
</script>
