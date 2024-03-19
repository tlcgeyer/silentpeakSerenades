<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li class="breadcrumb">
        <router-link
          to="/"
          style="text-decoration: none; color: grey; font-size: small"
          class="breadcrumb-label"
          ><span>Home</span></router-link
        >
      </li>
      <li class="breadcrumb item-active">
        <span class="breadcrumb-label" style="color: grey; font-size: small"
          >Instruments</span
        >
      </li>
    </ul>
    <div class="row d-block d-flex">
      <div class="row">
        <br />
        <h4 class="display-6" id="shopAll">Shop All</h4>
        <br />

        <div class="col">
          <!-- Search input -->
          <br /><input
            @keyup="searchProduct()"
            id="search1"
            type="text"
            placeholder=" Search by name..."
            class="form-control"
            ref="inputField"
            v-model="searchData"
          />
        </div>

        <div class="col dropdown d-flex justify-content-end">
          <!-- sort button -->
          <button
            type="button"
            class="btn btn-light"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by price
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 28L9 21L10.4 19.6L16 25.2L21.6 19.6L23 21L16 28Z"
                fill="#777777"
              />
            </svg>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#" @click="sortByPrice('highest')"
                >Lowest to Highest</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="sortByPrice('lowest')"
                >Highest to lowest</a
              >
            </li>
          </ul>
          <ul>
      <li v-for="item in sortedItems" :key="item.id">{{ prod.prodName }} - ${{ prod.prodAmount }}</li>
    </ul>
        </div>
      </div>
    </div>
    <hr />
    <br /><br />

    <div class="row mx-2" v-if="products" id="alignment">
      <Card v-for="product in products" :key="product.prodID">
        <template #cardHeader>
          <h4
            class="card-title"
            id="theName"
            style="background-color: whitesmoke; font-size: large"
          >
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
            <router-link
              :to="{ name: 'singleItem', params: { id: product.prodID } }"
            >
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
      highest: true,
      filterData: "",
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
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    searchProduct() {
        this.searchData == ""
          this.products.filter((item) => {
              return item.prodName.toLowerCase().includes(this.searchData);
            });
    },
    sortByPrice () {
      if (!this.highest) {
        this.highest = true;
        return this.filteredProducts.sort(
          (a, b) => a.prodAmount - b.prodAmount
        );
      } else {
        this.highest = false;
        return this.filteredProducts.sort(
          (a, b) => b.prodAmount - a.prodAmount
        );
      }
    },

    // singleItem(prodID) {
    //     const selectedProd = this.products.find(product => product.prodID === prodID)
    //     if (selectedProd) {
    //         this.$store.commit("setProduct", selectedProd)
    //         this.$router.push({ name: "InstrumentsView", params: { prodID: selectedProd.prodID } })
    //     }
    // }

    // filterCategories() {
    //     this.filteredProducts = this.filterData == '' ?
    //     this.products :
    //     this.products.filter(item =>{
    //         return item.category.toLowerCase().includes(this.filterData.toLowerCase());
    //     })
    // }
  },
};
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
