
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ServeDev',
  methods: {
    // Interpretation Player events's  handler:
    handleOnLanguageSelected(e){
      console.info('handleLanguageSelected event:',e);
    },
    handleOnReady(e){
      console.info('handleOnReady event:',e);
    },
    handleOnConnectionStatusUpdated(e){
      console.info('handleOnConnectionStatusUpdated event:',e);
    },

    // Interpretation Manager events's handler: 
    handleOnCreateEvent(e){
      console.info('handleOnCreateEvent event:',e);
    }

  },
  mounted() {
    const params = new URLSearchParams(window.location.search)
    const roomname = params.get('rsi-roomname');
    if(!roomname){
       window.location.href = 'http://localhost:8080/?rsi-roomname=aljx'
    }
  },
});
</script>

<template>
<!-- This file is for test purpose on dev -->
  <div id="app">
    <video autoplay loop="" controls="" width="640" height="480">
      <source autoplay type="video/mp4" src="https://assets.akkadu.com/akkadu-rsi-api-widget/musk-short.mp4">
    </video>
    <br>
    <br>
   <h3>Interpretation Player:</h3>
    <rsi-api-interpretation-player 
      sdkKey="d9ed0b1e-6027-4c19-a43a-69b231713f1c"
      :isPlayerControlled="true"
      v-on:onLanguageSelected="handleOnLanguageSelected"
      v-on:onReady="handleOnReady"
      v-on:onConnectionStatusUpdated="handleOnConnectionStatusUpdated" /> 
    <br>
    <br>
    <br>
    <h3>Interpretation Manager:</h3>
    <rsi-interpretation-manager
      sdkKey="d9ed0b1e-6027-4c19-a43a-69b231713f1c" 
      v-on:onCreateEvent="handleOnCreateEvent"/>
  </div>
</template>

<style scoped>
#app{
  padding-bottom: 180px; 
}
</style>