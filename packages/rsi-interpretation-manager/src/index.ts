import RSIBase from '@akkadu/rsi-base'
import {  languagesList } from './languages'

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
  ownInterpreterEmail : any;
  interpreterRadio: string;
  constructor( apiKey:string ) {
    super()
    this.apiKey = apiKey;
    this.container = 'akkadu-interpretation-manager'
    this.isSelectorInterpretationLanguage = false;
    this.buttonAddLanguage = null;
    this.languageSelectorInterpretation = null;
    this.isAddLanguageButtonOn = true;
    this.interpretationLanguages = [];
    this.ownInterpreterEmail = {};
    this.interpreterRadio = "need-interpreter";
    if(!document){ 
      throw Error('InterpretationManager: document is undefined.');
    }
    if(!this.apiKey){
      throw Error('InterpretationPlayer: apiKey is undefined')
    }
    this.domContainer = document.querySelector(`#${this.container}`)
    if (!this.domContainer) {
      throw Error(`Unable to detect container: ${this.container} on the DOM, please add <div id="akkadu-interpretation-manager"/>, 
      see the doc : https://rsi-docs.akkadu.com/getting-started/react.html#registering-the-interpretation-manager`)
    }
  }
  async init(){
    console.log('i00011');
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
    let style = document.createElement('style');
    //style.setAttribute('scoped', 'true');,
    style.textContent =  widget.css;
    document.getElementById(this.container).appendChild(style); 
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
      this.updateFeedback('')
      this.isAddLanguageButtonOn =! this.isAddLanguageButtonOn
      this.switchBetweenButtonAndSelector(this.isAddLanguageButtonOn)
    })
  }
  /**
   * @description When the user select a language, we add that language to the "interpretationLanguages" array
   * We also create a language label.
   */
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
      const rowLanguage: any = document.querySelector(`#int-manager-row-language`);
      rowLanguage.appendChild(label) 
    }
  }

  /**
   * @description On click, the user can delete a language label
   */
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
                        <div class="select-wrapper">
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
      this.updateFeedback('')
      elSelectCustom.classList.toggle("isActive");
    });
    // Close the language selector when clicking outside.
    document.addEventListener("click", (e:any) => {
      const didClickedOutside = !elSelectCustom.contains(e.target);
      if (didClickedOutside) {
        closeSelector(elSelectCustom)
      }
    });
  }
  /**
   * @description Fire when the user input an email in the email-box
   * It updated the array ownInterpreterEmail
   */
  updateInterpretersEmail = (e:any) => {
    this.updateFeedback('')
    const value = e.target.value;
    const id = e.target.id;
    this.ownInterpreterEmail[id] = value;

  }

  /**
   * @description Handle the section "Add an interpreter"
   */
  handleAddInterpreter(){
    this.addNewEmailBox() // we add one email-box on init
    const buttonAddInterpreter: any = document!.querySelector(`#int-add-interpreter`);
    buttonAddInterpreter.addEventListener("click", (e:any) => {
      this.updateFeedback('')
      this.addNewEmailBox()
    });
  }

  /**
   * @description Add a new email box in the div #int-wrapper-email-box
   */
  addNewEmailBox(){
    const id = Object.keys(this.ownInterpreterEmail).length +1;
    const emailDiv = document.createElement('div');
    emailDiv.id = `int-manager-email-div-${id}`
    const emailInput :any = document.createElement('input');
    emailInput.placeholder = "interpreter@gmail.com";
    emailInput.className = "email-box";
    emailInput.id = id;
    emailInput.addEventListener('input', this.updateInterpretersEmail )
    const closeButton :any = document.createElement('span');
    closeButton.textContent = 'x'
    closeButton.className = 'delete-button'
    closeButton.id = id;
    closeButton.addEventListener('click', (e:any) => {
      let node:any = document.getElementById(`int-manager-email-div-${id}`);
      node.parentNode.removeChild(node);
    } )
    emailDiv.append(emailInput)
    emailDiv.append(closeButton)
    document.querySelector('#int-wrapper-email-box')?.appendChild(emailDiv)
  }

  switchManageInterpreterPopUp(){
    console.info('switch ManageInterpreter Pop Up');
  }

  
  handleManageInterpreter(){
    // manage-interpreter
    const manageInterpreterButton : any = document.querySelector('#manage-interpreter');
    manageInterpreterButton.addEventListener('click', this.switchManageInterpreterPopUp )

    document.querySelectorAll("input[name='int-interpreter-radio']").forEach((input) => {
      input.addEventListener("change", (e:any) => { 
        this.updateFeedback('')
        this.interpreterRadio = e.target.id;
        console.info('interpreterRadio:', e.target.id );
      });
  });
  }

  /**
   * @description Update the feedback <p>  #int-manager-feedback
   */
  updateFeedback(msg:string){
    const feedback : any = document.querySelector('#int-manager-feedback');
    feedback.innerHTML = msg;
  }

  validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  handleValidation(){
    const buttonValidation : any = document.querySelector('#int-manager-validate');
    const payload : any = { 
      eventLanguage:this.eventLanguage, 
      interpretationLanguages:this.interpretationLanguages,
      interpreterEmail: null 
    }

    buttonValidation.addEventListener("click", (e:any) => { 
      this.updateFeedback('')
      if(!this.eventLanguage){
        this.updateFeedback("Please choose an event language")
        return 
      }
      if(this.interpretationLanguages.length < 1){
        this.updateFeedback("Please choose at least 2 languages for this event.")
        return 
      }
      if(this.interpreterRadio === 'need-interpreter'){
        console.info('validate need-interpreter');
        this.createEvent(payload)
      }
      else if(this.interpreterRadio === 'own-interpreter'){
        if(Object.keys(this.ownInterpreterEmail).length !== (this.interpretationLanguages.length * 2) ){
          this.updateFeedback("Please add at least 2 interpreter email by language.")
          return 
        }
         for (const key in this.ownInterpreterEmail) {
          const isEmailValid = this.validateEmail(this.ownInterpreterEmail[key]);
          if(!isEmailValid){
            this.updateFeedback(`The email "${this.ownInterpreterEmail[key]}" is not a valid email address.`)
            return
           }
         }
        console.info('validate own-interpreter');
        payload.interpreterEmail = this.ownInterpreterEmail;
        this.createEvent(payload)
      }
    })
    
  }

  /**
   * @description Add the interpretation Manager to the dom on the under the ID: #akkadu-interpretation-manager
   */
  addInterpretationManager(){
    this.setUpBaseInterpretationManager()
    this.handleEventLanguagesSection()
    this.handleInterpretationLanguagesSection()
    this.handleAddInterpreter()
    this.handleManageInterpreter()
    this.handleValidation()
  }
}

