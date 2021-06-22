import RSIBase from '@akkadu/rsi-base'
import {  languagesList } from './languages'
/* import Logger from '@akkadu/logger' */
export default class InterpretationManager extends RSIBase {
  apiKey: string; 
  $logger: any;
  container: string;
  domContainer: any;
  constructor( apiKey:string ) {
    super()
    this.apiKey = apiKey;
    this.container = 'akkadu-interpretation-manager'
    if(!document){ 
      throw Error('InterpretationManager: document is undefined.');
      return
    }
    if(!this.apiKey){
      throw Error('InterpretationPlayer: apiKey is undefined')
    }
    this.domContainer = document.querySelector(`#${this.container}`)
    if (!this.domContainer) {
      throw new Error(`Unable to detect container: ${this.container} on the DOM, please add <div id="akkadu-interpretation-manager"/>, 
      see the doc : https://rsi-docs.akkadu.com/getting-started/react.html#registering-the-interpretation-manager`)
    }
  }
  async init(){
    this.addInterpretationManager()
  }
  selectLanguage(language){
    console.log('selected new language');
  }
  addInterpretationManager(){
    console.log('mounted???');
    /** * @description widget: {html:string, css:string} */
    const widget = require('../lib/widget-component.js').default 
    this.domContainer.insertAdjacentHTML( 'beforeend', widget.html); 
    // Add Styles to the DOM
    var style = document.createElement('style');
    style.textContent =  widget.css;
    document.head.appendChild(style);

    const languagesOptions = document.createDocumentFragment();
    const createItemLanguage =(language:any, index:number) => {
      let newOption : any
      let newImage : any
      let newText : any
      
      newOption = document.createElement('div');
      newOption.className = 'selectCustom-option';
      newOption.id = index
      newOption.onclick = () => { this.selectLanguage(language) }; 
      newText = document.createElement('h3');
      newText.textContent= language.name.en;
      newText.id = index;

      newImage = document.createElement('img')
      newImage.src = this.getFlagUrl(language.code);
      newOption.appendChild(newImage);
      newOption.appendChild(newText);
      return newOption
    } 
    let i = 0;
    languagesList.forEach(language => {
      languagesOptions.appendChild(createItemLanguage(language, i )); 
      i++
    });
    document.getElementById('interpretation-manager-options')!.appendChild(languagesOptions);

    // Init Dropdown header
    const elSelectCustom : any = document.getElementsByClassName("js-selectCustom")[0];
    const elSelectCustomValue : any = document.getElementById('interpretation-manager-custom-value')
    elSelectCustomValue.getElementsByTagName("h3")[0].textContent = 'Select a language';

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


}