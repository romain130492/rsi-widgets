let InterpretationManager = require('@akkadu/rsi-interpretation-manager').default  

if(!document){
  throw Error('rsi-api-vanilla: document is undefined')
}

const component = document.querySelector('#akkadu-interpretation-manager')
if(!component){
  throw Error('rsi-api-vanilla: Unable to detect stream container akkadu-interpretation-manager on the DOM')
}

 
/**
 * @description Init Liste
 */
const initListeners = (stream) => {
  stream.on('interpretation-manager:on-create-event', ({ roomName }) => {
    console.info('emit interpretation-manager:on-create-event', );
    const event = new CustomEvent("onCreateEvent", { detail: { roomName } })
    component.dispatchEvent(event)
  })

}

/**
 * @description We set up the config by taking the value of the data-attribut of <div id="akkadu-interpretation-player" ></div>
 * https://rsi-docs.akkadu.com/getting-started/vanilla-js.html
 * @param {Object} params
 * @returns {Object} { sdkKey:string, isPlayerControlled:string, roomName:string  }
 */
const getConfig = () =>{
  const {
     sdkKey:apiKey,
  } = component.dataset;

  if(!apiKey){
    throw Error("interpretationManager: data-sdk-key is undefined. Add it to the <div data-sdk-key='your_sdk_key'>")
  }
  return { apiKey }
}
let config = getConfig()

const stream = new InterpretationManager(config);
initListeners(stream)
stream.init()
