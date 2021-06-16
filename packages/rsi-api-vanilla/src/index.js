let InterpretationPlayer = require('@akkadu/rsi-api-interpretation-player').default  

if(!document){
  throw Error('rsi-api-vanilla: document is undefined')
}

const component = document.querySelector('#akkadu-interpretation-player')
if(!component){
  throw Error('rsi-api-vanilla: Unable to detect stream container akkadu-interpretation-player on the DOM')
}

 
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
  stream.on('interpretation-player:on-language-selected', ({ languageSelected }) => {
    console.info('emit interpretation-player:on-language-selected', languageSelected);
    const event = new CustomEvent("onLanguageSelected", { detail: { languageSelected } })
    component.dispatchEvent(event)
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
 * @returns {Object} { apiKey:string, positionMenu:string, isBoxShadow:string, isPlayerControlled:string, roomName:string  }
 */
const getConfig = () =>{
  const {
     apiKey, 
     positionMenu, 
     isBoxShadow, 
     isPlayerControlled 
  } = component.dataset;

  if(!apiKey){
    throw Error("apiKey is undefined. Add it to the <div data-api-key='your_api_key'>")
  }
  const roomName = getRoomName()
  return { apiKey, positionMenu, isBoxShadow, isPlayerControlled, roomName }
}
let config = getConfig()

const stream = new InterpretationPlayer(config);
initListeners(stream)
stream.init()
