<template>
  <div class="wrapper">    
   <h2> Interpretation Player: </h2> 
    <video autoplay loop="" controls="" width="640" height="480">
      <source type="video/mp4" src="https://assets.akkadu.com/akkadu-rsi-api-widget/musk-short.mp4">
    </video>
    <br>
   <p> Widget: </p>
    <RsiApiInterpretationPlayer
      sdkKey="d9ed0b1e-6027-4c19-a43a-69b231713f1c" 
      :isPlayerControlled="true"
      v-on:onLanguageSelected="handleOnLanguageSelected"
      v-on:onReady="handleOnReady"
      v-on:onConnectionStatusUpdated="handleOnConnectionStatusUpdated" 
     />
  </div>
</template>

<script>
import { RsiApiInterpretationPlayer } from '@akkadu/rsi-vue'  

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



