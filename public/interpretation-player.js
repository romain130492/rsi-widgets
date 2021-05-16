"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpretationPlayer = void 0;
const base_1 = __importDefault(require("./base"));
class InterpretationPlayer extends base_1.default {
    constructor(apiKey, roomName) {
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
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gatewayRequest(this.apiKey, this.roomName);
            this.initListeners();
            this.addInterpretationPlayer();
        });
    }
    initListeners() {
    }
    /**
     * @description add the interpretation player to the dom "#akkadu-interpretation-player"
     * @private
     */
    addInterpretationPlayer() {
        this.emitter.emit('interpretation-player:on-ready');
    }
}
exports.InterpretationPlayer = InterpretationPlayer;
