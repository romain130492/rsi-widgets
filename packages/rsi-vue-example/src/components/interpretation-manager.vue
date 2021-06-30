<template>
  <div class="wrapper">    
   <h2> Interpretation Manager Demo: </h2> 
    <RsiInterpretationManager
      sdkKey="d9ed0b1e-6027-4c19-a43a-69b231713f1c" 
      v-on:onCreateEvent="handleOnCreateEvent"/>
  </div>
</template>

<script>
import { RsiInterpretationManager } from '@akkadu/rsi-vue'  

export default {
  name: 'InterpretationManagerDemo',
  components: {
    RsiInterpretationManager
  },
  methods: {
    handleOnCreateEvent(e){
      console.info('handleOnCreateEvent event:',e);
    }
  },
  mounted() {
    console.log(RsiInterpretationManager,'RsiInterpretationManager')
  },
}
</script>

<style>
.wrapper{
  margin-top: 3rem;
}
h2{
  padding-bottom: 1rem;
}

</style>



