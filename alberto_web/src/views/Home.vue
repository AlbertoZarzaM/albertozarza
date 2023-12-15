
<script setup lang="ts">
import Barnav from '../components/Barnav.vue';
import Footer from '../components/Footer.vue'
</script>

<script  lang="ts">
  export default {
    data: () => ({
      snackbar: false,
    }),

    methods: {
      onClick() {
        this.snackbar = false
      },
    },
  }
</script>

<template>

<v-app>
  <Barnav></Barnav>
  <v-main>
    <v-container style="padding: 5em;">
      <v-card color="indigo-darken-1"  title="Hola!" >
        <v-card-text>
          Bienvenido a mi pagina web!
       </v-card-text>
        <v-card-actions>
          <v-btn @click="snackbar = !snackbar" >Click me</v-btn>
        </v-card-actions>
      </v-card>

      <v-snackbar
      color="indigo-darken-2"
      v-model="snackbar"
      location="center"
    >
      Si! Genial, ya funciona el botoncito. Besitossss 
      <template v-slot:actions>
        <v-btn @click="onClick">Close</v-btn>
      </template>
    </v-snackbar>
    </v-container>
  </v-main>
  


  <Footer></Footer>
  
</v-app>

</template>


  
