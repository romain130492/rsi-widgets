import { EventEmitter } from 'events';

export default class Base {
  emitter: any;

  constructor() {
    this.emitter = new EventEmitter();
  }

  gatewayRequest(apiKey: string, roomName: string) {
    console.log('test base lerna');
    if (!apiKey) {
      throw Error('base akadu-rsi: apiKey is undefined.');
    }
    if (!roomName) {
      throw Error('base akkadu-rsi: roomname is undefined.');
    }
    return 'test gateway';
  }
  on(event:any,fn:any) {
    this.emitter.on(event,fn)
  }
}
