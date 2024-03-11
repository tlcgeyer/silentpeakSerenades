<template>
     <div class="container">
        <div class="row d-block d-flex ">
            <div class="row">
                <h4 class="display-6" id="shopAll">Shop All</h4>
              <div class="col">
                <!-- Search input -->
                <input @keyup="searchProduct()" id="search1" type="text" placeholder=" Search by name..."  class="form-control" ref="inputField" v-model="searchData">
                </div>
              
              <div class="col d-flex justify-content-end">
                <!-- sort button -->
                <button @click="sortedProducts()" class="btn btn-light" id="sortProducts">
                  Sort by price
                </button>
              </div>
            </div>
          </div>
        <div class="row mx-2" v-if="filteredProducts" id="alignment">
            <Card v-for="product in filteredProducts" :key="product.prodID">
                <template #cardHeader>
                    <h4 class="card-title">
                        <img :src="product.prodUrl" alt="prodPic">
                    </h4>
                </template>
                <template #cardBody>
                        <p class="card-text p-2" id="theName">
                        {{ product.prodName }}
                        </p>
                        <p class="card-text p-2 mx-2" id="theCat">
                            {{ product.category }}
                        </p>
                    <div class="d-flex justify-content-center">
                        <p class="card-text  p-2" id="theAmount">
                            R{{ product.prodAmount }},00
                        </p>
                        <p class="card-text  p-2" id="theAmount">
                            {{ product.category }}
                        </p>
                    </div>
            </template>
            <template #cardFooter>
                <!-- <router-link :to="{name: 'product', params: {id: product.prodID}} "><button type="button" class="deButton">View more</button></router-link> -->
            </template>
            </Card> 
        </div>
        <!--spinner-->
        <div class="row" v-else>
            <SpinnerComp></SpinnerComp>
        </div>
    </div>
</template>

<script>
import Card from '../components/CardComp.vue';
import SpinnerComp from '../components/SpinnerComp.vue';

export default {
    name: 'InstrumentsView',
    data(){
        return {
            filteredProducts: null,
            searchData: '',
            highest: true
        }
    },
    components: {
        Card,
        SpinnerComp
    },
    computed: {
        products(){
            return this.$store.state.products
        },
    },
    mounted(){
        this.$store.dispatch('fetchProducts')
        this.filteredProducts = this.products
    },
    methods: {
            searchProduct() {
                this.filteredProducts = this.searchData == '' ? this.filteredProducts :   
                this.products.filter(item =>{
                    return item.prodName.toLowerCase().includes(this.searchData)
                }) 
            },
            sortedProducts(){
                if(!this.highest){
                    this.highest = true
                    return this.filteredProducts.sort((a,b)=> a.prodAmount - b.prodAmount)
                }else{
                    this.highest = false
                    return this.filteredProducts.sort((a,b)=> b.prodAmount - a.prodAmount)
                }       
            }
    }
}
</script>

<style scoped>
.card-title{
    height: 80px;
}

img[alt="prodPic"] {
    width: 110px;
}

</style>