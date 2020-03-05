
<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="start"
      justify="center"
    >
      <h1>The Tree Data</h1>
    </v-row>
    <v-row
      align="start"
      justify="center"
    >
      <v-card>
        <tree-summary v-for="(tree, treeId) in trees" v-bind:key="treeId" v-bind:tree="tree" class="text-center" />
      </v-card>
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
