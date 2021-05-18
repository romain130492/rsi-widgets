<template>
  <div id="akkadu-interpretation-player">

  </div>
</template>

<script>
/* eslint-disable */
import { InterpretationPlayer } from '@akkadu/rsi-api-interpretation-player'
  export default {
    props: {
      apiKey: {
        required: true,
        type:String,
        default: null,
      },
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){
        const roomname = this.getRoomname();
        if(!roomname){
          throw Error('interpretation-player: roomname is not defined')
        }
        if(!apiKey){
          throw Error('interpretation-player: apiKey is not defined')
        }
        const stream = new InterpretationPlayer({apiKey});
        
      },
      getRoomname(){
        return 'test'
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>