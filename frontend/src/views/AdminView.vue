<template>
    <div class="admin">
        <h1>This is the admin page</h1>
    </div>
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
              <td class="d-flex justify-content-between">
                <updateUser/>
                <button @click="event=> deleteUser(user.userID)" class="btn btn-sm btn-danger">Delete</button>
                <!-- <button @click="editUser(user.userID)" id="edit" class="btn btn-sm btn-primary">Edit</button> -->
                </td>
                
                
            </tr>
          </tbody>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="products">
            <tr v-for="product in products" :key="product.prodID">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>
                <img :src="product.prodUrl" alt="prodPic">
              </td>
              <td>{{ product.prodDesc }}</td>
              <td>R{{ product.amount }},00</td>
              <td class="d-flex justify-content-between gap-2">
                <!-- <updateProduct :product="product" /> -->
               <button class="btn btn-sm btn-primary" @click="addingProduct"
               data-bs-target="#updateProductModal" data-bs-toggle="modal"><updateProduct/></button>
               
                <!-- <button class="btn btn-sm btn-danger">Delete</button> -->
                <button class="btn btn-sm btn-danger deleteButton" @click="event => 
                deleteProduct(product.prodID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>