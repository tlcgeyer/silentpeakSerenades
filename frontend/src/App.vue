<template>
<NavBar/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp'
export default {
  components: {
    NavBar,
    FooterComp
  }
}

</script>

<style>
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}

</style>
