<template>
    <button type="button" class="btn modalButton btn " data-bs-toggle="modal" data-bs-target="#updateProductModal" >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.243 17.997H3V13.754L14.435 2.319C14.6225 2.13153 14.8768 2.02621 15.142 2.02621C15.4072 2.02621 15.6615 2.13153 15.849 2.319L18.678 5.147C18.771 5.23987 18.8447 5.35016 18.8951 5.47156C18.9454 5.59296 18.9713 5.72309 18.9713 5.8545C18.9713 5.98592 18.9454 6.11604 18.8951 6.23744C18.8447 6.35884 18.771 6.46913 18.678 6.562L7.243 17.997ZM3 19.997H21V21.997H3V19.997Z" fill="black"/>
</svg>
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