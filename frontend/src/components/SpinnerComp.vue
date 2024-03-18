<template>
    <div class="text-center text-dark mx-3 d-flex justify-content-center">
        <div class="circonf circonf-6"></div>
    </div>
</template>

<script>
    export default {
        name: 'SpinnerComp'
    }
</script>

<style scoped>
.circonf-wrapper {
  text-align: center;
}

.circonf {
  margin: 1rem;
  display: inline-block;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 4px solid silver;
  animation: circ-anim 0.7s linear infinite;
}

.circonf-6 {
  border-width: 0px;
  border-radius: 50%;
  border-top: 3px solid grey;
  border-right: 3px solid transparent;
}

@keyframes circ-anim {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>