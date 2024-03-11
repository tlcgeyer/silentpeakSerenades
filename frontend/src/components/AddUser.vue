<template>
 <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUser" aria-hidden="true"  data-bs-target="#addUserModelTarget" >
<div class="modal-dialog" >
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title fs-5" id="addUser">Adding a new user</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="user ID" v-model="payload.userID">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="first name" v-model="payload.firstName">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="last name" v-model="payload.lastName">
        </div>

        <div class="mb-3">
          <input type="number" class="form-control w-50 mx-auto" placeholder="user age" v-model="payload.userAge">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="gender" v-model="payload.gender">
        </div>

        <div class="mb-3">
          <input type="email" class="form-control w-50 mx-auto" placeholder="email address" v-model="payload.emailAdd">
        </div>

        <div class="mb-3">
          <input type="password" class="form-control w-50 mx-auto" placeholder="password" v-model="payload.userPwd">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="user role" v-model="payload.userRole">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="user profile" v-model="payload.userProfile">
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" @click.prevent="register"  class="btn btn-success" data-bs-dismiss="modal">Save changes</button>
        </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
  export default {
    props: ["addUserModal"],
    data() {
      return {
        payload:{
          userID: null,
          firstName: '',
          lastName: '',
          userAge: '',
          gender: '',
          emailAdd: '',
          userPwd: '',
          userRole: '',
          userProfile: ''
        }
      }
    },
    methods: {
      register() {
        this.$store.dispatch('register', this.payload)
      }
    }
  }
</script>

<style scoped>

</style>