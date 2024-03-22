import { createRouter, createWebHistory } from 'vue-router'
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
     beforeEnter(){
      if(!cookies.get('LegitUser')){
        router.push({name:"login"})
      }
    }
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
    component: ()=> import('../views/AdminView.vue'),
    beforeEnter() {
      if(!cookies.get('LegitUser')) {
        router.push({name: 'login'})
      }else if(cookies.get('deRole') !== 'admin'){
        alert('You have not been given the privileges to view this page.')
        router.push({name: 'home'})
      }
    }
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
    path: '/checkout',
    name: 'checkout',
    component: ()=> import('../views/CheckoutView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: ()=> import('../views/AccountView.vue'),
    beforeEnter(){
      if(!cookies.get('LegitUser')){
        router.push({name: 'login'})
      }
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: ()=> import('../views/HomeView.vue'),
    beforeEnter(){
      cookies.remove('LegitUser')
      router.push({name: 'home'})
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
