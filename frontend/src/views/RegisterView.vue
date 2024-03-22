<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li class="breadcrumb">
        <router-link to="/" style="text-decoration: none; color: #8b5b4d; font-size: small;"
          class="breadcrumb-label"><span>Home</span></router-link>
      </li>
      <li class="breadcrumb item-active">
        <span class="breadcrumb-label" style="color: #8b5b4d; font-size: small;">Create an account</span>
      </li>
    </ul>
    <div class="main-content">
      <h5 class="display-6" style="font-family: 'Karla'; font-size: 24px; color: #8b5b4d;">Create Account</h5> <br><br>
      <br>
      <div class="justify-content-center" id="registerForm">
        <form @submit.prevent="registerForm">
          <!-- first name -->
          <div class="form-group">
            <label for="firstName" style="color: #8b5b4d;">First Name</label>
            <input type="text" id="firstName" v-model="payload.firstName" required style="border-color: #8b5b4d;" />
          </div>

          <!-- last name -->
          <div class="form-group">
            <label for="lastName" style="color: #8b5b4d;">Last Name</label>
            <input type="text" id="lastName" v-model="payload.lastName" required style="border-color: #8b5b4d;" />
          </div>

          <div class="form-group">
            <label for="gender" style="color: #8b5b4d;">Gender</label>
            <input type="text" id="gender" v-model="payload.gender" required style="border-color: #8b5b4d;" />
          </div>

          <div class="form-group">
            <label for="age" style="color: #8b5b4d;">Age</label>
            <input type="text" v-model="payload.userAge" required style="border-color: #8b5b4d;" />
          </div>

          <div class="form-group">
            <label for="email" style="color: #8b5b4d;">Email</label>
            <input type="email" v-model="payload.emailAdd" required style="border-color: #8b5b4d;" />
          </div>

          <div class="form-group">
            <label for="password" style="color: #8b5b4d;">Password</label>
            <input type="password" id="password" v-model="payload.userPwd" required style="border-color: #8b5b4d;" />
          </div> <br>

          <div class="form-group">
            <label for="username" style="color: #8b5b4d;">Username</label>
            <input type="text" id="profile" v-model="payload.userProfile" required style="border-color: #8b5b4d;" />
          </div> <br>

          <input type="text" :value="payload.userRole" style="display: none;">
          <div class="form-group">
            <button type="submit" style="background-color: #8b5b4d; color: #fff;">Create account</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()

export default {
  data() {
    return {
      payload: {
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        emailAdd: '',
        userPwd: '',
        userRole: "user",
        userProfile: '',
      }
    }
  },
  methods: {
    registerForm() {
      this.$store.dispatch("addUser", this.payload)
    }
  },
  beforeCreate() {
    this.$store.dispatch('fetchUsers')
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    console.log(cookies.get("LegitUser"));
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');

.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.breadcrumbs {
  list-style-type: none;
  padding: 0;
}

.breadcrumb {
  display: inline-block;
  margin-right: 5px;
}

.breadcrumb:not(:first-child):before {
  display: inline-block;
  margin: 0 5px;
  transform: rotate(15deg);
  border-right: 1px solid #a3a3a3;
  height: 0.7em;
  content: '';
}

.breadcrumb-label {
  color: grey;
  font-size: small;
}

.main-content {
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px
}

.display-6 {
  font-family: 'Karla', sans-serif;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  font-size: 16px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid #8b5b4d;
  /* Brownish color */
}

button {
  background-color: #B78E64;
  padding: 10px 20px;
  border-radius: 5px;
  color: antiquewhite;
  border: none;
  cursor: pointer;
  font-family: 'Karla', sans-serif;
  font-size: 16px;
}

button:hover {
  background-color: #A5794E;
}
</style>
