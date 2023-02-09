import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";


import Home from "./components/Home.vue"
import Other from "./components/Other.vue"

const routes = [
  { path: "/english/", name: "Home", component: Home },
  { path: "/english/other", name: "Other", component: Other },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

let app = createApp(App)
app.use(router)
app.mount('#app')
