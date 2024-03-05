import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/instruments',
    name: 'instruments',
    component: ()=> import('../views/InstrumentsView.vue')
  },
  {
    path:'/singleItem/:id',
    name: 'singleItem',
    component: ()=> import('../views/SingleItemView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: ()=> import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import('../views/ContactView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: ()=> import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/LoginVIew.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: ()=> import('../views/BlogView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: ()=> import('../views/CheckoutView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
