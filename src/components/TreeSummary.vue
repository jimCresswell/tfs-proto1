<template>
<v-container>
  <v-card>
    <v-card-title class="justify-center">{{tree.species}}</v-card-title>
    <v-card-subtitle>{{tree.name}}</v-card-subtitle>
    <v-card-actions class="justify-center" >
      <v-btn
        link
        :href="tree.species | speciesToLink"
        color="primary"
        dark
      >Details</v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-actions class="justify-center">
      <v-btn
        link
        :href="tree.wikipedia.link"
      >More on Wikipedia</v-btn>
    </v-card-actions>
  </v-card>
</v-container>
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
