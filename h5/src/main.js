import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { downloadUrlDirective } from './utils/appRedirect'

const app = createApp(App)

app.use(router)

// Register global directive for app download redirection
app.directive('app-download', downloadUrlDirective)

app.mount('#app')
