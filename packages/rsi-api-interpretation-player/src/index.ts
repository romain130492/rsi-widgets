import RSIBase from '@akkadu/rsi-api-base'
import Logger from '@akkadu/logger'
import {  sourceLanguageList,  targetLanguageList } from './languages'
const defaultConsumerConfig = {
  languages:[],
  container:null,
}
interface CurrentSubscription {
  type: string,
  isPlay: boolean;
  language: string
}

export default class InterpretationPlayer extends RSIBase {
  apiKey: string;
  roomName: string;
  gatewayResponse: any;
  consumerConfig: any;
  positionMenu: string;
  isBoxShadow : boolean;
  isPlayerControlled : boolean;
  stream : any;
  languageState: string;
  rtcActive : boolean;
  rtcOnline : boolean;
  $logger: any;
  currentSubscription: CurrentSubscription;
  rtmActive: boolean;
  remoteLanguageState: string;
  isOriginalLanguage: boolean;
  eventLanguages: Array<{ eventId:string, id:string,interpreterId:string,interpreterLevel:number, sourceLanguage: boolean, interpreterNeeded:boolean, language:string, userId:string }>

  constructor(config:{apiKey: string, roomName: string, container:string, positionMenu:string, isBoxShadow:boolean, isPlayerControlled:boolean }) {
    super();
    const { apiKey, roomName, container, positionMenu, isBoxShadow, isPlayerControlled } = config;
    this.apiKey = apiKey;
    this.roomName = roomName;
    this.positionMenu = positionMenu;
    this.isBoxShadow = isBoxShadow;
    this.isPlayerControlled = isPlayerControlled;
    this.consumerConfig = defaultConsumerConfig
    this.consumerConfig.container = container;
    this.gatewayResponse = null;
    this.stream = null;
    this.rtcActive = false;
    this.rtcOnline = false;
    this.rtmActive = false;
    this.languageState = '';
    this.remoteLanguageState = '';
    this.currentSubscription = { type:'', isPlay:false, language:'' },
    this.isOriginalLanguage = false;
    this.eventLanguages = null;

    this.$logger = new Logger()
    if(!document){ 
      console.error('InterpretationPlayer: .document is undefined.');
      return
    }
    this.consumerConfig.domContainer = document.querySelector(`#${this.consumerConfig.container}`)
    if (!this.apiKey) {
      throw Error('InterpretationPlayer: apiKey is undefined');
    }
    if (!this.roomName) {
      throw Error('InterpretationPlayer: roomName is undefined');
    }
    if (!this.consumerConfig.domContainer) {
      throw new Error(`Unable to detect stream container ${this.consumerConfig.container} on the DOM`)
    }
  }
  async init() {
    this.gatewayResponse = /* await */ await this.gatewayRequest(this.apiKey, this.roomName);
    const { stream, languageState, eventLanguages } = this.gatewayResponse;
    if(!stream){
      console.error('interpretation-player: init(): stream is null')
      return
    }
    if(!eventLanguages){
      console.error('interpretation-player: init(): eventLanguage is null')
      return
    }

    console.log('init now????',stream);
    this.languageState = languageState;
    this.eventLanguages = eventLanguages;
    console.log('init????222255ff5');
    stream.container = 'akkadu-interpretation-player'
    stream.assetsUrl = 'https://akkaducloud-production.s3.cn-north-1.amazonaws.com.cn'
    stream.asmPath = '/streaming/AgoraRTS.asm'
    stream.wasmPath ='/streaming/AgoraRTS.wasm'
    // might be because i didnt add the @akkadulogger so we get an error and no .on
    this.stream = stream;
    const RTCStreamerConsumer = await require('../dist/index.js').default

    console.log(RTCStreamerConsumer,'Akkadu Akk222ad000777770fffstream');
    this.stream = new RTCStreamerConsumer({stream:this.stream}) 
    console.log(this.stream,'THE STREAM????');
    this.initListeners();
    this.addInterpretationPlayer();
  }

/*   isInterpretedLanguage(languageCode:any){
    console.log(languageCode);
     if(this.gatewayResponse?.floorLang === language?.code){
      return false
    } 
    return true
  } */
/**
 * @description We mute/unmute the video player of the Virtual Platform
 * That method go through only if isPlayerControlled is true
 * Additionnal info about that parameter here : https://rsi-akkadu-documentation.netlify.app//interpretation-player/props.html
 * @private
 */
  switchAudioVideoPlayerVP(isMuted:boolean=false){
    if(!this.isPlayerControlled){
      return
    }
    const videoPlayerVP = this.getVideoPlayerVP()
    console.info(videoPlayerVP,'videoPlayerVP11');
    if(!videoPlayerVP){ 
      console.warn('switchAudioVideoPlayerVP(): videoPlayerVP is not defined.');
      return
     }
     Array.from(videoPlayerVP).forEach(function (video) {
       video.muted = isMuted
    });
  }
  /**
   * @description Get the video player of the Virtual Platform page
   * @private
   */
  getVideoPlayerVP(){
    if(!document){
      console.warn('getVideoPlayerVP(), document is not defined');
      return
    }
    return document.getElementsByTagName('video');
  }
  
  
  initListeners() {
    this.stream.on('error',(err) => {
      console.error('error:', err)
    })
    this.stream.on('warn',(warning) => {
      console.warn(warning)
    })
    this.stream.on('connection-status',(msg) => {
      console.log(msg,'msggg');
      const { id } = msg
      switch (id) {
        case 'connection-active':
          this.rtcActive = true
          this.rtcOnline = true
          break
        case 'connection-offline':
          this.rtcOnline = false
          break
        case 'connection-online':
          this.rtcActive = true
          break
        default:
          this.$logger.warn('Connection message without handler', msg)
      }
    })
   this.stream.messenger.on('rtm:online', ({ newState, reason }) => {
      console.info('Rtm is online')
      this.rtmActive = true
    })

    this.stream.messenger.on('rtm:offline', ({ newState, reason }) => {
      console.info('Rtm is offline')
      this.rtmActive = false
    })

    this.stream.messenger.on('rtm:channel-message', ({ payload, senderId }) => {
      const { id, text } = payload
      switch (id) {
        case 'languageStateChanged':
          this.remoteLanguageState = text.languageState
         // this.subscribeLanguageByLanguageState(text.languageState, this.currentSubscription.isPlay)
          break
      }
    })  

    this.stream.on('consumer:subscribed-language', ( { language, publishers, autoPlay, playAudio, playVideo, subscribeToAudio, subscribeToVideo } ) => {
      console.info('Start subscription to a language channel')
      this.currentSubscription.isPlay = true
      //this.streamHasBeenRefreshed()
    })
    this.stream.on('consumer:playing-language', () => {
      console.info('Currently played subscription', this.currentSubscription)
      this.currentSubscription.isPlay = true
      //this.streamHasBeenRefreshed()
    })
    this.stream.on('consumer:stopped-language', (language) => {
      console.info('Subscription was stopped', this.currentSubscription)
      this.currentSubscription.isPlay = false
    })

    this.stream.on('consumer:unmuted-language', (language, video, audio) => {
      console.info('consumer:unmuted-language', this.currentSubscription)
      this.currentSubscription.isPlay = true
      //this.streamHasBeenRefreshed()
    })

    this.stream.on('consumer:muted-language', (language, video, audio) => {
      console.info('consumer:muted-language', this.currentSubscription)
      this.currentSubscription.isPlay = false
    })

    this.stream.on('consumer:stream-stuck',({ domId, language }) => {
      this.$logger.info(`Stream reported stuck! ${domId} and language ${language}`)
      const currentSubscription = Object.assign({}, this.currentSubscription)
      currentSubscription.isPlay = false
      this.currentSubscription = currentSubscription
      //this.refresh = true
    })

    this.stream.on('support', (msg) => {
      if (msg.id?.includes('browser-not-detected')) {
        this.$logger.info('WebRTC not supported')
        // this.recommendBrowser = true add this feature later on : to display a pop up if the browser is not recommanded
      }
    })
    //
  }

  


