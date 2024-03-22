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
    <!-- the account of a user -->
    <div class="row">
      <div class="col" v-if="user">
        <h4 class="display-6">Welcome Back To Your Profile {{ user.firstName }} {{ user.lastName }}</h4>
        <div class="info">
          <br>
          <span>First Name:</span> {{ user.firstName }}
          <br>
          <br>
          <span>Last Name:</span> {{ user.lastName }}
          <br>
          <br>
          <span>Age:</span> {{ user.userAge }}
          <br>
          <br>
          <span>Gender:</span> {{user.gender }}
          <br>
          <br>
          <span>Email</span> {{ user.emailAdd }}
          <br>
          <br>
        </div>
      </div>
      <div v-if="editing" class="container border border-3 rounded-5 py-3 px-3"> 
        <form @submit.prevent="updateUser" class="d-flex flex-column" >
              <label>First Name:</label>
              <input type="text" v-model="payload.firstName" />
              <label>Last Name:</label>
              <input type="text" v-model="editedUser.lastName" />
              <label>Email:</label>
              <input type="email" v-model="editedUser.email" />
              <label>Gender:</label>
              <input type="text" v-model="editedUser.gender" />
              <label>Age:</label>
              <input type="number" v-model="editedUser.userAge" />
              <div class="d-flex justify-content-center justify-content-evenly">
                <button type="submit" class="save">Save</button>
                <button @click="cancelEdit" class="cancel">Cancel</button>
              </div>
              <div class="mt-4">
                <p>*Update to Profile will apply when you log in again*</p>
              </div>
            </form>
          </div>
          <div class="mt-3 mb-3">
            <button @click="editProfile" class="editButton">Edit</button>
          </div>
          <div class="d-flex justify-content-evenly p-3">
            <button @click="(event) => deleteUser(user.userID)" class="btn btn-sm btn-danger">Delete Account</button>
            <button @click="logoutUser" class="logOutButton">Logout</button>
          </div>
      </div>
      <!-- <div class="row d-flex justify-content-center" v-else>
      <SpinnerComp></SpinnerComp>
    </div> -->
    </div>
</template>

<script>
// import EditUsers from '@/components/EditUsers.vue';
// import SpinnerComp from '@/components/SpinnerComp.vue';


export default {
  data() {
    return {
      user: null,
      editing: false,
      editedUser: {},
    }
  },
  components: {
    // SpinnerComp,
    // EditUsers
  },
  mounted() {
    this.$store.dispatch("fetchUser");
    console.log(this.$cookies.get("LegitUser"));
  },
  computed: {
    
  },
  methods: {
    editProfile() {
      // Copy user data to editedUser for editing
      this.editedUser = { ...this.user };
      this.editing = true;
    },
    cancelEdit() {
      // Cancel editing, revert changes
      this.editing = false;
      this.editedUser = {};
    },
    async updateUser() {
      try {
        await this.$store.dispatch("updateUser", {
          id: this.user.userID,
          data: this.editedUser,
        });
        await this.fetchUserData();
        this.editing = false;
        this.editedUser = {};
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
    fetchUserData() {
      const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
      const userCookie = cookies.find((cookie) =>
        cookie.startsWith("LegitUser")
      );
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie.split("=")[1]);
          if (userData && userData.result) {
            this.user = userData.result;
          } else {
            console.error("Invalid user data format:", userData);
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      } else {
        console.log("No user data available in cookies");
      }
    },
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
      this.$router.push("/login");
    },
    logoutUser() {
      this.$store.dispatch("logout");
    },
  },
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
