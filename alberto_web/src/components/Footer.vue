<template>
  <v-footer color="indigo-lighten-1">
    <v-row justify="center" >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-5"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Hasta la proxima!</strong>
        <p>Desarollado por:  Alberto Zarza </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
  export default {
    data: () => ({
      links: [],
    }),
  }
</script>