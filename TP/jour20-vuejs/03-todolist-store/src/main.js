import './assets/main.css'

import { createApp } from 'vue'
// ici on importe pinia pour gérer les stores
import { createPinia } from 'pinia'

import App from './App.vue'
// ici on importe le fichier qui gère les routes de notre application avec vue-router
import router from './router'

const app = createApp(App)

// ici on ajoute pinia à notre application vue
app.use(createPinia())
// ici on ajoute le router à notre application vue
app.use(router)

app.mount('#app')
