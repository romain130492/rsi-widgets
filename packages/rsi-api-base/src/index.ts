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
      throw Error('base akkadu-rsi: roomname is undefined.');
    }
    // we get the stream /events/{eventId}/streams 

    // the request below are for test purpose and will have to be removed 
    // once the gateway set up.
    const eventId = '778' // 685
    const roomname = 'pvzj' // rqag
    let streamRequest = await (await fetch(`https://devapi.akkadu.com/v2/events/${eventId}/streams`)).json()
    const eventLanguagesRequest = await  (await (fetch(`https://devapi.akkadu.com/v2/events/${eventId}/languages`))).json()
    const eventLanguageState = await  (await (fetch(`https://devapi.akkadu.com/v2/language-state?roomname=${roomname}`))).json()
    const stream = streamRequest?.data
    console.log(stream,'the stream here');
    const eventLanguages  = eventLanguagesRequest?.data.languages
    const languageState = eventLanguageState?.data.languageState;
    console.log(languageState,'the date here');
    console.log(eventLanguages ,'eventLanguages eventLanguages ');
 
    return { stream:stream, languageState, eventLanguages }
  }
  on(event:any,fn:any) {
    this.emitter.on(event,fn)
  }
}