  /**
   * @description add the interpretation player to the dom "#akkadu-interpretation-player"
   * @private
   */
  addInterpretationPlayer() {
    if(!this.stream){
      console.error('addInterpretationPlayer(): this.stream is null.')
      return
    }
    this.emitter.emit('interpretation-player:on-ready', { isReady:true });

    /** * @description widget: {html:string, css:string} */
    const widget = require('../lib/widget-component.js').default 

    // Add Html to the DOM
    this.consumerConfig.domContainer.insertAdjacentHTML( 'beforeend', widget.html); 

    // Add Styles to the DOM
    var style = document.createElement('style');
    style.textContent =  widget.css;
    document.head.appendChild(style);
    const styleStr = this.updateStylesWithProps()
    if(styleStr){
      var styleProp = document.createElement('style');
      styleProp.textContent =  styleStr
      document.head.appendChild(styleProp);
    }
    interface LanguagesList {
       name: { en: string; zh: string; }
       code: string;
    }
    // Add Script to the DOM
      // to update with the list of languages
    const languagesList : Array<LanguagesList> =   [ {
      name: { en: 'English', zh: '英语' },
      code: 'en-US',
    },{
      name: { en: 'Chinese', zh: '中文' },
      code: 'zh-CN',
    }];
  
    const languagesOptions = document.createDocumentFragment();
console.log('????????????');
    const createItemLanguage =(languageType:string, index:number) => {
      console.log(languageType,'languageTypelanguageType');
      let newOption : any
      let newImage : any
      let newText : any
      
      newOption = document.createElement('div');
      newOption.className = 'selectCustom-option';
      newOption.id = index
      newOption.onclick = () => {  handleLanguageChange(languageType, index) }; 
      newText = document.createElement('h3');
      newText.textContent= this.langChannels()[languageType].name.en;
      newText.id = index;

      newImage = document.createElement('img')
      newImage.src = this.getFlagUrl(this.langChannels()[languageType].code);

      newOption.appendChild(newImage);
      newOption.appendChild(newText);
      console.log(newOption,'newOptionnewOption');
      return newOption
    } 
    languagesOptions.appendChild(createItemLanguage('source', 0));
    languagesOptions.appendChild(createItemLanguage('target', 1)); 
  
    document.getElementById('interpretation-player-options')!.appendChild(languagesOptions);
    var script = document.createElement('script');
    script.textContent = widget.js;
    document.body.appendChild(script);

     // interpretation-player-custom-value
    const elSelectCustom : any = document.getElementsByClassName("js-selectCustom")[0];
    const elSelectCustomValue : any = document.getElementById('interpretation-player-custom-value')
    const elSelectCustomOptions : any = document.getElementById('interpretation-player-options')
    this.isOriginalLanguage = true;
    elSelectCustomValue.getElementsByTagName("h3")[0].textContent = this.langChannels()['source'].name.en;
    elSelectCustomValue.getElementsByTagName("img")[0].src = this.getFlagUrl(this.langChannels()['source'].code)



    /**
     * @description subscribe to language based on remote language state if remote langauge state is not set
     *  it will use default source and target base on the value we pass as type.
     * @param {String} type Example : 'source' or 'target' - no effect if remoteLanguageState is set
     */
    const handleLanguageChange = async (type) =>{
      const handlePlayer = (languageType) =>{ 
        elSelectCustomValue.getElementsByTagName("h3")[0].textContent = this.langChannels()[languageType].name.en;
        elSelectCustomValue.getElementsByTagName("img")[0].src = this.getFlagUrl(this.langChannels()[languageType].code) 
        // UDPATE IS ORIGINAL LANGUAGE HERE ACCORDING whether we are selecting target or origin   this.isOriginalLanguage:null,
        this.emitter.emit('interpretation-player:on-language-selected', { languageSelected:this.langChannels()[languageType] });
        const isTarget = languageType === 'target' ? true : false;
        this.isOriginalLanguage = languageType === 'source' ? true : false; // to double check if i should set up the isOriginalLanguage in this way
        this.switchAudioVideoPlayerVP(isTarget)
      }

      if (this.remoteLanguageState) {
        handlePlayer(this.remoteLanguageState)
        await this.subscribeLanguageByLanguageState(this.remoteLanguageState)
      } else if (type) {
        handlePlayer(type)
        await this.switchLanguageToSubscribe(type)
      } else {
        this.$logger.error('handleLanguageChange', 'Please make sure remoteLanguageState is not null/empty or at least  type is provided!')
      }

        // Close select
        elSelectCustom.classList.remove("isActive");
    }

    // Toggle select on label click
    elSelectCustomValue.addEventListener("click", (e:any) => {
      elSelectCustom.classList.toggle("isActive");
    });

    // close the custom select when clicking outside.
    document.addEventListener("click", (e:any) => {
      const didClickedOutside = !elSelectCustom.contains(e.target);
      if (didClickedOutside) {
        elSelectCustom.classList.remove("isActive");
      }
    });

  }

