import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router';


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'




// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    //
  },
})

createApp(App).use(vuetify).use(router).use(pinia).mount('#app')

