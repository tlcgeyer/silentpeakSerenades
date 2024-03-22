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
      <h4 class="display-6">Checkout</h4>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead class="table-light">
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product Price</th>
              <th scope="col"></th> <!-- Empty column for delete button -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cart" :key="product.prodID">
              <td>{{ product.prodName }}</td>
              <td>
                <img :src="product.prodUrl" alt="Product Image" style="max-width: 100px;">
              </td>
              <td>{{ product.prodDesc }}</td>
              <td>{{ product.prodAmount }}</td>
              <td>
                <button class="btn btn-danger btn-sm" @click="deleteFromCart(product.cartID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="btn btn-secondary" @click="clearCart()">Clear Cart</button>
    </div>
  </div>
</template>

<script>
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
    },
    
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
  },
  mounted() {
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

/* Additional styles for table */
.table thead th {
  border-top: none;
}
</style>
