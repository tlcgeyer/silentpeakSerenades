<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-center">
            <h4 class="display-6">Login</h4>
        </div>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="loginInto">
                    <label>Email Address<input type="email" v-model="emailAdd" /></label>
                    <label>Password<input type="password" v-model="userPwd" /></label>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                emailAdd: "",
                userPwd: ""
            }
        }
    }
</script>

<style scoped>

</style>