<template>
    <form @submit.prevent="registerUser">
      <label>Email <input v-model="email" type="text" required /></label> <br> <br>
      <label>Password <input v-model="password" type="password" required /></label><br> <br>
      <label>Confirm Password <input v-model="password" type="password" required /></label><br> <br>
      <label>First Name <input v-model="firstName" type="text" required /></label><br> <br>
      <label>Last Name<input v-model="lastName" type="text" required /></label><br> <br>
      <label>Phone Number<input v-model="number" type="number" required /></label><br> <br>
      <label>Address Line 1 <input v-model="address" type="text" required /></label><br> <br>
      <label>Address Line 2 <input v-model="address2" type="text" required /></label><br> <br>
      <label>Suburb/City<input v-model="city" type="text" required /></label><br> <br>
      <label>Country<input v-model="country" type="text" required /></label><br> <br>

      <button type="submit">Register</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userEmail: '',
        userPwd: '',
      };
    },
    methods: {
      registerUser() {
        this.$store.dispatch('register', {
          email: this.email,
          pwd: this.pwd,
        });
  
        this.email = '';
        this.password = '';
      },
    },
  };
  </script>