import './assets/main.css'
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
