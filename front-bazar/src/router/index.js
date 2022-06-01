import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingBag from '../views/ShoppingBag.vue'
import Dashboard from '../views/Dashboard.vue'

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

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
