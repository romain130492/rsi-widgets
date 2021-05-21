
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ServeDev',
  methods: {
    handleOnLanguageSelected(e){
      console.info('handleLanguageSelected event:',e);
    },
    handleOnReady(e){
      console.info('handleOnReady event:',e);
    },
    handleOnConnectionStatusUpdated(e){
      console.log('handleOnConnectionStatusUpdated event:',e);
    }
  },
});
</script>

<template>
<!-- This file is for test purpose on dev -->
  <div id="app">
    <rsi-api-interpretation-player 
      apiKey="api_key_test" 
      positionMenu="bottom" 
      :isBoxShadow="true"
      v-on:onLanguageSelected="handleOnLanguageSelected"
      v-on:onReady="handleOnReady"
      v-on:onConnectionStatusUpdated="handleOnConnectionStatusUpdated" />
  </div>
</template>



<style scoped>
.test{margin-top:100px;}
</style>