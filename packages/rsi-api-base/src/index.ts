import { EventEmitter } from 'events';
export default class Base {
  emitter: any;
  RSI_GATEWAY_API: string;

  constructor() {
    this.emitter = new EventEmitter();
    this.RSI_GATEWAY_API = "https://54i2k0z0vf.execute-api.cn-north-1.amazonaws.com.cn/prod"
  }

  /**
   * @description It authenticates the apiKey by checking on our dynamoDb rsi-api-table 
   * that the apiKey exist 
   * and that this apiKey is associated to that roomName
   * @param {string} apiKey
   * @param {string} roomName
   * @returns {Promise} {stream:object, languageState:string, eventLanguages:array}
   */
  async gatewayAuthenticate(apiKey: string, roomName: string) {
    if (!apiKey) {
      throw Error('base akadu-rsi: apiKey is undefined.');
    }
    if (!roomName) {
      throw Error('base akkadu-rsi: roomName is undefined.');
    }
      const rawResponse = await fetch(`${this.RSI_GATEWAY_API}/authenticate`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({apiKey, roomName})
      });
      const content = await rawResponse.json();
      const body = content.body;
      if(body.error){
        throw Error(`interpretation-player: An error occured: ${body.error}`)
      }
      const { stream , languageState, eventLanguages } = body.data;
      return { stream , languageState, eventLanguages }
  }

    on(event:any,fn:any) {
      this.emitter.on(event,fn)
    }
}
