<template>
    <div class="container mt-5">
      <div class="row">
        <h2 class="display-4">User CRUD</h2>
      </div>
    <AddUser/>
      <div class="row mb-3">
        <div class="col">
        </div>
      </div>
      <div class="row">
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
                <EditUsers updateUserModal="updateUserModalTarget"/>
                <button @click="event=> deleteUser(user.userID)" class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
          </tbody>
          <div class="row d-flex justify-content-center" v-else>
          <SpinnerComp></SpinnerComp>
        </div>
        </table>
      </div>

      <div class="row mt-5">
        <h2 class="display-4">Product CRUD</h2>
      </div>
      <div class="row mb-3">
        <div class="col">
        <AddProduct/>
          <!-- <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#addProductModalTarget">Add</button> -->
        </div>
      </div>
      <div class="row">
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
              <img :src="product.prodUrl" alt="prodPic" loading="lazy" >
              </td>
              <td>{{ product.prodDesc }}</td>
              <td>R{{ product.prodAmount }},00</td>
              <td>{{ product.category }}</td>
              <td>{{ product.quantity }}</td>
              <td class="d-flex justify-content-between gap-2">
                <EditProducts updateProductModal="updateProductModalTarget"/>
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


    export default {
      components: {
        EditUsers,
        SpinnerComp,
        EditProducts
      },
      computed: {
            users(){
                return this.$store.state.users
            },
            products() {
                return this.$store.state.products
            }
        },
       
        methods: {
            deleteUser(userID) {
                this.$store.dispatch('deleteUser', {id: userID});
            },
            deleteProduct(prodID) {
                this.$store.dispatch('deleteProduct', {id: prodID});
            },
            updateUser(user) {
              let updatingUser ={
                userID: user.userID,  
                firstName: user.firstName,
                lastName: user.lastName,
                userAge:user.userAge, 
                gender:user.gender,
                emailAdd:user.emailAdd,
                userPwd: user.userPwd,
                userRole:user.userRole,
                userProfile:user.userProfile,
              }
              this.$store.dispatch('updateUser',{id: user.userID, data: updatingUser} )
              
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
              this.$store.dispatch('updateProduct',{id: product.prodID, data: updatingProduct} )
            }
    }, 
    mounted(){
            this.$store.dispatch("fetchUsers")
            this.$store.dispatch("fetchProducts")
        },
  }
</script>

<style scoped>
img[alt="prodPic"] {
    width: 110px;
}
</style>