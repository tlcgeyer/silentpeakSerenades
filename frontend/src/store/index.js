import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert';

import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import { applyToken } from '../service/AuthenticateUser.js'
import AuthenticateUser from '../service/AuthenticateUser.js'
const peakURL = "https://silentpeakserenades.onrender.com"


export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    token: null,
    msg: null,
    cart: [],
    currentUser:null
  },
  getters: {
  },
  mutations: {
    setUser(state,value) {
      state.user = value
    },
    setUsers(state,value) {
      state.users = value
    },
    setProduct(state, value) {
      state.product = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setToken(state, token) {
      state.token = token;
      cookies.set("userToken", token, {
        expires: 1,
        path: "/",
        secure: true,
        sameSite: "None",
      });
    }
  },
  actions: {
     //registering a user
   async addUser(context, payload) {
    try {
      let {msg, token} = (await axios.post(`${peakURL}/users/addUser`, payload)).data
        if(token) {
          context.dispatch('fetchUsers');
          context.commit("setToken", token);
      sweet({
        title: 'Registration',
        text: msg,
        icon: "success",
        timer: 2000
      })
      router.push({ name:'login'})
    }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'Please try again later',
        icon: "error",
        timer: 2000
      })
      router.push({name: 'register'})
    }
  },
  async login(context, payload) {
    try{
     const {msg, token, result} = (await axios.post(`${peakURL}/users/login`, payload)).data 
     if(result){
      context.commit('setUser', {msg, result})
      cookies.set('deRole', result.userRole)
      cookies.set('LegitUser', {
        msg, token, result
      })
      AuthenticateUser.applyToken(token)
      sweet({
        title: msg,
        text: `👋🏼 Welcome back, 
        ${result?.firstName} ${result?.lastName}!`,
        icon: "success",
        timer: 2000
      })
        router.push({name: 'home'})
      }else {
        sweet({
          title: 'info',
          text: msg,
          icon: "info",
          timer: 2000
        })
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'Failed to login.',
        icon: "error",
        timer: 2000
      })
    }
  },

  //fetching a user
  async fetchUser(context, payload) {
    try{
      let{result} = (await axios.get(`${peakURL}/users${payload.id}`)).data
      if(result) {
        context.commit('setUser', result)
      }else {
        sweet({
          title: 'Retrieving a single user',
          text: 'User not found',
          icon: "info",
          timer: 2000
        })
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'User not found',
        icon: "error",
        timer: 2000
      })
    }
  },
  //fetching all the users
  async fetchUsers(context) {
    try{
      let {results} = (await axios.get(`${peakURL}/users`)).data
      if(results) {
        context.commit('setUsers', results)
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'An error occurred when retrieving users',
        icon: "error",
        timer: 2000
      })
    }
  },
   // updating/editing the user
   async updateUser(context, payload) {
    try{
      let{msg} = (await axios.patch(`${peakURL}/users/updateUser/${payload.userID}`, payload)).data
        context.dispatch('fetchUsers')
        sweet({
          title: 'Update user',
          text: msg,
          icon: "success",
          timer: 2000
        })
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'Error in updating a user',
        icon: "error",
        timer: 2000
      })
    }
  },
  // deleting a user
  async deleteUser(context, payload) {
    try{
      let{msg} = (await axios.delete(`${peakURL}/users/deleteUser/${payload.id}`))
        context.dispatch('fetchUsers')
        sweet({
          title: 'User successfully deleted! ',
          text: msg,
          icon: "success",
          timer: 2000
        })
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'Error occurred when deleting a user',
        icon: "error",
        timer: 2000
      })
    }
  },
  


    
    
  // fetching a product
  async fetchProduct(context, payload) {
    try{
      let {result} = (await axios.get(`${peakURL}/products/${payload.id}`)).data
      if (result) {
        context.commit('setProduct', result[0]) 
      } else {
        sweet({
          title: 'Retrieving a single product',
          text: 'Product not found',
          icon: "info",
          timer: 2000
        })
      }
    }catch(e) {
        sweet({
          title: 'Error',
          text: 'The product not found',
          icon: "error",
          timer: 2000
        })
      }
  },
  //fetching all products
  async fetchProducts(context) {
    try{ 
      let{results} = (await axios.get(`${peakURL}/products`)).data
      if(results) {
        context.commit('setProducts', results)
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'Error occurred retrieving the products',
        icon: "error",
        timer: 2000
      })
    }
    },
  // adding a new product
  async addProduct(context, payload){
    try{
      let {msg} = (await axios.post(`${peakURL}/products/addProduct`, payload)).data
        context.dispatch('fetchProducts')
        sweet({
          title: 'Add Product',
          text: msg,
          icon: "success",
          timer: 2000
        })
    }catch(e){
      sweet({
        title: 'Error',
        text: 'Unable to add product',
        icon: 'Error',
        timer: 2000
      })
    }
  },
  // updating/editing a product
  async updateProduct(context, payload) {
    try{
      let{msg} = (await axios.patch(`${peakURL}/products/updateProduct/${payload.prodID}`, payload)).data
        context.dispatch('fetchProducts')
        sweet({
          title: 'Update product',
          text: msg,
          icon: "success",
          timer: 2000
        })
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'Error in updating the product',
        icon: "success",
        timer: 2000
      })
    }
  },
  // deleting a product
  async deleteProduct(context, payload) {
    try{
      console.log(payload);
      let{msg} = await axios.delete(`${peakURL}/products/deleteProduct/${payload.id}`)
      // if(msg) {
        context.dispatch('fetchProduct')
        sweet({
          title: 'Delete product',
          text: msg,
          icon: "success",
          timer: 2000
        })
      // }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'Error occurred when deleting a product',
        icon: "error",
        timer: 2000
      })
    }
    },
  //  adding products to the cart
  async addToCart(context,cart) {
      try {
      localStorage.setItem('checkout', JSON.stringify(cart));
    } catch (error) { 
      alert(error);
    }
    },
  //removing thing from cart
    async deleteCart(context, payload) {
      try {
        applyToken()
        let { data } = await axios.delete(`${peakURL}/cart/delete/${payload}`);
        if (data) {
          context.dispatch("fetchCart");
          sweet ({
            title: "Removed from cart",
            text: data.msg,
            icon: "success",
            timer: 2000,
          });
          setTimeout(() => {
            location.reload()
          }, 2000);
        }
      } catch (e) {
        sweet ({
          title: "ERROR",
          text: "Cannot remove item from cart",
          icon: "error",
          timer: 4000,
        });
      }
    },
  
  },
  modules: {
  }
})
