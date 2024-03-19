<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li class="breadcrumb">
                <router-link to="/" style="text-decoration: none; color: grey; font-size: small;" class="breadcrumb-label"><span>Home</span></router-link>
            </li>
            <li class="breadcrumb item-active">
                <span class="breadcrumb-label" style="color: grey; font-size:small;">Instrument</span>
            </li>
        </ul>

        <div class="mt-4" v-if="product">
            <div class="row">
                <div class="col-md-6">
                <img :src="product.prodUrl" alt="prodPic" loading="lazy" class="img img-fluid">
            </div>
            <div class="col-md-6">
                <h2>{{ product.prodName }}</h2>
                <p class="text-muted">{{ product.category }}</p>
                <p class="font-weight-bold">Price: R{{ product.prodAmount }},00</p>
                <p>{{ product.prodDesc }}</p>
                <router-link to="/instruments">
                     <button class="btn btn-primary" id="prim">Go Back</button>
                </router-link>
               
            </div>
        </div>
    </div>
    <div v-else>
        <SpinnerComp></SpinnerComp>
    </div>
    </div>
    <br><br>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

    export default {
        computed: {
            product() {
                return this.$store.state.product
            }
        },
        mounted(){
            this.$store.dispatch("fetchProduct", this.$route.params)
        },
        components: {
            SpinnerComp
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

.breadcrumb:not(:second-child):before {
    display: inline-block;
    margin: 0.25rem;
    transform: rotate(15deg);
    border-right: 0.1em solid #a3a3a3;
    height: 0.7em;
    content: '';
}
</style>