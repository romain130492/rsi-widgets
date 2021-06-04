<template>
  <div class="wrapper">    
   <h2> Interpretation Player: </h2> 
    <video autoplay loop="" controls="" width="640" height="480">
      <source type="video/mp4" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
    </video>
    <br>
   <p> Widget: </p>
    <RsiApiInterpretationPlayer
      apiKey="api_key_test" 
      positionMenu="bottom" 
      :isPlayerControlled="true"
      v-on:onLanguageSelected="handleOnLanguageSelected"
      v-on:onReady="handleOnReady"
      v-on:onConnectionStatusUpdated="handleOnConnectionStatusUpdated" 
     />
  </div>
</template>

<script>
import { RsiApiInterpretationPlayer } from '@akkadu/rsi-api-vue'  

export default {
  name: 'InterpretationPlayerDemo',
  components: {
    RsiApiInterpretationPlayer
  },
  methods: {
    handleOnLanguageSelected(e){
      console.info('handleLanguageSelected event:',e);
    },
    handleOnReady(e){
      console.info('handleOnReady event:',e);
    },
    handleOnConnectionStatusUpdated(e){
      console.info('handleOnConnectionStatusUpdated event:',e);
    }
  },
}
</script>

<style>
.wrapper{
  margin-top: 3rem;
}

</style>



