<template>
    <div class="container">
      <ul class="breadcrumbs">
            <li class="breadcrumb">
                <router-link to="/" style="text-decoration: none; color: grey; font-size: small;" class="breadcrumb-label"><span>Home</span></router-link>
            </li>
            <li class="breadcrumb item-active">
                <span class="breadcrumb-label" style="color: grey; font-size:small;">Register</span>
            </li>
        </ul>
      <div class="main-content">

        <h5 class="display-6">Register</h5>
      <form @submit.prevent="registerForm">
        <div class="justify-content-center" id="registerForm">
          <label>Email Address <br><input type="email" class="form-input" v-model="emailAdd" required/></label> <br>
          <label>Password <br><input type="password" class="form-input" v-model="userPwd"  required/></label> <br><br>
        </div>

        <div class="d-flex justify-content-center">
          <button type="submit" class="signupBtn">sign up</button> <br>
        </div>
      </form>
      <br>
      </div>
      
    </div>
  </template>
  
  <script>

  export default {
   
  };
  </script>
  

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


.signupBtn{
  background-color: #B78E64;
  padding:5px;
  font-family: 'Karla';
  border-color: #B78E64;
  color: antiquewhite;
  padding: 5px;  
}

#registerForm{
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