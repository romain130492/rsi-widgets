<template>
  <div class="wrapper">    
   <h2> Interpretation Player: </h2> 
   <p> Widget: </p>
    <RsiApiInterpretationPlayer
      apiKey="api_key_test" 
      positionMenu="bottom" 
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
      console.log('handleOnConnectionStatusUpdated event:',e);
    }
  },
}
</script>

<style>
.wrapper{
  margin-top: 3rem;
}

</style>



