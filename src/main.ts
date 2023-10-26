import Vue from "vue";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/main.scss'

import 'bootstrap/dist/css/bootstrap.min.css'

import primaryNavItems from "@/utils/primaryNavItems";

const app = createApp({})

app.component(
  'primaryNavItems',
  primaryNavItems
)

createApp(App).use(store).use(router).mount('#app')

