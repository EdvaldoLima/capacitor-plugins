import { createApp } from 'vue'
import { usePlugins } from './plugins'
import App from './App.vue'
import '@/assets/sass/main.css'
import '@/environment'

const app = createApp(App)
// Plugins
usePlugins(app)

app.mount('#app')
