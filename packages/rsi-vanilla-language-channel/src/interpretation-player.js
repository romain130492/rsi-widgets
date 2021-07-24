let InterpretationPlayer = require('@akkadu/rsi-interpretation-player').default
const { getLanguageChannelEvent } = require('./get-language-channel-event.js')
if(!document) {
  throw Error('rsi-api-vanilla: document is undefined')
}

const component = document.querySelector('#akkadu-interpretation-player')
if(!component) {
  throw Error('rsi-api-vanilla: Unable to detect stream container akkadu-interpretation-player on the DOM')
}
let floor;
 const streams = {
 }
 let currentLanguageCode;
/**
 * @description Init Liste
 * @param {Object} params
 * @returns {Promise} Promise of file data to be resolved
 */
const initListeners = (stream) => {
  stream.on('interpretation-player:on-ready', ({ isReady }) => {
    console.info('emit interpretation-player:on-ready', isReady);
    const event = new CustomEvent("onReady", { detail: { isReady } })
    component.dispatchEvent(event)
  })
  stream.on('interpretation-player:on-language-selected', ({ languageSelected, indexTmpLanguageChannel }) => {
    console.log(indexTmpLanguageChannel,'indexTmpLanguageChannel');
    // when selecting another that is not the floor of the interpreted language
    // we want to mute the interpreter language that was previously playing.
    if( languageSelected.code === floor.code && indexTmpLanguageChannel !== 0 ){
      console.info("selected language is the floor of the interpreted language");
      return
    }else{
      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
      console.log(languageSelected.code,'languageSelected.code$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
      _currentLanguageCode = currentLanguageCode;
      currentLanguageCode = languageSelected.code;
      if(_currentLanguageCode !== floor.code){
        console.log(_currentLanguageCode,'_currentLanguageCode here');
        streams[_currentLanguageCode].handleLanguageChange('source') 
      }
      console.log('emit test', languageSelected);
      const event = new CustomEvent("onLanguageSelected", { detail: { languageSelected } })
      component.dispatchEvent(event)
      
    }
  })
  stream.on('interpretation-player:on-connection-status-updated', ({ connection }) => {
    console.info('emit interpretation-player:on-connection-status-updated', connection);
    const event = new CustomEvent("onConnectionStatusUpdated", { detail: { connection} })
    component.dispatchEvent(event)
  })
}
/**
 * @description We get the roomName, the roomName should be found inside the query parameter rsi-roomname.
 * https://rsi-docs.akkadu.com/interpretation-player/roomname.html
 * @returns {String} 'abcd
 */
const getRoomName = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if(!urlParams){
    throw Error("roomName is undefined. How to add a roomName on your audience pages : https://rsi-docs.akkadu.com/interpretation-player/roomname.html")
  }
  const roomName = urlParams.get('rsi-roomname')
  if(!roomName){
    throw Error("roomName is undefined. How to add a roomName on your audience pages : https://rsi-docs.akkadu.com/interpretation-player/roomname.html")
  }
  return roomName
}
/**
 * @description We set up the config by taking the value of the data-attribut of <div id="akkadu-interpretation-player" ></div>
 * https://rsi-docs.akkadu.com/getting-started/vanilla-js.html
 * @param {Object} params
 * @returns {Object} { sdkKey:string, isPlayerControlled:string, roomName:string  }
 */
const getConfig = () =>{
  console.log(component.dataset,'component.dataset');
  const {
     sdkKey: apiKey,
     isPlayerControlled,
     displayFlag = true,
     placeholderText,
     widgetWrapperClass,
     dropdownWrapperClass,
     headerClass,
     optionsWrapperClass,
     optionItemClass,
     selectedOptionClass,
     refreshButtonClass
  } = component.dataset;

  if(!apiKey){
    throw Error("data-sdk-key is undefined. Add it to the <div data-sdk-key='your_sdk_key'>")
  }
  const roomName = getRoomName()
  return [{
    apiKey,
    isPlayerControlled,
    roomName,
    displayFlag: displayFlag === 'false' ? false : true,
    placeholderText
  }, {
    widgetWrapperClass,
    dropdownWrapperClass,
    headerClass,
    optionsWrapperClass,
    optionItemClass,
    selectedOptionClass,
    refreshButtonClass
  }]
}


const init = async () =>{

  let [config, classNames] = getConfig()

  const languageChannelEvent = await getLanguageChannelEvent({apiKey:config.apiKey})
console.log(languageChannelEvent,'languageChannelEvent here');
  if(!languageChannelEvent){
    throw Error("interpretation-player:multi-languages: you don't have multi language event for this api key. You can contact us at alvaro@akkadu-team.com")
  }
  const roomNames = languageChannelEvent.roomNames;
  console.log(roomNames,'the roomANemes here');
  if(!roomNames){
    throw Error("interpretation-player:multi-languages: you don't have roomNames for this event. You can contact us at alvaro@akkadu-team.com")
  }
  config.isTmpLanguageChannel = true;

  floor = languageChannelEvent.floor;
  console.log(floor,'the floor???');

   // TEST
   // we have to wait te socket to be fully init
   // better to find a solution to not subscribe to a language before clicking on it.
 /*  config.indexTmpLanguageChannel = 0;
  config.roomName = roomNames[0].roomName;
  const stream0 = new InterpretationPlayer(config, classNames);
  initListeners(stream0)
  await stream0.init()

  config.indexTmpLanguageChannel = 1;
  config.roomName = roomNames[1].roomName;
  const stream1 = new InterpretationPlayer(config, classNames);
  initListeners(stream1)
  await stream1.init()
  return */


  // Fake Floor
  config.indexTmpLanguageChannel = 0;
  config.roomName = floor.roomName;
  streams[floor.code] = new InterpretationPlayer(config, classNames);
  initListeners(streams[floor.code])
  await streams[floor.code].init();
  currentLanguageCode = floor.code;

console.log('test????222');
  for(let i=0; i<roomNames.length;i++){
    const code = roomNames[i].code;
    const roomName = roomNames[i].roomName;
    config.indexTmpLanguageChannel = i+1;
    config.roomName = roomName;
    console.log(config,code,'config  and code here');
    streams[code] = new InterpretationPlayer(config, classNames);
    initListeners(streams[code])
    streams[code].init();
  }
  console.log(streams,'teh streams here ');
}

init()