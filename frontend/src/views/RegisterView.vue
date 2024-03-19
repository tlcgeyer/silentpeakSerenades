<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li class="breadcrumb">
        <router-link to="/" style="text-decoration: none; color: grey; font-size: small;"
          class="breadcrumb-label"><span>Home</span></router-link>
      </li>
      <li class="breadcrumb item-active">
        <span class="breadcrumb-label" style="color: grey; font-size:small;">Create an account</span>
      </li>
    </ul>
    <div class="main-content">
      <h5 class="display-6">Register</h5> <br><br> <br>
      <div class="justify-content-center" id="registerForm">
         <form @submit.prevent="registerForm">
          <!-- first name -->
          <div class="floating-label">
            <label for="firstName">First Name</label>
          <input type="text" oninvalid="this.setCustomValidity('Please enter your first name')"
            oninput="this.setCustomValidity('')" id="firstName" v-model="payload.firstName"
            required />
          </div><br>
         
          <!-- last name -->
          <div class="d-flex justify-content-start">
            <label for="lastName">Last Name</label>
              <input type="text"
              oninvalid="this.setCustomValidity('Please enter your last name')" oninput="this.setCustomValidity('')"
              id="lastName" v-model="payload.lastName" required />
          </div><br>

          <div class="d-flex justify-content-start">
          <!-- gender -->
          <label for="gender">Gender</label>
            <input type="text" id="gender"
              oninvalid="this.setCustomValidity('Please provide your gender')" oninput="this.setCustomValidity('')"
              v-model="payload.gender" required />
          </div>

          <div class="d-flex justify-content-start">
          <!-- age -->
          <label for="age">Age</label>
            <input type="text" 
              oninvalid="this.setCustomValidity('Please provide your age')" oninput="this.setCustomValidity('')"
              v-model="payload.userAge" required />
          </div>

          <div class="d-flex justify-content-start">
            <label for="email">Email</label>
                <input type="email" 
                  oninvalid="this.setCustomValidity('Please enter your email address')"
                  oninput="this.setCustomValidity('')" v-model="payload.emailAdd" required />
          </div>

          <div class="d-flex justify-content-start">
            <label for="password">Password</label>
                <input type="password"
                  oninvalid="this.setCustomValidity('Please enter a password')" oninput="this.setCustomValidity('')"
                  id="password" v-model="payload.userPwd" required />
          </div> <br>

           <div class="d-flex justify-content-center">
          <button  @click="registerForm" type="submit" class="signupBtn">Create account</button> <br>
        </div> <br><br>
        </form>
      </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return{
      payload:{
        // userID: '',
          firstName: '',
          lastName: '',
          userAge: '',
          gender: '',
          emailAdd: '',
          userPwd: '',
          // userRole: '',
          // userProfile: '',
      }
    }
  },
  methods: {
    registerForm() {
      this.$store.dispatch("addUser", this.payload)
      
    }
    }
  }

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


.signupBtn {
  background-color: #B78E64;
  padding: 5px;
  font-family: 'Karla';
  border-color: #B78E64;
  color: antiquewhite;
  padding: 5px;
}

#registerForm {
  font-family: 'Karla'
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