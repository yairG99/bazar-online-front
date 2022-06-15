import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingBag from '../views/ShoppingBag.vue'
import Dashboard from '../views/Dashboard.vue'
import Checkout from '../views/Checkout.vue'
import Contacto from '../views/Contacto.vue'
import Token from '../views/Token.vue'
import Orden from '../views/Orden.vue'
import store from '../store'

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
    meta: {
      requiresAuth: true
    },
    component: Orden
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(store.state.auth) {
      next();
    } else {
      next({ name: 'Token'})
    }
  } else {
    next();
  }
});


export default router
