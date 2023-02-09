import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";


import Home from "./components/Home.vue"
import M from "./components/moment-in-my-life.vue"

const routes = [
  { path: "/english/", name: "Home", component: Home },
  { path: "/english/moment-in-my-life", name: "Other", component: M },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

let app = createApp(App)
app.use(router)
app.mount('#app')
