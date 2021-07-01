<template>
  <div id="akkadu-interpretation-player">
  </div>
</template>

<script>
  import InterpretationPlayer from '@akkadu/rsi-interpretation-player'    
  export default {
    props: {
      sdkKey: {
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
      displayFlag: {
        type: Boolean,
        default: true
      },
      fontFamily: { type: String },
      backgroundSelectorHeader: { type: String },
      fontSizeHeaderSelector: { type: String },
      textSelectorHeader: { type: String },
      backgroundHoverHeaderSelector: { type: String },
      colorHeaderSelector: { type: String },
      borderRadiusHeaderSelector: { type: String },
      fontSizeOptionSelector: { type: String },
      colorOptionSelector: { type: String },
      backgroundOptionSelector: { type: String },
      backgroundHoverOptionSelector: { type: String },
      borderRadiusOptionSelector: { type: String },
      optionsDistanceFromHeader: { type: String }
    },
    data() {
      return {
        stream: null,
        apiKey:null
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init(){
        this.apiKey = this.sdkKey
        const roomName = this.getRoomname();
        if(!roomName){
          throw Error('interpretation-player: roomname is not defined')
        }
        if(!this.apiKey){
          throw Error('interpretation-player: sdkKey is not defined')
        }
        //const InterpretationPlayer = (await import('@akkadu/rsi-api-interpretation-player')).default // @akkadu/rsi-api-interpretation-player 
        const config = {
          apiKey: this.apiKey,
          roomName,
          positionMenu: this.positionMenu,
          isBoxShadow: this.isBoxShadow,
          isPlayerControlled: this.isPlayerControlled,
          displayFlag: this.displayFlag,
          textSelectorHeader: this.textSelectorHeader
        }
        const styleProps = { 
          fontFamily: this.fontFamily,
          backgroundSelectorHeader: this.backgroundSelectorHeader,
          fontSizeHeaderSelector: this.fontSizeHeaderSelector,
          backgroundHoverHeaderSelector: this.backgroundHoverHeaderSelector,
          colorHeaderSelector: this.colorHeaderSelector,
          borderRadiusHeaderSelector: this.borderRadiusHeaderSelector,
          fontSizeOptionSelector: this.fontSizeOptionSelector,
          colorOptionSelector: this.colorOptionSelector,
          backgroundOptionSelector: this.backgroundOptionSelector,
          backgroundHoverOptionSelector: this.backgroundHoverOptionSelector,
          borderRadiusOptionSelector: this.borderRadiusOptionSelector,
          optionsDistanceFromHeader: this.optionsDistanceFromHeader
        }
        this.stream = new InterpretationPlayer(config, styleProps);
        this.initListeners()
        this.stream.init()
      },
      getRoomname(){
        const params = new URLSearchParams(window.location.search)
        const roomname = params.get('rsi-roomname');
        if(!roomname){
         console.error('No rsi-roomname defined on your page. You must add as a query parameter rsi-roomname=abcd, abcd is the roomname that you got during the event creation with the interpretation-manager. Infos here: https://rsi-docs.akkadu.com/interpretation-player/roomname.html');
        }
        return roomname 
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


