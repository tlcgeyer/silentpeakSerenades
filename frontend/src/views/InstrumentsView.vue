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
        <h4 class="display-6" id="shopAll" style="font-family: 'Barlow'">Shop All</h4>
        <br />

        <div class="col">
          <!-- Search input -->
          <br>
          <input @keyup="searchProduct" id="search1" type="text"
            oninvalid="this.setCustomValidity('Search item by name')"   oninput="this.setCustomValidity('')"
            placeholder="   🔍 Search by name..." ref="inputField" v-model="searchData"/>
            
        </div>

        <div class="col dropdown d-flex justify-content-end">
          <!-- sort button -->
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false" style="font-family: 'Barlow'; background-color: #4f423a;">
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

        <template #cardBody>
          <p class="card-title" style="background-color: none;">
            <img :src="product.prodUrl" alt="prodPic" />
          </p>

          <h5 class="card-text p-2" style="margin-top: 10%;">
            {{ product.prodName }}
          </h5>

          <div class="d-flex justify-content-center">
            <p class="card-text p-2" id="theAmount">
              R{{ product.prodAmount }},00
            </p>
          </div>
        </template>
        <template #cardFooter>
          <div class="buttons">
            <router-link :to="{ name: 'singleItem', params: { id: product.prodID } }">
              <button
                style="background-color: #8b5b4d; color: #fff; border-radius: 10px; border-color: #fff; margin-right: 10px;">View
                More</button>
            </router-link>
            <button @click="addToCart(product)"><svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                xmlns="http://www.w3.org/2000/svg" style="margin-left: 10%;">
                <path
                  d="M15.8333 6.125H13.3333V5.25C13.3333 4.32174 12.9822 3.4315 12.357 2.77513C11.7319 2.11875 10.8841 1.75 10 1.75C9.11595 1.75 8.26811 2.11875 7.64299 2.77513C7.01787 3.4315 6.66668 4.32174 6.66668 5.25V6.125H4.16668C3.94566 6.125 3.7337 6.21719 3.57742 6.38128C3.42114 6.54538 3.33334 6.76794 3.33334 7V16.625C3.33334 17.3212 3.59674 17.9889 4.06558 18.4812C4.53442 18.9734 5.1703 19.25 5.83334 19.25H14.1667C14.8297 19.25 15.4656 18.9734 15.9344 18.4812C16.4033 17.9889 16.6667 17.3212 16.6667 16.625V7C16.6667 6.76794 16.5789 6.54538 16.4226 6.38128C16.2663 6.21719 16.0544 6.125 15.8333 6.125ZM8.33334 5.25C8.33334 4.78587 8.50894 4.34075 8.8215 4.01256C9.13406 3.68437 9.55798 3.5 10 3.5C10.442 3.5 10.866 3.68437 11.1785 4.01256C11.4911 4.34075 11.6667 4.78587 11.6667 5.25V6.125H8.33334V5.25ZM15 16.625C15 16.8571 14.9122 17.0796 14.7559 17.2437C14.5997 17.4078 14.3877 17.5 14.1667 17.5H5.83334C5.61233 17.5 5.40037 17.4078 5.24409 17.2437C5.08781 17.0796 5.00001 16.8571 5.00001 16.625V7.875H6.66668V8.75C6.66668 8.98206 6.75447 9.20462 6.91075 9.36872C7.06703 9.53281 7.279 9.625 7.50001 9.625C7.72102 9.625 7.93299 9.53281 8.08927 9.36872C8.24555 9.20462 8.33334 8.98206 8.33334 8.75V7.875H11.6667V8.75C11.6667 8.98206 11.7545 9.20462 11.9108 9.36872C12.067 9.53281 12.279 9.625 12.5 9.625C12.721 9.625 12.933 9.53281 13.0893 9.36872C13.2455 9.20462 13.3333 8.98206 13.3333 8.75V7.875H15V16.625Z"
                  fill="black" />
              </svg></button>
          </div>
        </template>
      </Card>
    </div>
    <!--spinner-->
    <div class="row" v-else>
      <SpinnerComp></SpinnerComp>
    </div>
  </div><br><br><br>
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
      userID: ""
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
    addToCart(product) {
      this.$store.dispatch("addToCart", { prodID: product.prodID, userID: this.userID });

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Karla:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.card-title {
  height: 190px;
}



img[alt="prodPic"] {
  width: 100px;
}

.breadcrumb:not(:first-child):before {
  display: inline-block;
  margin: 0.25rem;
  transform: rotate(15deg);
  border-right: 0.1em solid #a3a3a3;
  height: 0.7em;
  content: "";
}

#search1 {
  width: 100%;
  border-radius: 10px;
}

.card {
  border-color: #9F7E69;
}
</style>
