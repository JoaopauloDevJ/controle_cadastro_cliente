import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import 'Bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).mount('#app')
