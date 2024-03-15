<template>
  <div class="container mt-5">
    <ul class="breadcrumbs">
      <li class="breadcrumb">
        <router-link to="/" style="text-decoration: none; color: grey; font-size: small;"
          class="breadcrumb-label"><span>Home</span></router-link>
      </li>
      <li class="breadcrumb item-active">
        <span class="breadcrumb-label" style="color: grey; font-size:small;">Admin</span>
      </li>
    </ul>
    <div class="row">
      <h4 class="display-6">Users</h4>
    </div>

    <div class="row">
      <button class="btn btn  text-dark border-black" data-bs-toggle="modal" data-bs-target="#addUserModal">
        Add User
      </button>
      <AddUser addUserModel="addUserModelTarget" />
      <table class="table table-bordered">
        <thead class="bg-warning text-white">
          <tr>
            <th>User ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>User role</th>
            <th>User Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.userProfile }}</td>
            <td class="d-flex justify-content-between">
              <EditUsers updateUserModal="updateUserModalTarget" />
              <button @click="event => deleteUser(user.userID)" class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
        <div class="row d-flex justify-content-center" v-else>
          <SpinnerComp></SpinnerComp>
        </div>
      </table>
    </div>

    <div class="row mt-5">
      <h4 class="display-6">Products</h4>
    </div>

    <div class="row">
      <button class="btn btn  text-dark border-black" data-bs-toggle="modal" data-bs-target="#addItemModal">
        Add Product
      </button>
      <AddItem addItemModel="addItemModelTarget" />
      <table class="table table-bordered">
        <thead class="bg-warning text-white">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Description</th>
            <th>Product Amount</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>
              <img :src="product.prodUrl" alt="prodPic" loading="lazy">
            </td>
            <td>{{ product.prodDesc }}</td>
            <td>R{{ product.prodAmount }},00</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
            <td class="d-flex justify-content-between gap-2">
              <EditProducts updateProductModal="updateProductModalTarget" />
              <button class="btn btn-sm btn-danger deleteButton" @click="event =>
          deleteProduct(product.prodID)">Delete</button>
            </td>
          </tr>
        </tbody>
        <div class="row d-flex justify-content-center" v-else>
          <SpinnerComp></SpinnerComp>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
import EditUsers from '../components/EditUsers.vue'
import SpinnerComp from '../components/SpinnerComp.vue'
import EditProducts from '../components/EditProducts.vue'
import AddUser from '../components/AddUser.vue'
import AddItem from '../components/AddItem.vue'

export default {
  components: {
    EditUsers,
    SpinnerComp,
    EditProducts,
    AddUser,
    AddItem
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    products() {
      return this.$store.state.products
    }
  },

  methods: {
    register(userID) {
      this.$store.dispatch('register', {id: userID})
    },
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', { id: userID });
    },
    addProduct(prodID) {
      this.$store.dispatch('addProduct', {id: prodID})
    },
    deleteProduct(prodID) {
      this.$store.dispatch('deleteProduct', { id: prodID });
    },
    updateUser(user) {
      let updatingUser = {
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        gender: user.gender,
        emailAdd: user.emailAdd,
        userPwd: user.userPwd,
        userRole: user.userRole,
        userProfile: user.userProfile,
      }
      this.$store.dispatch('updateUser', { id: user.userID, data: updatingUser })

    },
    updateProduct(product) {
      let updatingProduct = {
        prodID: product.prodID,
        prodName: product.prodName,
        prodDesc: product.prodDesc,
        prodAmount: product.prodAmount,
        category: product.category,
        prodUrl: product.prodUrl,
        quantity: product.quantity
      }
      this.$store.dispatch('updateProduct', { id: product.prodID, data: updatingProduct })
    },
    
  },
  mounted() {
    this.$store.dispatch("fetchUsers")
    this.$store.dispatch("fetchProducts")
  },
}
</script>

<style scoped>
img[alt="prodPic"] {
  width: 110px;
}

.breadcrumb:not(:first-child):before {
  display: inline-block;
  margin: 0.25rem;
  transform: rotate(15deg);
  border-right: 0.1em solid #a3a3a3;
  height: 0.7em;
  content: '';
}
</style>