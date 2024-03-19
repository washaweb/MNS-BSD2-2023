import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
