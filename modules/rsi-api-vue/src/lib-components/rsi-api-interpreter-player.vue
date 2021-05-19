<template>
  <div id="akkadu-interpretation-player">
  </div>
</template>

<script>
/*  import InterpretationPlayer  from '/Users/romain/Desktop/Projects/Akkadu/rsi-api-widget/rsi-api-widget/modules/rsi-api-interpretation-player'  */
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
        console.info(this.apiKey,'api key');
        if(!roomName){
          throw Error('interpretation-player: roomname is not defined')
        }
        if(!this.apiKey){
          throw Error('interpretation-player: apiKey is not defined')
        }
        const InterpretationPlayer = (await import('/Users/romain/Desktop/Projects/Akkadu/rsi-api-widget/rsi-api-widget/modules/rsi-api-interpretation-player')).default // @akkadu/rsi-api-interpretation-player
        const config = {apiKey:this.apiKey, roomName, container:'akkadu-interpretation-player', positionMenu:this.positionMenu}
        this.stream = new InterpretationPlayer(config);
        this.initListeners()
        this.stream.init()
      },
      getRoomname(){
        return 'test'
      },
      initListeners(){
        this.stream.on('interpretation-player:on-ready', ({ isReady }) => {
          console.info('interpretation-player:on-ready', isReady);
        })
          this.stream.on('interpretation-player:on-language-selected', ({ languageSelected }) => {
          console.info('interpretation-player:on-language-selected', languageSelected);
        })
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>


