import { EventEmitter } from 'events'

export default class Base {
  emitter: any;

  constructor() {
    this.emitter = new EventEmitter()
  }
  
  gatewayRequest(apiKey:string, roomName:string){
    if(!apiKey){
      throw Error('base akadu-rsi: apiKey is undefined.')
    }
    if(!roomName){
      throw Error('base akkadu-rsi: roomname is undefined.')
    }
    return 'test gateway'
  }
}