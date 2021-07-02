<template>
  <div id="app">
    <Header />
    <div class="container app-content">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <br>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Header from './components/header';
export default {
  name: 'app',
  components: {
    Header
  },
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
  margin-bottom: 100px;
}
</style>
