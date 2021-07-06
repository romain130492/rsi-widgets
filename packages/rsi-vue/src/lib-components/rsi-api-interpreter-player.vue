<template>
  <div id="akkadu-interpretation-player">
  </div>
</template>

<script>
  import InterpretationPlayer from '@akkadu/rsi-interpretation-player'
  import '@akkadu/rsi-interpretation-player/dist/index.css'

  export default {
    props: {
      sdkKey: {
        required: true,
        type:String,
        default: null,
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
      placeholderText: { type: String },
      widgetWrapperClass: { type: String },
      dropdownWrapperClass: { type: String },
      headerClass: { type: String },
      optionsWrapperClass: { type: String },
      optionItemClass: { type: String },
      selectedOptionClass: { type: String },
      refreshButtonClass: { type: String },
      roomName: {
        required: false,
        type: String,
        default: null,
      },
    },
    data() {
      return {
        stream: null,
        apiKey: null
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init(){
        this.apiKey = this.sdkKey
        const roomName = this.roomName ? this.roomName : this.getRoomname();
        if(!roomName){
          throw Error('interpretation-player: roomName is not defined')
        }
        if(!this.apiKey){
          throw Error('interpretation-player: sdkKey is not defined')
        }
        //const InterpretationPlayer = (await import('@akkadu/rsi-api-interpretation-player')).default // @akkadu/rsi-api-interpretation-player 
        const config = {
          apiKey: this.apiKey,
          roomName,
          isPlayerControlled: this.isPlayerControlled,
          displayFlag: this.displayFlag,
          placeholderText: this.placeholderText
        }
        const classNames = { 
          widgetWrapperClass: this.widgetWrapperClass,
          dropdownWrapperClass: this.dropdownWrapperClass,
          headerClass: this.headerClass,
          optionsWrapperClass: this.optionsWrapperClass,
          optionItemClass: this.optionItemClass,
          selectedOptionClass: this.selectedOptionClass,
          refreshButtonClass: this.refreshButtonClass
        }
        this.stream = new InterpretationPlayer(config, classNames);
        this.initListeners()
        this.stream.init()
      },
      getRoomname(){
        const params = new URLSearchParams(window.location.search)
        let roomname = params.get('rsi-roomname');
        if(!roomname && this.$route && this.$route.query && this.$route.query['rsi-roomname']){
          roomname = this.$route.query['rsi-roomname']
        }
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


