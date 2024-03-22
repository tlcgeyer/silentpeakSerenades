<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li class="breadcrumb">
        <router-link to="/" style="text-decoration: none; color: grey; font-size: small;" class="breadcrumb-label">
          <span>Home</span>
        </router-link>
      </li>
      <li class="breadcrumb item-active">
        <span class="breadcrumb-label" style="color: grey; font-size:small;">Your Account</span>
      </li>
    </ul>
    <div v-if="userProfile && user.userID">
      <div class="col">
        <h1>Welcome Back To Your Profile {{ userProfile.firstName }} {{ user.lastName }}</h1>
        <div class="info">
          <br>
          <span>First Name:</span> {{ userProfile.currentUser.firstName }}
          <br>
          <br>
          <span>Last Name:</span> {{ userProfile.currentUser.lastName }}
          <br>
          <br>
          <span>Age:</span> {{ userProfile.currentUser.userAge }}
          <br>
          <br>
          <span>Gender:</span> {{userProfile.currentUser.gender }}
          <br>
          <br>
          <span>Role:</span> {{ userProfile.currentUser.userRole }}
          <br>
          <br>
          <span>Email</span> {{ userProfile.currentUser.emailAdd }}
          <br>
          <br>
          <span>Email</span> {{ userProfile.currentUser.userPwd }}
          <br>
          <br>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center" v-else>
      <SpinnerComp></SpinnerComp>
    </div>
    <EditUsers updateUserModal="updateUserModalTarget" />


  </div>
  <button class="btn" @click.prevent="LogOut">Logout</button>
  <button @click="event => deleteUser(user.userID)" class="btn btn-sm btn-danger">Delete</button>
</template>

<script>
import EditUsers from '@/components/EditUsers.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';


export default {
  data() {
    return {
      payload: {
        userID: '',
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        emailAdd: '',
        userPwd: '',
        userRole: 'user',
        userProfile: ''
      }
    }
  },
  components: {
    SpinnerComp,
    EditUsers
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    console.log(this.$cookies.get("LegitUser"));
  },
  computed: {
    userProfile() {
      return this.$store.state.currentUser;
    },
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', { id: userID });
    },
    // decodeTokenAndSetUserInfo() {
    //   let encode = cookies.get('token');
    //   if (encode) {
    //     encode = encode.split('.')[1];
    //     const decodedToken = JSON.parse(window.atob(encode));
    //     console.log(decodedToken);
    //     this.$store.commit('setCurrentUser', decodedToken);
    //     // Set isLoading to false once user profile data is loaded
    //     this.isLoading = false;
    //   }
    // },
  }
}
</script>

<style scoped>
.breadcrumb:not(:first-child):before {
  display: inline-block;
  margin: 0.25rem;
  transform: rotate(15deg);
  border-right: 0.1em solid #a3a3a3;
  height: 0.7em;
  content: '';
}
</style>
