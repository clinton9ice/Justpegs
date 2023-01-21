<template>
  <v-app>
    <v-container fluid>
      <slot/>
    </v-container>
  </v-app>
</template>

<script lang="ts">
export default defineComponent({
  name: "Base",
})
</script>

<style scoped>

</style>