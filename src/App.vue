<script lang="ts">

  export default{
    name: "App",
    components:{}
  }
</script>

<template>
  <div class="head">
    <h1>Josiah's english stuff</h1>
  </div>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<style scoped>
  body{
    padding:none
  }
  .head{
    background-color: aqua;
    padding: 10px
  }

  
</style>
