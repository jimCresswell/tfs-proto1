<template>
  <v-simple-table>
  <template v-slot:default>
    <thead>
      <tr>
        <th class="text-left">Property</th>
        <th class="text-left">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, property) in dataObject" :key="property">
        <td>{{ property }}</td>
        <template v-if="typeof value !== 'object'">
          <template v-if="typeof value !== 'string'">
            <td>{{ value }}</td>
          </template>
          <template v-else>
            <!-- <td>{{ value | markdownLink | stringToParagraphs }}</td> -->
            <td><v-container v-html="descriptionToHtml(value)"></v-container></td>
          </template>
        </template>
        <!-- Recursively render objects in the object. -->
        <template v-else>
          <SimpleObjectTable :dataObject="value" />
        </template>
      </tr>
    </tbody>
  </template>
</v-simple-table>
</template>

<script>
import filters from '../filters'

export default {
  name: 'SimpleObjectTable',
  props: ['dataObject'],
  methods: {
    descriptionToHtml (value) {
      return filters.markdownLink(filters.stringToParagraphs(value))
    }
  }
}
</script>
