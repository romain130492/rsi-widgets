

<template>
  <div id="akkadu-interpretation-player">
      Interpretation player
  </div>
</template>

<script>
import {InterpretationPlayer} from '/Users/romain/Desktop/Projects/Akkadu/rsi-api-widget/rsi-akkadu-widget/public/components/interpretation-player.vue'
export default {
  name: 'HelloWorld',
  props: {
    apiKey: {
      type:String,
      required:true,
      default:null 
      }
  },
  data() {
    return {
      interpretationPlayer:null
    }
  },
  mounted() {
    if(!this.apiKey){
      console.error('akkadu-rsi-api:vue: apiKey is undefined');
      return
    }

    this.initListeners()
  },
  methods: {
    initListeners(){
      console.info('akkadu-rsi-api:vue:initing listeners');
    }
  },
}
</script>


