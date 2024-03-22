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
      <div class="col">
        <h4 class="display-6">Users</h4>
        <button class="btn btn  text-dark border-black" data-bs-toggle="modal" data-bs-target="#addUserModal">
          Add User
        </button>
        <AddUser addUserModel="addUserModelTarget" />
        <div class="table-responsive">
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
            <th>Username</th>
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
              <button @click="event => deleteUser(user.userID)" class="btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 8H10V16H14M10 12H12.5M17 8V16H21M3 8V16H5C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14V10C7 9.46957 6.78929 8.96086 6.41421 8.58579C6.03914 8.21071 5.53043 8 5 8H3Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            </td>
          </tr>
        </tbody>
        <div class="row d-flex justify-content-center" v-else>
          <SpinnerComp></SpinnerComp>
        </div>
      </table>
        </div>
      </div>


    
        
    </div>

    <div class="row mt-5">
      <div class="col">
        <h4 class="display-6">Products</h4>
         <button class="btn btn  text-dark border-black" data-bs-toggle="modal" data-bs-target="#addItemModal">
        Add Product
      </button>
        <AddItem addItemModel="addItemModelTarget" />
        <div class="table-responsive">
           <table class="table table-bordered">
        <thead class="bg-warning text-white">
          <tr>
            <th style="font-size: 13px;">Product ID</th>
            <th style="font-size: 13px;;">Product Name</th>
            <th style="font-size: 13px;">Product Image</th>
            <th style="font-size: 13px;">Product Description</th>
            <th style="font-size: 13px;">Product Amount</th>
            <th style="font-size: 13px;">Category</th>
            <th style="font-size: 13px;">Quantity</th>
            <th style="font-size: 13px;">Action</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <td style="font-size: small; font-weight: 500;">{{ product.prodID }}</td>
            <td style="font-size: small;">{{ product.prodName }}</td>
            <td>
              <img :src="product.prodUrl" alt="prodPic" loading="lazy">
            </td>
            <td style="font-size: small;  font-style: italic;">{{ product.prodDesc }}</td>
            <td>R{{ product.prodAmount }},00</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
            <td class="d-flex justify-content-between gap-2">
              <EditProducts updateProductModal="updateProductModalTarget" />
              <button class="btn" @click="event =>
          deleteProduct(product.prodID)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 8H10V16H14M10 12H12.5M17 8V16H21M3 8V16H5C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14V10C7 9.46957 6.78929 8.96086 6.41421 8.58579C6.03914 8.21071 5.53043 8 5 8H3Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            </td>
          </tr>
        </tbody>
        <div class="row d-flex justify-content-center" v-else>
          <SpinnerComp></SpinnerComp>
        </div>
      </table>
        </div>
      </div>
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
    addUser(userID) {
      this.$store.dispatch('addUser', { id: userID })
    },
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', { id: userID });
    },
    addProduct(prodID) {
      this.$store.dispatch('addProduct', { id: prodID })
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