import { EventEmitter } from 'events';

export default class Base {
  emitter: any;

  constructor() {
    this.emitter = new EventEmitter();
  }

  gatewayRequest(apiKey: string, roomName: string) {
    if (!apiKey) {
      throw Error('base akadu-rsi: apiKey is undefined.');
    }
    if (!roomName) {
      throw Error('base akkadu-rsi: roomname is undefined.');
    }
    // we get the stream /events/{eventId}/streams 
    const streamTest = {
      "auth": {
        "uid": 0,
        "channel": "string",
        "appId": "string",
        "token": "string",
        "rtmToken": "string"
      },
      "publishers": [
        {
          "id": 0,
          "userId": 0,
          "eventId": 0,
          "pairId": "string",
          "interpreterId": 0,
          "language": "string",
          "sourceLanguage": true,
          "sourceLanguageId": 0,
          "interpreterLevel": 0,
          "interpreterNeeded": true,
          "createdAt": "2021-05-25T07:49:48.840Z",
          "updatedAt": "2021-05-25T07:49:48.840Z"
        }
      ],
      "floorLang": "en-US",
      "userType": "string"
    }
    const eventTest = {
      bio: null,
      countryCode: null,
      createdAt: "2020-10-09T04:07:43.879Z",
      endDate: "2021-05-13T15:07:00.000Z",
      eventUrl: null,
      id: 2545,
      isActive: true,
      isAkkaduEvent: true,
      isPrivate: false,
      language: null,
      location: null,
      name: "testApi2",
      pdfUrl: null,
      posterUrl: null,
      roomName: "pkmj",
      startDate: "2021-05-12T21:07:00.000Z",
      tagIds: [4],
      timeZone: null,
      updatedAt: "2021-05-13T04:52:47.934Z",
      userId: 622
     }
    return { stream:streamTest, languageState:'en' }
  }
  on(event:any,fn:any) {
    this.emitter.on(event,fn)
  }
}
