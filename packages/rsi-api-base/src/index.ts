import { EventEmitter } from 'events';
/* const axios = require('axios') */
export default class Base {
  emitter: any;

  constructor() {
    this.emitter = new EventEmitter();
  }

  async gatewayRequest(apiKey: string, roomName: string) {
    if (!apiKey) {
      throw Error('base akadu-rsi: apiKey is undefined.');
    }
    if (!roomName) {
      throw Error('base akkadu-rsi: roomName is undefined.');
    }
    // we get the stream /events/{eventId}/streams 

    // the request below are for test purpose and will have to be removed 
    // once the gateway set up.
    const eventRequest = await(await fetch(`https://devapi.akkadu.com/v2/events/?roomName=${roomName}`)).json()
    const eventId = eventRequest?.data?.events?.[0]?.id;
    if(!eventId){
      console.error('no eventId for this event');
    }
    let streamRequest = await (await fetch(`https://devapi.akkadu.com/v2/events/${eventId}/streams`)).json()
    const eventLanguagesRequest = await  (await (fetch(`https://devapi.akkadu.com/v2/events/${eventId}/languages`))).json()
    const eventLanguageState = await  (await (fetch(`https://devapi.akkadu.com/v2/language-state?roomname=${roomName}`))).json()
    const stream = streamRequest?.data
    const eventLanguages  = eventLanguagesRequest?.data.languages
    const languageState = eventLanguageState?.data.languageState;
 
    return { stream:stream, languageState, eventLanguages }
  }
  on(event:any,fn:any) {
    this.emitter.on(event,fn)
  }
}
