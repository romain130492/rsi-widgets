<template>
  <div id="app">
    <div class="container app-content">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <br>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>
