<script setup>
import HeaderVue from './components/Header.vue';

</script>

<template>
  <!-- <header-item /> <br> -->
  <HeaderVue /><br>
 <h1>Hello World {{ msg }}</h1><br>
 <!-- <FoodItemVue /> -->
 <food-item />
 <food-item />
 <food-item />
 <food-item />
</template>

<script>
  export default {
    data(){
      return {
        msg : "Welcome to Vue"
      }
    },
    props: [
      'foodName',
      'foodDetails',
      ''
    ]
  }
</script>

<style>
  h1 {
    color: rgb(66, 104, 29);
  }
</style>
