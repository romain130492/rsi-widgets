




import RSIBase from '@akkadu/rsi-base'
import {  languagesList } from './languages'
/* import Logger from '@akkadu/logger' */

export default class InterpretationManager extends RSIBase {
  apiKey: string; 
  $logger: any;
  container: string;
  domContainer: any;
  eventLanguage: any;
  buttonAddLanguage: any;
  languageSelectorInterpretation: any;
  isSelectorInterpretationLanguage:boolean;
  isAddLanguageButtonOn : boolean;
  interpretationLanguages : Array<any>;
  constructor( apiKey:string ) {
    super()
    this.apiKey = apiKey;
    this.container = 'akkadu-interpretation-manager'
    this.isSelectorInterpretationLanguage = false;
    this.buttonAddLanguage = null;
    this.languageSelectorInterpretation = null;
    this.isAddLanguageButtonOn = true;
    this.interpretationLanguages = [];
    if(!document){ 
      throw Error('InterpretationManager: document is undefined.');
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

  /**
   * @description Call when the user selects a language from the dropdown "Event Languages:""
   */
  selectEventLanguage(language:any){
    console.info('selected new language:', language);
    this.eventLanguage = language;
  }
  selectInterpretationLanguage(language:any){
    console.info('selected new interpretation language:', language);
  }

  /**
   * @description Add the base which is the Html and Css of the widget-components.ts
   */
  setUpBaseInterpretationManager(){
    /** * @description widget: {html:string, css:string} */
    const widget = require('../lib/widget-component.js').default 
    this.domContainer.insertAdjacentHTML( 'beforeend', widget.html); 
    // Add Styles to the DOM
    var style = document.createElement('style');
    style.textContent =  widget.css;
    document.head.appendChild(style);
  }

  /**
   * @description Take care of the interpretation Event Languages section of the interpretation manager
   */
  handleEventLanguagesSection(){
    this.generateLanguageSelector('int-manager-event-language-selector','event-language')
  }

  /**
   * @description Take care of the interpretation language section of the interpretation manager
   */
  handleInterpretationLanguagesSection(){
    this.generateLanguageSelector('int-manager-interpretation-language-selector','interpretation-language')
    const interpretationWrapper: any  = document.querySelector(`#int-manager-interpretation-wrapper`);

    this.buttonAddLanguage = interpretationWrapper.getElementsByTagName('button')[0];
    this.languageSelectorInterpretation = document.querySelector('#int-manager-interpretation-language-selector');
    this.buttonAddLanguage.addEventListener("click", (e:any) => {
      this.isAddLanguageButtonOn =! this.isAddLanguageButtonOn
      this.switchBetweenButtonAndSelector(this.isAddLanguageButtonOn)
    })
  }
  addLanguageToInterpretation(language:any){
    const generateLanguageLabel  = (language:any) => {
      const label = document.createElement('div');
      label.className = 'int-manager-label-language';
      label.id = `int-manager-${language.code}`;
      const newText =  document.createElement('h3');
      newText.textContent= language.name.en;
      const cross =  document.createElement('span');
      cross.className = 'cross'
      cross.textContent= 'x'
      cross.onclick = () => { 
        this.deleteLanguageLabel(language)
      }
      const labelImage = document.createElement('img')
      labelImage.src = this.getFlagUrl(language.code);
      label.appendChild(labelImage);
      label.appendChild(newText);
      label.appendChild(cross);
      return label;
    }
    if(!this.interpretationLanguages.includes(language)){
      this.interpretationLanguages.push(language);
      const label = generateLanguageLabel(language);
      const rowLanguage = document.querySelector(`#int-manager-row-language`);
      rowLanguage.appendChild(label) 
    }
  }

  deleteLanguageLabel(language:any){
    try {
      this.interpretationLanguages = this.interpretationLanguages.filter(function(language){
        return language.code !== language.code;
      });
      let node:any = document.getElementById(`int-manager-${language.code}`);
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    } catch (err) {
      throw Error(`interpretationManager: deleteLanguageLabel() error ${err}`);
    }
  }
  /**
   * @description Switch between the "Add Language button" and the "language selector"
   * For the Interpretation Language Section.
   */
  switchBetweenButtonAndSelector(isAddLanguageButtonOn:boolean){
    if(isAddLanguageButtonOn){
      // We hide the language Selector and show the button.
      this.buttonAddLanguage.classList.remove('undisplay');
      this.languageSelectorInterpretation.classList.add('undisplay');
    } else{
      // We hide the button and show the language selector.
      this.buttonAddLanguage.classList.add('undisplay');
      this.languageSelectorInterpretation.classList.remove('undisplay');
    }
  }

  addToDomLanguageSelectorBase(divIdTarget:string, id:string){
  const divElement = `<div class="select">
                        <div class="selectWrapper">
                          <div  class="selectCustom js-selectCustom js-selectCustom-${id}" >
                            <div id="int-manager-custom-value" class="selectCustom-trigger int-manager-custom-value-${id}">  <img src=''/> <h3></h3> </div>
                            <div id="int-manager-options" class="selectCustom-options int-manager-options-${id}"/>
                          </div>
                        </div>
                    </div>`
    const languageSelector : any = document.querySelector(`#${divIdTarget}`)
    languageSelector.insertAdjacentHTML( 'afterbegin', divElement ); 
  }

  /**
   * @description Create a language select tag
   * It generates the languages options + flags based on the "languagesList"
   */
  generateLanguageSelector(divTarget:string, id:string){
    const closeSelector = (elSelectCustom:any) =>{
      elSelectCustom.classList.remove("isActive");
    }
    const updateHeader = (selectorHeader:any, newLanguage:any) => {
      if(newLanguage){
        const newLanguageName = newLanguage.name.en;
        selectorHeader.getElementsByTagName("h3")[0].textContent = newLanguageName;
        const image = selectorHeader.getElementsByTagName('img')[0]
        image.src = this.getFlagUrl(newLanguage.code);
      }else{
        selectorHeader.getElementsByTagName("h3")[0].textContent = "Select a language"
      }
    }
    // Language Selector
    this.addToDomLanguageSelectorBase(divTarget, id)

     // Init Dropdown header
    const elSelectCustom : any = document.getElementsByClassName(`js-selectCustom-${id}`)[0];
    const selectorHeader : any = document.getElementsByClassName(`int-manager-custom-value-${id}`)[0]
    selectorHeader.getElementsByTagName("h3")[0].textContent = 'Select a language';


    // Languages Options
    const languagesOptions = document.createDocumentFragment();
    const createItemLanguage = (language:any, index:number) => {
      let newOption : any
      let newImage : any
      let newText : any
      
      newOption = document.createElement('div');
      newOption.className = 'selectCustom-option';
      newOption.id = index
      if(id === 'event-language'){
        newOption.onclick = () => { this.selectEventLanguage(language), closeSelector(elSelectCustom), updateHeader(selectorHeader,language) }; 
      } else if(id === 'interpretation-language'){
        newOption.onclick = () => { 
          this.selectInterpretationLanguage(language),
          closeSelector(elSelectCustom), 
          updateHeader(selectorHeader, null)
          this.isAddLanguageButtonOn = true;
          this.addLanguageToInterpretation(language)
          this.switchBetweenButtonAndSelector(this.isAddLanguageButtonOn)
         }; 
      }
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
    document.getElementsByClassName(`int-manager-options-${id}`)[0]!.appendChild(languagesOptions);
    

    // Listeners Languages Selector
      // Toggle select on label click
    selectorHeader.addEventListener("click", (e:any) => {
      elSelectCustom.classList.toggle("isActive");
    });
    // Close the language selector when clicking outside.
    document.addEventListener("click", (e:any) => {
      const didClickedOutside = !elSelectCustom.contains(e.target);
      if (didClickedOutside) {
        closeSelector(elSelectCustom)
      }
    });

    // Listeners Languages Options

  }

  /**
   * @description Add the interpretation Manager to the dom on the ID #akkadu-interpretation-manager
   */
  addInterpretationManager(){
    this.setUpBaseInterpretationManager()
    this.handleEventLanguagesSection()
    this.handleInterpretationLanguagesSection()
  }
}

