<template>
  <div class="container">
    <h6 class="display-6 heading1">FEATURED PRODUCTS</h6>
    <!-- Featured products -->
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="https://i.ibb.co/C9SpfJg/concert-grade-purple-bamboo-flute.png" class="card-img-top" alt="dizi">
            <div class="card-body">
                <h5 class="card-title">Concert Grade Purple Bamboo Dizi </h5>
                    <router-link to="" style=" color: white; background-color:#7A6354 ;" class="btn">View more</router-link> 
              </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="https://i.ibb.co/C9SpfJg/concert-grade-purple-bamboo-flute.png" class="card-img-top" alt="guqin">
            <div class="card-body">
                <h5 class="card-title">Concert Grade Purple Bamboo Dizi </h5>
                    <router-link to="" style=" color: white; background-color:#7A6354;" class="btn">View more</router-link> 
              </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="https://i.ibb.co/C9SpfJg/concert-grade-purple-bamboo-flute.png" class="card-img-top" alt="dizi">
            <div class="card-body">
                <h5 class="card-title">Concert Grade Purple Bamboo Dizi </h5>
                    <router-link to="" style=" color: white; background-color:#7A6354;" class="btn">View more</router-link> 
              </div>
        </div>
      </div>
      </div>

      <!-- Shop by Collections! -->
      <h6 class="display-6 subHeading">SHOP BY COLLECTION</h6>
      <div class="row">
        <div class="col">
          <span>Dizi</span>

        </div>

        <div class="col">
          <span>Guqin</span>
        </div>

        <div class="col">
          <span>Pipa</span>
        </div>

        <div class="col">
          <span>Guzheng</span>
        </div>
        <div class="col">
          <span>Erhu</span>
        </div>
      </div>
    </div>
</template>

<script>


export default {
  name: 'HomeView',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Karla:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.heading1{
  margin-top: 5%;
  padding-bottom: 35px;
  font-family: 'Barlow';
  font-weight: 400;
  font-size: xx-large;
}

.subHeading{
  font-family: 'Barlow';
  font-size: x-large;
  font-weight: 500;
  padding-bottom: 5%;
  margin-top:10%;
}

.card {
  margin-left: 15%;
  border-color: #9F7E69;
}
</style>
