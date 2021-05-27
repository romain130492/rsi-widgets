
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
    <video autoplay loop="" controls="" width="640" height="480">
      <source type="video/mp4" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
    </video>
    <br>
       <br>
    <rsi-api-interpretation-player 
      apiKey="api_key_test" 
      positionMenu="bottom" 
      :isBoxShadow="true"
      :isPlayerControlled="true"
      v-on:onLanguageSelected="handleOnLanguageSelected"
      v-on:onReady="handleOnReady"
      v-on:onConnectionStatusUpdated="handleOnConnectionStatusUpdated" />
  </div>
</template>



<style scoped>
.test{margin-top:100px;}
</style>