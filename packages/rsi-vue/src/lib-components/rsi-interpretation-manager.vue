<template>
  <div id="akkadu-interpretation-manager">
  </div>
</template>

<script>
  import InterpretationManager from '@akkadu/rsi-interpretation-manager'    
  export default {
    props: {
      sdkKey:{
        required:true,
        default:null
      }
    },
    data() {
      return {
        manager: null
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init(){
        if(!this.sdkKey){
          throw Error('interpretation-manager: sdkKey is not defined')
        }
        const config = {sdkKey:this.sdkKey}
        this.manager = new InterpretationManager(config);
        this.initListeners()
        this.manager.init()
      },
      /**
       * @description Additionnal information about theses events in : /interpretation-manager/events.html
       */
      initListeners(){
        this.manager.on('interpretation-manager:on-create-event', ({ event }) => {
          console.info('emit interpretation-manager:on-create-event', event);
          this.$emit("onCreateEvent", { event });
        })
      }
    },
    
  }
</script>


