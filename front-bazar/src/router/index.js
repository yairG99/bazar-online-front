import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingBag from '../views/ShoppingBag.vue'
import Dashboard from '../views/Dashboard.vue'
import Checkout from '../views/Checkout.vue'
import Contacto from '../views/Contacto.vue'
import Token from '../views/Token.vue'
import Orden from '../views/Orden.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/bag',
    name: 'Shopping Bag',
    component: ShoppingBag
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path:'/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path:'/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path:'/token',
    name: 'Token',
    component: Token
  },
  {
    path:'/orden',
    name: 'Orden',
    component: Orden
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
