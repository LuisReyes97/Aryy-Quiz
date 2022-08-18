import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')



/*
import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import router from './router'


//DECLARAMOS LAS CONSTANTES

const Home = { template: '<h1>Home</h1>' }
const About = { template: '<h1>About</h1>' }

//CONFIGURACIÓN -> DEFINIMOS OBJETOS RUTAS

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },

]
// CREAMOS OBJETOS RUTAS DE vue Router -> OBJETO DE vue Router
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

//INSTANCIA DE vue
const app = Vue.createApp({}).use(router)
app.use(router)
app.mount('#app')

*/

