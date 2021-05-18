
/* import RSIBase from '@akkadu/rsi-api-base' */
import RSIBase from '/Users/romain/Desktop/Projects/Akkadu/rsi-api-widget/rsi-api-widget/modules/rsi-api-base'

const defaultConsumerConfig = {
  languages:[],
  container:null,
}

export default class InterpretationPlayer extends RSIBase {
  apiKey: string;
  roomName: string;
  consumerConfig: any;

  constructor(config:{apiKey: string, roomName: string, container:string }) {
    super();
    const { apiKey, roomName, container } = config;
    this.apiKey = apiKey;
    this.roomName = roomName;
    this.consumerConfig = defaultConsumerConfig
    this.consumerConfig.container = container;
    this.consumerConfig.domContainer = document.querySelector(`#${this.consumerConfig.container}`)
    if (!this.apiKey) {
      throw Error('InterpretationPlayer: apiKey is undefined');
    }
    if (!this.roomName) {
      throw Error('InterpretationPlayer: roomName is undefined');
    }
    if (!this.consumerConfig.domContainer) {
      throw new Error(`Unable to detect stream container ${this.consumerConfig.container} on the DOM`)
    }
  }
  async init() {
    const gatewayReponse = /* await */ this.gatewayRequest(this.apiKey, this.roomName);
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
    this.emitter.emit('interpretation-player:on-ready', { isReady:true });

    const div = document.createElement('div')
    div.id = 'domId-test'
    div.style.display = 'non'
    div.style.height = '400px'
    div.style.backgroundColor = 'black'
    this.consumerConfig.domContainer.appendChild(div)
  }
}
