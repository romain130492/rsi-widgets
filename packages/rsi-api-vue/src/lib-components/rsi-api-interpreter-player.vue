<template>
  <div id="akkadu-interpretation-player">
  </div>
</template>

<script>
  import InterpretationPlayer from '@akkadu/rsi-api-interpretation-player'    
  export default {
    props: {
      apiKey: {
        required: true,
        type:String,
        default: null,
      },
      positionMenu: {
        required: false,
        type:String,
        default: 'bottom',
      },
      isBoxShadow: {
        required: false,
        type: Boolean,
        default: true,
      },
      isPlayerControlled: {
        required: false,
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        stream: null
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init(){
        const roomName = this.getRoomname();
        if(!roomName){
          throw Error('interpretation-player: roomname is not defined')
        }
        if(!this.apiKey){
          throw Error('interpretation-player: apiKey is not defined')
        }
        //const InterpretationPlayer = (await import('@akkadu/rsi-api-interpretation-player')).default // @akkadu/rsi-api-interpretation-player 
        const config = {apiKey:this.apiKey, roomName, positionMenu:this.positionMenu, isBoxShadow:this.isBoxShadow, isPlayerControlled:this.isPlayerControlled }
        this.stream = new InterpretationPlayer(config);
        this.initListeners()
        this.stream.init()
      },
      getRoomname(){
        return 'test' // to update later with the gateway api
      },
      /**
       * @description Additionnal information about theses events in : /interpretation-player/events.html
       */
      initListeners(){
        this.stream.on('interpretation-player:on-ready', ({ isReady }) => {
          console.info('emit interpretation-player:on-ready', isReady);
          this.$emit("onReady", { isReady });
        })
        this.stream.on('interpretation-player:on-language-selected', ({ languageSelected }) => {
          console.info('emit interpretation-player:on-language-selected', languageSelected);
          this.$emit("onLanguageSelected", { languageSelected });
        })
        this.stream.on('interpretation-player:on-connection-status-updated', ({ connection }) => {
          console.info('emit interpretation-player:on-connection-status-updated', connection);
          this.$emit("onConnectionStatusUpdated", { connection });
        })
      }
    },
    
  }
</script>


