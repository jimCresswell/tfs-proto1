<template>
  <span>Species: {{ tree.species }}. Name: {{ tree.name }}</span>
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
