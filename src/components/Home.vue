
<script lang="ts">
  export default{
    name:"Home"
  }
</script>

<template>
  <div class="body">
    <div class="type">
      <div class="title">
        <h3>Memoirs</h3>
      </div>
      <div class="works">
        <a href="/english/moment-in-my-life">
          <div class="work">
            <p>A Moment in My Life</p>
          </div>
        </a>
        <a href="/english/my-computer">
          <div class="work">
            <p>My Computer</p>
          </div>
        </a>
        <a href="/english/when-i-was-young">
          <div class="work">
            <p>When I was young</p>
          </div>
        </a>
        <a href="/english/the-home-on">
          <div class="work">
            <p>The Home On E 135th Pl</p>
          </div>
        </a>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .type{
    display:flex;
  }

  .title p{
    font-size: large;
    padding:1rem;
  }

  .works{
    display:flex;
    flex-flow: row wrap;
    align-content:stretch;
    align-items:stretch;
  }

  .title{
    width:min-content;
    padding:1rem;
    border: 2px dashed salmon;
    text-align: center;
    margin:0.5rem;
    font-family: 'inter';
  }

  .work{
    padding:1rem;
    flex-grow: 2;
    min-width: 5rem;
    border: 2px dashed salmon;
  }

  .work p{
    font-family: 'inter';
    text-decoration:none;
    color:black;
  }

  .works a{
    margin:0.5rem;
    transition-duration: 1000ms;
  }

  .works a:hover{
    margin:1rem;
  }
</style>