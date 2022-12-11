import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './interceptors/axios'
import store from './store'
import 'vue3-easy-data-table/dist/style.css';
import Notifications from 'notiwind'

createApp(App).use(router).use(store).use(Notifications).mount('#app')
