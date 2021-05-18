import RSIBase from '@akkadu/rsi-api-base'

export class InterpretationManager extends RSIBase {
  apiKey: string; 

  constructor( apiKey:string) {
    super()
    this.apiKey = apiKey;
    if(!this.apiKey){
      throw Error('InterpretationPlayer: apiKey is undefined')
    }
  }
}