  updateStylesWithProps(){
    let stylesStr;
    const styles = []
    if(this.positionMenu === 'top'){
      const style = `.selectCustom-options{
        box-shadow:6px -1px 8px 1px #e3e3e3 !important;
        top: -130px !important;
      }`
      styles.push(style)
    }
    if(this.isBoxShadow === false){
      const style = `
      #akkadu-interpretation-player .selectCustom-options{
        box-shadow:none !important;
      }`
      styles.push(style)
    }
   stylesStr = styles.join(' ')
   return stylesStr
  }

  // Api to get the flags icons: https://www.countryflags.io/ 
  getFlagUrl(code:string){
    console.log('?????????????');
    const iso  = code.slice(-2);
    return `https://www.countryflags.io/${iso}/flat/64.png` 
  }




  // Language Channels Methods:

    /**
     * @description this method will subcribe to appropriate language stream based on the languageState we pass
     */
     async subscribeLanguageByLanguageState(languageState, shouldPlay = true) {
      const { source, target } = this.langChannels()
      let languageType = ''
      if (this.isOriginalLanguage && languageState === source.code) {
        languageType = 'target'
      } else if (this.isOriginalLanguage && languageState === target.code) {
        languageType = 'source'
      } else if (!this.isOriginalLanguage && languageState === source.code) {
        languageType = 'source'
      } else if (!this.isOriginalLanguage && languageState === target.code) {
        languageType = 'target'
      }
      console.log(languageType,'languageType here');
      if (languageType) {
        await this.switchLanguageToSubscribe(languageType, shouldPlay)
      }
    };

 

