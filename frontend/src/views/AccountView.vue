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
        <h4 style="font-family: 'Barlow';">Welcome Back,  {{ user.firstName }} {{ user.lastName }}</h4><br><br>

        <span style="font-style: italic;">Want to make some changes?</span><EditAccount updateAccountModal="updateAccountModalTarget" />
        <div class="info">
          <br>
          <div style="font-family: 'Barlow'; font-size: large; color: #9A6354;">
            First Name:
          </div> <span style="font-family: 'Barlow'; font-style: italic; font-size: medium;">{{ user.firstName }}</span>
          <hr>
          <br>
          <div style="font-family: 'Barlow'; font-size: large; color: #9A6354;">
            Last Name:
          </div> <span style="font-family: 'Barlow'; font-style: italic; font-size: medium;">{{ user.lastName }}</span>
          <hr>
          <br>
          <div style="font-family: 'Barlow'; font-size: large; color: #9A6354;">
            Age:
          </div> <span style="font-family: 'Barlow'; font-style: italic; font-size: medium;">{{ user.userAge }}</span>
          <hr>
          <br>
          <div style="font-family: 'Barlow'; font-size: large; color: #9A6354;">
            Gender:
          </div> <span style="font-family: 'Barlow'; font-style: italic; font-size: medium;">{{user.gender }}</span>
          <hr>
          <br>
          <div style="font-family: 'Barlow'; font-size: large; color: #9A6354;">
            Email:
          </div> <span style="font-family: 'Barlow'; font-style: italic; font-size: medium;">{{ user.emailAdd }}</span>
          <br>
          <br>
        </div>
      </div>
      <div v-if="editing"> 
        <!-- <form @submit.prevent="updateUser" class="d-flex flex-column" >
              <label>First Name:</label>
              <input type="text" v-model="payload.firstName" />
              <label>Last Name:</label>
              <input type="text" v-model="payload.lastName" />
              <label>Email:</label>
              <input type="email" v-model="payload.email" />
              <label>Gender:</label>
              <input type="text" v-model="payload.gender" />
              <label>Age:</label>
              <input type="number" v-model="payload.userAge" />
              <div class="d-flex justify-content-center justify-content-evenly">
                <button type="submit" class="save">Save</button>
                <button @click="cancelEdit" class="cancel">Cancel</button>
              </div>
              <div class="mt-4">
                <p>*Update to Profile will apply when you log in again*</p>
              </div>
            </form> -->
          </div>
          <div class="d-flex justify-content-evenly p-3">
            <button @click="(event) => deleteUser(user.userID)" class="btn btn-dark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 8H10V16H14M10 12H12.5M17 8V16H21M3 8V16H5C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14V10C7 9.46957 6.78929 8.96086 6.41421 8.58579C6.03914 8.21071 5.53043 8 5 8H3Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            <router-link to="/logout">
              <button class="btn btn-primary">Logout</button>
            </router-link>

          </div>
      </div>
      <!-- <div class="row d-flex justify-content-center" v-else>
      <SpinnerComp></SpinnerComp>
    </div> -->
    </div>
</template>

<script>
import EditAccount from '@/components/EditAccount.vue';
// import SpinnerComp from '@/components/SpinnerComp.vue';


export default {
  data() {
    return {
      user:{},
      payload: {
        userID: "",
        firstName: "",
        lastName: "",
        userAge: null,
        emailAdd: ""
      },
    } 
  },
  components: {
    // SpinnerComp,
    EditAccount
  },
  mounted() {
    this.fetchUserData()
  },
  computed: {
    
  },
  methods: {
    updateUser(user) {
      console.log(user)
      let updatingAccount = {
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        gender: user.gender,
        emailAdd: user.emailAdd,
      }
      this.$store.dispatch('updateUser', { id: user.userID, data: updatingAccount })
    // editProfile() {
    //   // Copy user data to editedUser for editing
    //   this.payload = { ...this.user };
    //   this.editing = true;
    // },
    // cancelEdit() {
    //   // Cancel editing, revert changes
    //   this.editing = false;
    //   this.payload = {};
    // },
    // async updateUser() {
    //   try {
    //     await this.$store.dispatch("updateUser", {
    //       id: this.user.userID,
    //       data: this.payload,
    //     });
    //     await this.fetchUserData();
    //     this.editing = false;
    //     this.payload = {};
    //   } catch (error) {
    //     console.error("Error updating user:", error);
    //   }
    },
    
    fetchUserData() {
  // Get all cookies and split them into an array
  const cookies = document.cookie.split(";").map(cookie => cookie.trim());
  // Find the cookie containing the user data
  const userCookie = cookies.find(cookie => cookie.startsWith("LegitUser="));

  // If the user cookie is found, parse its value and extract the user data
  if (userCookie) {
    try {
      // Extract the user data from the cookie
      const userData = JSON.parse(decodeURIComponent(userCookie.split("=")[1]));

      // If user data is valid, assign it to the user property
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
    }
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

.row {
  margin-top: 20px;
}

.info {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}


label {
  font-weight: bold;
  font-size: 16px;
}


.logOutButton {
  background-color: #B78E64;
  padding: 10px 20px;
  border-radius: 5px;
  color: antiquewhite;
  border: none;
  cursor: pointer;
  font-family: 'Barlow';
  font-size: 16px;
}

.logOutButton:hover {
  background-color: #95794E;
}
</style>

