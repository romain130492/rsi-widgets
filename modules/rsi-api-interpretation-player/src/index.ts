
import RSIBase from '@akkadu/rsi-api-base'
export class InterpretationPlayer extends RSIBase {
  apiKey: string;
  roomName: string;

  constructor(apiKey: string, roomName: string) {
    super();
    this.apiKey = apiKey;
    this.roomName = roomName;
    if (!this.apiKey) {
      throw Error('InterpretationPlayer: apiKey is undefined');
    }
    if (!this.roomName) {
      throw Error('InterpretationPlayer: roomName is undefined');
    }
  }
  async init() {
    await this.gatewayRequest(this.apiKey, this.roomName);
    this.initListeners();
    this.addInterpretationPlayer();
  }
  initListeners() {
    //
  }
  /**
   * @description add the interpretation player to the dom "#akkadu-interpretation-player"
   * @private
   */
  addInterpretationPlayer() {
    this.emitter.emit('interpretation-player:on-ready');
  }
}
