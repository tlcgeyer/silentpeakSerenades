<template>
    <button type="button" class="btn modalButton btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateProductModal" >
    Edit
    </button>

 <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="updateProductModal" aria-hidden="true">
<div class="modal-dialog" >
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title fs-5">Edit Product</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form @submit.prevent="editProduct">
        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="product ID" v-model="payload.prodID">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="name" v-model="payload.prodName">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="description" v-model="payload.prodDesc">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="amount" v-model="payload.prodAmount">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="category" v-model="payload.category">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="prodUrl" v-model="payload.prodUrl">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="quantity" v-model="payload.quantity">
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" @click.prevent="updatingProducts(payload)"  class="btn btn-success" data-bs-dismiss="modal">Save changes</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</template>

<script>
  export default {
    props: ["updateProductModal"],
    data() {
      return {
        payload:{
          prodID: null,
          prodName: '',
          prodDesc: '',
          prodAmount: '',
          category: '',
          prodUrl: '',
          quantity: ''
        }
      }
    },
    methods: {
      updatingProducts() {
        this.$store.dispatch("updateProduct", this.payload);
      }
    }
  }
</script>

<style scoped>

</style>