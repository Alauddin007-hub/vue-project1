<template>
    <div class="box" v-on:click = "foodclick">
        <h3>{{ message }}</h3>
        <img src="" alt="">
        <span>{{ clicks }} times click</span>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                message: "Our Food items",
                clicks:0
            }
        },
        // methods: {
        //     foodclick(){
        //         this.clicks++
        //     }
        // },
    props: [
      'foodName',
      'foodDetails',
      ''
    ]
    }
</script>

<style>
    .box {
        height: 200px;
        width: 400px;
        padding: 15px;
        background-color: rgb(207, 172, 125);
        margin: 20px;
    }
</style>