  langChannels() {
    const source = this.floorLanguage().language
    const target = this.interpretingLanguage().language;
    console.log(source,target,'source and target');
    return {
      source: sourceLanguageList.find(item => item.code === source),
      target: targetLanguageList.find(item => item.code === target)
    }
  }
  floorLanguage() {
    return this.eventLanguages.find(
      language =>  (
        language.sourceLanguage === true
      )
    )
  };
  interpretingLanguage() {
    const interpretingLanguage = this.eventLanguages.find(
      language =>  (
        language.sourceLanguage === false &&
        /**
         * Interpreting languages that are assigned to
         * an interpreter have an `interpreterId` of type
         * 'number'
         */
        typeof language.interpreterId === 'number'
      )
    )
    console.log(interpretingLanguage,'interpretingLanguageinterpretingLanguage');

    // If an event has no interpretation language
    if (!interpretingLanguage) {
      return {
        language: ''
      }
    }
    return interpretingLanguage
  };

     /**
   * @description switch between languages to listen: source Language & target language
   * @param {String} newLanguageType Example : 'source'
   */
      switchLanguageToSubscribe(newLanguageType, shouldPlay = true) {
        console.log(newLanguageType,'newLanguageType,newLanguageType,');
        this.stream.unmuteLanguage({ language: 'zh-CN', audio: true })
        return
        if (this.currentSubscription.type !== newLanguageType) {
          const previousLanguage = this.currentSubscription.language
          if (newLanguageType === 'source' ) {
            this.currentSubscription.language = this.floorLanguage().language
          } else {
            this.currentSubscription.language = this.interpretingLanguage().language
          }
          this.currentSubscription.type = newLanguageType
          this.currentSubscription.isPlay = false
          if (previousLanguage) {
            this.stream.muteLanguage({ language: previousLanguage, audio:true })
          }
          if (shouldPlay) {
            this.stream.unmuteLanguage({ language: this.currentSubscription.language, audio: true })
          }
        }
     };

  /**
     * @description subscribe to language based on remote language state if remote langauge state is not set
     *  it will use default source and target base on the value we pass as type.
     * @param {String} type Example : 'source' or 'target' - no effect if remoteLanguageState is set
     */
    async handleLanguageChange(type) {
      if (this.remoteLanguageState) {
        await this.subscribeLanguageByLanguageState(this.remoteLanguageState)
      } else if (type) {
        await this.switchLanguageToSubscribe(type)
      } else {
        this.$logger.error('handleLanguageChange', 'Please make sure remoteLanguageState is not null/empty or at least  type is provided!')
      }
    };

}
