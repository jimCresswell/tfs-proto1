
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
      justify="center"
    >
      <v-card>
        <v-container>
          <v-list v-for="tree in trees" v-bind:key="tree.species">
            <v-card>
              <v-list-item two-line>
                <v-list-item-content class="text-center">
                  <v-list-item-title>{{tree.species}}</v-list-item-title>
                  <v-list-item-subtitle>{{tree.name}}</v-list-item-subtitle>
                  <tree-summary v-bind:tree="tree"/>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-list>
        </v-container>
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
