<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li class="breadcrumb">
                <router-link to="/" style="text-decoration: none; color: #8b5b4d; font-size: small;"
                    class="breadcrumb-label"><span>Home</span></router-link>
            </li>
            <li class="breadcrumb item-active">
                <span class="breadcrumb-label" style="color: #8b5b4d; font-size: small;">Login</span>
            </li>
        </ul>
        <div class="main-content">
            <h5 class="display-6" style="font-family: 'Karla'; font-size: 24px; color: #8b5b4d;">Login</h5> <br><br>
            <div class="justify-content-center" id="loginForm">
                <form @submit.prevent="loginInto">
                    <div class="form-group">
                        <label for="email" style="color: #8b5b4d;">Email</label>
                        <input type="email" id="email" v-model="payload.emailAdd" required
                            style="border-color: #8b5b4d;" />
                    </div>

                    <div class="form-group">
                        <label for="password" style="color: #8b5b4d;">Password</label>
                        <input type="password" id="password" v-model="payload.userPwd" required
                            style="border-color: #8b5b4d;" />
                    </div> <br>

                    <div class="form-group">
                        <button type="submit" style="background-color: #8b5b4d; color: #fff;">Login</button>
                    </div>
                </form>
            </div>
            <p class="signup-link" style="color: #8b5b4d;">Don't have an account? <router-link to="/register"
                    style="color: #8b5b4d;">Sign up</router-link></p>
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
    padding: 20px;
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

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    border: 1px solid #8b5b4d;
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

.signup-link {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
}
</style>
