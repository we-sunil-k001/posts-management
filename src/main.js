import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head';  // Import createHead from @vueuse/head


import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead(); // Create a head instance

app.use(createPinia())
app.use(router)
app.use(head);  // Register the head instance globally


app.mount('#app')
