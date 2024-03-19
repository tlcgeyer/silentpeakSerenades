<template>
    <div class="container">
        <ul class="breadcrumbs">
      <li class="breadcrumb">
        <router-link to="/" style="text-decoration: none; color: grey; font-size: small;"
          class="breadcrumb-label"><span>Home</span></router-link>
      </li>
      <li class="breadcrumb item-active">
        <span class="breadcrumb-label" style="color: grey; font-size:small;">Your Account</span>
      </li>
    </ul>

    <!-- <div class="col">
        <h1>Welcome Back To Your Profile {{ user.firstName }} {{ user.lastName }}</h1>
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
                <span>Gender:</span> {{ user.gender }}
                <br>
                <br>
                <span>Role:</span> {{ user.userRole }}
                <br>
                <br>
                <span>Email</span> {{ user.emailAdd }}
                <br>
                <br>
            </div>
        </div>
    <!- Button trigger modal -->
    <!-- <button
      type="button"
      class="btn"
      @click="openEditModal(user.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#exampleModal' + user.userID"
    >
      Edit
    </button> -->
    <!-- Modal -->
    <!-- <div
      class="modal fade"
      :id="'exampleModal' + user.userID"
      tabindex="-1"
      :aria-labelledby="'exampleModalLabel' + user.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Update User
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <center>
            <div class="modal-body">
            <input
              placeholder="First Name"
              type="name"
              v-model="editingUser.firstName"
              required
            />
            <input
              placeholder="Surname"
              type="surname"
              v-model="editingUser.lastName"
              required
            />
            <input
              placeholder="Age"
              type="number"
              v-model="editingUser.userAge"
              required
            />
            <input
              placeholder="Gender"
              type="gender"
              v-model="editingUser.gender"
              required
            />
            <input
              placeholder="Email"
              type="email"
              v-model="editingUser.emailAdd"
              required
            />
            <input
              placeholder="Password"
              type="password"
              v-model="editingUser.userPwd"
              required
            />
            <input
              placeholder="Role"
              type="role"
              v-model="editingUser.userRole"
              required
            />
            <input
              placeholder="Profile Image"
              type="text"
              v-model="editingUser.profileURL"
              required
            />
          </div>
        </center>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateUser(user.userID)"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="btn" @click.prevent="LogOut" >Logout</button>
    <button class="del btn" @click="deleteUser(user.userID)">Delete</button>
     -->
    </div>
</template>

<script>
// import router from '@/router'
// import { useCookies } from 'vue3-cookies'
// const { cookies } = useCookies()

//     export default {
//     props: ["user"],
//     data() {
//       return {
//         editingUser: {
//         ...this.user,
//       },
//       editingUserID: null,
//     };
//     },
//     methods: {
//         LogOut() {
//             cookies.remove("LegitUser")
//             try {
//                 const data = JSON.parse(localStorage.getItem("user"));
                
//                 if (data) {
//                     localStorage.removeItem("user")
//                 }
//             } catch (error) {
//                 console.error("Error fetching data from local storage:", error);
//             }
//             router.push({ name: "login"});
//         },
//         openEditModal(userID) {
//         this.editingUserID = userID;
//         this.editingUser = {
//           ...this.$store.state.user
//         };
//       },
//       updateUser(userID) {
//         this.$store
//           .dispatch("updateUser", {
//             userID: userID,
//             ...this.editingUser,
//           })
//           .then(() => {
//             console.log("user successfully updated");
//             setTimeout(() => {
//               location.reload();
//             }, 500);
//           })
//           .catch((err) => {
//             console.error("Error while updating: ", err);
//           });
//       },
//       deleteUser(userID) {
//     if (confirm("Are you sure you want to delete this user?"))
//       this.$store.dispatch("deleteUser", userID)
//     setTimeout(() => {
//       location.reload();
//     }, 500);
//     router.push({ name: "login" });
//   },
//   },
//     mounted() {
//         this.$store.dispatch("fetchUsers");
//     },

//     computed: {
//         user() {
//             return this.$store.state.user;
//         },
//     },
//     } -->
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