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
    <rsi-api-vue-sample />
  </div>
</template>
