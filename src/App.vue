<script lang="ts">

  export default{
    name: "App",
    components:{}
  }
</script>

<template>
  <div class="head">
    <div class="image">
      <router-link to="/english">
        <img src="./assets/paper.webp" alt="paper" >
      </router-link>
    </div>
    <div class="title">
      <h1>Josiah's Jovial Jests</h1>
    </div>
  </div>
  <div class="body">
    <router-view></router-view>
  </div>
  <div class="foot">
    © Josiah Hamm 2023
  </div>
</template>

<style scoped>

  .head{
    background: rgb(127,255,212);
    background: linear-gradient(0deg, rgba(127,255,212,1) 0%, rgba(52,230,237,1) 69%, rgba(0,212,255,1) 100%);
    padding: 10px;
    display:flex;
  }


  h1{
    margin:0px;
  }

  .image{
    width:fit-content;
    margin: 0px;
  }

  .image img{
    width:4rem;
    margin:1rem;
    border-radius: 1rem;
  }



  .title h1{
    padding:1rem;
    font-family: 'inter';
  }

  .foot{
    padding:1rem;
    margin-top:80%;
    text-align:center;
  }
  
</style>
