<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li class="breadcrumb">
        <router-link to="/" style="text-decoration: none; color: grey; font-size: small"
          class="breadcrumb-label"><span>Home</span></router-link>
      </li>
      <li class="breadcrumb item-active">
        <span class="breadcrumb-label" style="color: grey; font-size: small">Instruments</span>
      </li>
    </ul>
    <div class="row d-block d-flex">
      <div class="row">
        <br />
        <h4 class="display-6" id="shopAll">Shop All</h4>
        <br />

        <div class="col">
          <!-- Search input -->
          <br>
          <input @keyup="searchProduct" id="search1" type="text" placeholder=" Search by name..." class="form-control"
            ref="inputField" v-model="searchData" />
        </div>

        <div class="col dropdown d-flex justify-content-end">
          <!-- sort button -->
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Sort by
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click="sortingLow">Lowest to Highest</a></li>
              <li><a class="dropdown-item" href="#" @click="sortingHigh">Highest to Lowest</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <br /><br />

    <div class="row mx-2" v-if="filteredProducts && filteredProducts.length > 0" id="alignment">
      <Card v-for="product in filteredProducts" :key="product.prodID">
        <template #cardHeader>
          <h4 class="card-title" id="theName" style="background-color: whitesmoke; font-size: large">
            {{ product.prodName }}
          </h4>
        </template>
        <template #cardBody>
          <p class="card-text p-2">
            <img :src="product.prodUrl" alt="prodPic" />
          </p>

          <div class="d-flex justify-content-center">
            <p class="card-text p-2" id="theAmount">
              R{{ product.prodAmount }},00
            </p>
          </div>
        </template>
        <template #cardFooter>
          <div class="buttons">
            <router-link :to="{ name: 'singleItem', params: { id: product.prodID } }">
              <button>View More</button>
            </router-link>
            <button @click="addToCart(product)">Add To Cart</button>
          </div>
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
import Card from "../components/CardComp.vue";
import SpinnerComp from "../components/SpinnerComp.vue";

export default {
  name: "InstrumentsView",
  data() {
    return {
      searchData: "",
      filteredProducts: [],
    };
  },
  components: {
    Card,
    SpinnerComp,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts").then(() => {
      this.filteredProducts = [...this.products];
    });
  },
  methods: {
    searchProduct() {
      this.filteredProducts = this.searchData.trim() === '' ? [...this.products] :
        this.products.filter(item => {
          return item.prodName.toLowerCase().includes(this.searchData.toLowerCase());
        });
    },
    sortingLow() {
      this.filteredProducts = [...this.filteredProducts].sort((p1, p2) => p1.prodAmount - p2.prodAmount);
    },
    sortingHigh() {
      this.filteredProducts = [...this.filteredProducts].sort((p1, p2) => p2.prodAmount - p1.prodAmount);
    },
    // addToCart(product) {
    //   // Implement your addToCart logic here
    // }
  }
}
</script>

<style scoped>
.card-title {
  height: 80px;
}

img[alt="prodPic"] {
  width: 200px;
}


.breadcrumb:not(:first-child):before {
  display: inline-block;
  margin: 0.25rem;
  transform: rotate(15deg);
  border-right: 0.1em solid #a3a3a3;
  height: 0.7em;
  content: "";
}
</style>
