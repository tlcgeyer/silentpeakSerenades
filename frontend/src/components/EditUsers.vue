<template>
      <button type="button" class="btn modalButton btn " data-bs-toggle="modal" data-bs-target="#updateUserModal" >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.243 17.997H3V13.754L14.435 2.319C14.6225 2.13153 14.8768 2.02621 15.142 2.02621C15.4072 2.02621 15.6615 2.13153 15.849 2.319L18.678 5.147C18.771 5.23987 18.8447 5.35016 18.8951 5.47156C18.9454 5.59296 18.9713 5.72309 18.9713 5.8545C18.9713 5.98592 18.9454 6.11604 18.8951 6.23744C18.8447 6.35884 18.771 6.46913 18.678 6.562L7.243 17.997ZM3 19.997H21V21.997H3V19.997Z" fill="black"/>
</svg>

      </button>

   <div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="updateUserModal" aria-hidden="true">
  <div class="modal-dialog" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fs-5">Edit User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="editUser">
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
            <input type="text" class="form-control w-50 mx-auto" placeholder="username" v-model="payload.userProfile">
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" @click.prevent="updatingUsers(payload)"  class="btn btn-success" data-bs-dismiss="modal">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      props: ["updateUserModal"],
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
        updatingUsers() {
          this.$store.dispatch("updateUser", this.payload);
        }
       
      }
    }
</script>

<style scoped>

</style>