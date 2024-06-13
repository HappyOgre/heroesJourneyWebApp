/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from './plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import router from './router'
import axios from 'axios';


const app = createApp(App)

registerPlugins(app)

app.config.globalProperties$axios = axios;

app.use(router).mount('#app');
