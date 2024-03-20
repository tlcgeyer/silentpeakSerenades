<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li class="breadcrumb">
                <router-link to="/" style="text-decoration: none; color: grey; font-size: small;"
                    class="breadcrumb-label"><span>Home</span></router-link>
            </li>
            <li class="breadcrumb product-active">
                <span class="breadcrumb-label" style="color: grey; font-size:small;">Your Cart</span>
            </li>
        </ul>

        
            <div class="Cart">
                <h1>This is the cart page</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Description</th>
                            <th scope="col">Product Price</th>
                        </tr>
                    </thead>
                    <tbody v-if="cart">
                        <tr v-for="product in cart" :key="product.productID">
                            <td>{{ product.prodName}}</td>
                            <td>{{ product.prodUrl }}</td>
                            <td>{{ product.prodDesc }}</td>
                            <td>{{ product.prodAmount }}</td>
                            <button class="delete" @click="deleteFromCart(product.cartID)">Delete</button>
                        </tr>
                    </tbody>
                </table>
                <button @click="clearCart()">clear</button>
            </div>
    </div>
</template>

<script>
import {getRole} from '@/service/AuthenticateUser.js'

export default {
  name: "CartView",
  data() {
    return {
      userID: ""
    }
  },
  methods: {
    deleteFromCart(id) {
      this.$store.dispatch('deleteFromCart', id);
    },
    clearCart() {
      this.$store.dispatch('clearCart')
    }

  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
  },
  mounted() {
    let user = getRole()
    if (user) {
      this.userID = user.userID
    }
    this.$store.dispatch('fetchCart', this.userID)
  }
}
</script>


<style scoped>
.breadcrumb:not(:first-child):before {
    display: inline-block;
    margin: 0.25rem;
    transform: rotate(15deg);
    border-right: 0.1em solid #a3a3a3;
    height: 0.7em;
    content: '';
}
</style>