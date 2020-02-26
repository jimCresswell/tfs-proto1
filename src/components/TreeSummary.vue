<template>
  <v-btn
    link
    :href="tree.wikipedia.link"
  >More on Wikipedia</v-btn>
</template>

<script>
import Tree from '../data/trees/tree'

export default {
  name: 'TreeSummary',
  props: {
    tree: {
      type: Tree,
      required: true
    }
  }
}
</script>
