"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class Base {
    constructor() {
        this.emitter = new events_1.EventEmitter();
    }
    gatewayRequest(apiKey, roomName) {
        if (!apiKey) {
            throw Error('base akadu-rsi: apiKey is undefined.');
        }
        if (!roomName) {
            throw Error('base akkadu-rsi: roomname is undefined.');
        }
        return 'test gateway';
    }
}
exports.default = Base;
