import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/ProductsView.vue'
import PastOrders from '../views/PastOrderView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    // component: Products
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
    component: Products
  },
  {
    path: '/past-orders',
    name: 'pastorders',
    // component: () => import(/* webpackChunkName: "pastorder" */ '../views/PastOrderView.vue')
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
