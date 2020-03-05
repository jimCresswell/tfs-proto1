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
          <td>{{ value }}</td>
        </template>
        <template v-else>
          <SimpleObjectTable :dataObject="value" />
        </template>
      </tr>
    </tbody>
  </template>
</v-simple-table>
</template>

<script>
export default {
  name: 'SimpleObjectTable',
  props: ['dataObject']
}
</script>
