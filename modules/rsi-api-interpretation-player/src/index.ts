import RSIBase from '@akkadu/rsi-api-base'

const defaultConsumerConfig = {
  languages:[],
  container:null,
}

export default class InterpretationPlayer extends RSIBase {
  apiKey: string;
  roomName: string;
  consumerConfig: any;
  positionMenu: string;
  isBoxShadow : boolean;

  constructor(config:{apiKey: string, roomName: string, container:string, positionMenu:string, isBoxShadow:boolean }) {
    super();
    const { apiKey, roomName, container, positionMenu, isBoxShadow } = config;
    this.apiKey = apiKey;
    this.roomName = roomName;
    this.positionMenu = positionMenu;
    this.isBoxShadow = isBoxShadow;
    this.consumerConfig = defaultConsumerConfig
    this.consumerConfig.container = container;
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
    const gatewayReponse = /* await */ this.gatewayRequest(this.apiKey, this.roomName);
    this.initListeners();
    this.addInterpretationPlayer();
  }
  initListeners() {
    //
  }
  /**
   * @description add the interpretation player to the dom "#akkadu-interpretation-player"
   * @private
   */
  addInterpretationPlayer() {
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

    // Add Script to the DOM
      // to update with the list of languages
    const languagesList =   [ {
      name: { en: 'English', zh: '英语' },
      code: 'en-US',
    },{
      name: { en: 'Chinese', zh: '中文' },
      code: 'zh-CN',
    }];
  
    const languagesOptions = document.createDocumentFragment();
     for(let i=0; i < languagesList.length; i++){
       let newOption : any
       let newImage : any
       let newText : any
       newOption = document.createElement('div');
       newOption.className = 'selectCustom-option';
       newOption.id = i;

       newText = document.createElement('h3');
       newText.textContent= languagesList[i].name.en;
       newText.id = i;

       newImage = document.createElement('img')
       newImage.src = this.getFlagUrl(languagesList[i].code);

       newOption.appendChild(newImage);
       newOption.appendChild(newText);

       languagesOptions.appendChild(newOption);
     }
     document.getElementById('interpretation-player-options').appendChild(languagesOptions);
    var script = document.createElement('script');
    script.textContent = widget.js;
    document.body.appendChild(script);

     // interpretation-player-custom-value
    const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
    const elSelectCustomValue = document.getElementById('interpretation-player-custom-value')
    const elSelectCustomOptions = document.getElementById('interpretation-player-options')
    elSelectCustomValue.getElementsByTagName("h3")[0].textContent = languagesList[0].name.en
    elSelectCustomValue.getElementsByTagName("img")[0].src = this.getFlagUrl(languagesList[0].code)


    // Listen for each custom language option selected
    let that = this;
    Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
        // Update custom select text 
        let languageSelected:string;
        let idOption = e.target.id;
        languageSelected = languagesList[idOption];

        elSelectCustomValue.getElementsByTagName("h3")[0].textContent = languageSelected.name.en;
        elSelectCustomValue.getElementsByTagName("img")[0].src = that.getFlagUrl(languageSelected.code) 
        that.emitter.emit('interpretation-player:on-language-selected', { languageSelected });
        // Close select
        elSelectCustom.classList.remove("isActive");
      });
    });

    // Toggle select on label click
    elSelectCustomValue.addEventListener("click", (e) => {
      elSelectCustom.classList.toggle("isActive");
    });

    // close the custom select when clicking outside.
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectCustom.contains(event.target);
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
    const iso  = code.slice(-2);
    return `https://www.countryflags.io/${iso}/flat/64.png` 
  }
}
