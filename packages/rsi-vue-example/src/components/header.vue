<template>
  <header class="header">
    <div id="nav">
      <router-link to="/" class="active">Home</router-link> |
      <router-link to="/interpretation-player-demo?rsi-roomname=aljx" >Interpretation Player- Audience Page</router-link> |
      <router-link to="/interpretation-manager-demo">Interpretation Manager</router-link> |
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .title{
    margin-bottom: 20px;
  }
  .header {
    background: white;
    color: #2D3749;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #dddddd;
    margin-bottom: 3rem;
  }

  .header a {
    color: #2D3749;
    padding-right: 5px;
    text-decoration: none;
    transition: all .3s;
  }

  .header a.active,
  .header a:hover,
  .header a:focus {
    color: #1A72FF;
  }
</style>


