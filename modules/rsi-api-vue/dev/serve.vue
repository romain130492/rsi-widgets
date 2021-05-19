<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { RsiApiVueSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  RsiApiVueSample,
  // }
});
</script>

<template>
  <div id="app">
    <rsi-api-interpreter-player apiKey="api_key_test" positionMenu="bottom" />
  </div>
</template>


<style scoped>
.test{margin-top:100px;}
</style>