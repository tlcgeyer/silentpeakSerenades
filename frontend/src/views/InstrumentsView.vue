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
                <!-- filter button -->
                <!-- <button @click="filterCategories()" class="btn btn-light" id="filterCategories">
                    <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 13.5V1M25 26V21.3125M4 26V19.75M25 15.0625V1M14.5 5.6875V1M14.5 26V11.9375" stroke="#FFEEE2" stroke-linecap="round"/>
                    <path d="M4 19.75C5.65685 19.75 7 18.3509 7 16.625C7 14.8991 5.65685 13.5 4 13.5C2.34315 13.5 1 14.8991 1 16.625C1 18.3509 2.34315 19.75 4 19.75Z" stroke="#FFEEE2" stroke-linecap="round"/>
                    <path d="M14.5 11.9375C16.1569 11.9375 17.5 10.5384 17.5 8.8125C17.5 7.08661 16.1569 5.6875 14.5 5.6875C12.8431 5.6875 11.5 7.08661 11.5 8.8125C11.5 10.5384 12.8431 11.9375 14.5 11.9375Z" stroke="#FFEEE2" stroke-linecap="round"/>
                    <path d="M25 21.3125C26.6569 21.3125 28 19.9134 28 18.1875C28 16.4616 26.6569 15.0625 25 15.0625C23.3431 15.0625 22 16.4616 22 18.1875C22 19.9134 23.3431 21.3125 25 21.3125Z" stroke="#FFEEE2" stroke-linecap="round"/>
                    </svg>
               </button> -->
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
            highest: true,
            filterData: ''
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
            },
            // filterCategories() {
            //     this.filteredProducts = this.filterData == '' ? 
            //     this.products :   
            //     this.products.filter(item =>{
            //         return item.category.toLowerCase().includes(this.filterData.toLowerCase());
            //     }) 
            // }
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

#filterCategories {
    background-color: #9F7E69;
    color: white;
    size: 20px;
}

</style>