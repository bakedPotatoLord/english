import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";


import Home from "./components/Home.vue"
import MomentInMyLife from "./components/moment-in-my-life.vue"
import MyComputer from "./components/my-computer.vue"
import TheHomeOn from "./components/the-home-on.vue"
import WhenIWasYoung from "./components/when-i-was-young.vue"

const routes = [
  { path: "/english/", name: "Home", component: Home },
  { path: "/english/moment-in-my-life", name: "", component: MomentInMyLife },
  { path: "/english/my-computer", name: "", component: MyComputer },
  { path: "/english/the-home-on", name: "", component: TheHomeOn },
  { path: "/english/when-i-was-young", name: "", component: WhenIWasYoung },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

let app = createApp(App)
app.use(router)
app.mount('#app')
