<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li class="breadcrumb">
                <router-link to="/" style="text-decoration: none; color: grey; font-size: small;"
                    class="breadcrumb-label"><span>Home</span></router-link>
            </li>
            <li class="breadcrumb item-active">
                <span class="breadcrumb-label" style="color: grey; font-size:small;">Login</span>
            </li>
        </ul>
        <div class="d-flex justify-content-center">
            <h4 class="display-6" style="font-family: 'Karla';">Login</h4>
        </div>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="loginInto">
                    <div class="inputs">
                        <div class="d-flex justify-content-start">
                            <label for="email">Email</label>
                            <input type="email" oninvalid="this.setCustomValidity('Please enter your email address')"
                                oninput="this.setCustomValidity('')" v-model="payload.emailAdd" required />
                        </div>


                        <div class="d-flex justify-content-start">
                            <label for="password">Password</label>
                            <input type="password" oninvalid="this.setCustomValidity('Please enter a password')"
                                oninput="this.setCustomValidity('')" id="password" v-model="payload.userPwd" required />
                        </div> <br>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button @click="loginInto" type="submit" class="loginBtn">Login</button>
                    </div> <br><br>

                    <p style="font-family: 'Karla';">Don't have an account? <span><router-link to="/register">Sign up</router-link></span> right here!</p>
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
            emailAdd: "",
            userPwd: "" 
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        loginInto() {
            this.$store.dispatch("login", this.payload)
        }
    },
    beforeCreate() {
        this.$store.dispatch("fetchUsers");
    },
    mounted() {
        console.log(cookies.get("LegitUser"));
    },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.breadcrumb:not(:first-child):before {
    display: inline-block;
    margin: 0.25rem;
    transform: rotate(15deg);
    border-right: 0.1em solid #a3a3a3;
    height: 0.7em;
    content: '';
}
</style>