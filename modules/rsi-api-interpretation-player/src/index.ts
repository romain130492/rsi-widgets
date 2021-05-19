
/* import RSIBase from '@akkadu/rsi-api-base' */
import RSIBase from '/Users/romain/Desktop/Projects/Akkadu/rsi-api-widget/rsi-api-widget/modules/rsi-api-base'
/* var html = require('/Users/romain/Desktop/Projects/Akkadu/rsi-api-widget/rsi-api-widget/modules/rsi-api-interpretation-player/src/widget-component.html').default */


const defaultConsumerConfig = {
  languages:[],
  container:null,
}

export default class InterpretationPlayer extends RSIBase {
  apiKey: string;
  roomName: string;
  consumerConfig: any;

  constructor(config:{apiKey: string, roomName: string, container:string }) {
    super();
    const { apiKey, roomName, container } = config;
    this.apiKey = apiKey;
    this.roomName = roomName;
    this.consumerConfig = defaultConsumerConfig
    this.consumerConfig.container = container;
    this.consumerConfig.domContainer = document.querySelector(`#${this.consumerConfig.container}`)
    console.log(this.consumerConfig.container ,'this.consumerConfig.container ');
    console.log(this.consumerConfig.domContainer ,'this.consumerConfig.domContainer ');
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
    /**
     * @description widget: {html:string, css:string}
     */
    const widget = require('../lib/widget-component.js').default 
    // Add Html to the Dom
    this.consumerConfig.domContainer.insertAdjacentHTML( 'beforeend', widget.html); 
    // Add Styles to the Dom
    var style = document.createElement('style');
    style.textContent =  widget.css;
    document.head.appendChild(style);

    // Add Script to the Dom
    const languagesList = [{iso:'us', name:'english'}, {iso:'es', name:'spanish'}, {iso:'cn', name:'chinese'},] // to update with the list of languages
    const languagesOptions = document.createDocumentFragment();
     for(let i=0; i < languagesList.length; i++){
       let newOption : any
       let newImage : any
       let newText : any
       newOption = document.createElement('div');
       newOption.className = 'selectCustom-option';
       newOption.id = i;

       newText = document.createElement('h3');
       newText.textContent= languagesList[i].name;

       newImage = document.createElement('img')
       // Api to get the flags icons: https://www.countryflags.io/ 
       newImage.src = this.getFlagUrl(languagesList[i].iso);


       newOption.appendChild(newImage);
       newOption.appendChild(newText);

       languagesOptions.appendChild(newOption);
     }
     document.getElementById('interpretation-player-options').appendChild(languagesOptions);

    var script = document.createElement('script');
    script.textContent = widget.js;
    document.body.appendChild(script);


const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
const elSelectCustomValue = document.getElementById('interpretation-player-custom-value')
const elSelectCustomOptions = document.getElementById('interpretation-player-options')
elSelectCustomValue.getElementsByTagName("h3")[0].textContent = languagesList[0].name
elSelectCustomValue.getElementsByTagName("img")[0].src = this.getFlagUrl(languagesList[0].iso)





// Listen for each custom option click
let that = this;
Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
  elOption.addEventListener("click", (e) => {
    // Update custom select text 
    let languageSelected:string;
    let idOption = e.target.id;
    languageSelected = languagesList[idOption];

    elSelectCustomValue.getElementsByTagName("h3")[0].textContent = languageSelected.name;
    elSelectCustomValue.getElementsByTagName("img")[0].src = that.getFlagUrl(languageSelected.iso) 
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

// prop for position box 
// 6px -1px 8px 1px #e3e3e3 !important
//    bottom: 55px; top 0px  for .selectCustom-options
  }

  getFlagUrl(iso){
    return `https://www.countryflags.io/${iso}/flat/64.png` 
  }
}
