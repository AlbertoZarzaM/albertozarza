
<script setup lang="ts">
import Barnav from '../components/Barnav.vue';
import Footer from '../components/Footer.vue'
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
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
  


  <Footer></Footer>
  
</v-app>

</template>


  
