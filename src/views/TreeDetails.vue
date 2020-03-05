<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="start"
      justify="center"
    >
      <h1>Details for {{tree.species}}</h1>
    </v-row>
    <v-row>
      <SimpleObjectTable :dataObject="tree" />
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import SimpleObjectTable from '../components/SimpleObjectTable'

export default {
  name: 'TreeDetailsView',
  components: {
    SimpleObjectTable
  },
  computed: {
    ...mapState({
      trees: state => state.trees
    }),
    speciesKey () {
      const speciesPath = this.$route.params.species
      // Replace underscores and the following character with the uppercase version of the character.
      return speciesPath
        .replace(/_(\w{1})/, (match, p1) => p1.toUpperCase())
    },
    tree () {
      const tree = this.trees[this.speciesKey]
      if (tree === undefined) {
        throw new TypeError(`Could not find tree with species key: ${this.speciesKey}`)
      }
      return tree
    }
  }
}
</script>
