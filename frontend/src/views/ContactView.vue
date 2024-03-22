<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li class="breadcrumb">
                <router-link to="/" style="text-decoration: none; color: grey; font-size: small;"
                    class="breadcrumb-label"><span>Home</span></router-link>
            </li>
            <li class="breadcrumb item-active">
                <span class="breadcrumb-label" style="color: grey; font-size:small;">Contact</span>
            </li>
        </ul>
        <div class="main-content">
            <h5 class="display-6" style="font-family: 'Karla'; font-size: 24px; color: #8b5b4d;">Contact</h5> <br><br>
            <div class="justify-content-center" id="contactForm">
                <form class="submit-form" action="https://formspree.io/f/mbjnkpna" method="POST" name="contact-form">

                    <div class="form-group mb-3"> <br>
                        <label class="d-flex justify-content-left mx-3" for="fullName" style="color: #8b5b4d;"
                            id="darker-1">Full
                            Name</label>
                        <input type="text" id="name" v-model="name" required="name" style="border-color: #8b5b4d;">
                    </div>

                    <div class="form-group mb-3">
                        <label class="d-flex justify-content-left mx-3" for="email" style="color: #8b5b4d;"
                            id="darker-1">Email</label>
                        <input type="email" id="email" v-model="email" required="email" name="email"
                            style="border-color: #8b5b4d;">
                    </div>
                    <div class="form-group mb-3">
                        <label class="d-flex justify-content-left mx-3" for="message" style="color: #8b5b4d;"
                            id="darker-1">Message</label>
                        <textarea id="message" v-model="message" style="border-color: #8b5b4d;" rows="4"
                            required="message" name="message"></textarea>
                    </div>
                    <br>
                    <button type="submit" class="d-flex justify-content-left" id="subButton">Submit</button>
                </form> <br>

            </div>
        </div><br><br><br>
    </div>
</template>

<script>
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()

export default {
    data() {
        return {
            name: "",
            email: "",
            message: ""
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        submitForm() {
            // Implement form submission logic here
        }
    },
    beforeCreate() {
        // Fetch any data before component is created
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
    font-family: 'Karla';
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
    color: #8b5b4d;
    font-size: medium;
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

input[type="text"],
input[type="email"],
textarea {
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
    color: white;
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
