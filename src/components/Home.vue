
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
        <div class="work">
          <p>this is a super cool literary masterpiece</p>
        </div>
        <div class="work">
          <p>this is a super cool literary masterpiece</p>
        </div>
        <div class="work">
          <p>this is a super cool literary masterpiece</p>
        </div>
        <div class="work">
          <p>this is a super cool literary masterpiece</p>
        </div>

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
    flex-flow: row nowrap;
    align-content: stretch;
    
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
    flex-shrink: 4;
    min-width: 4rem;
    border: 2px dashed salmon;
    transition-duration: 1s;
    margin:0.5rem;
  }

  .work p{
    font-family: 'inter';
  }

  .work:hover{
    margin:0rem;
  }
</style>