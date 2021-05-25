/**
 * @class RsiApiInterpretationPlayer
 */

import React, { Component } from 'react'
import InterpretationPlayer from '@akkadu/rsi-api-interpretation-player'

 export default class RsiApiInterpretationPlayer extends Component {
  constructor({apiKey, positionMenu, onReady, onLanguageSelected, onConnectionStatusUpdated, isBoxShadow }){
    super()
     this.state= {
      apiKey: apiKey,
      positionMenu : positionMenu,
      onLanguageSelected : onLanguageSelected,
      onConnectionStatusUpdated : onConnectionStatusUpdated,
      onReady : onReady,
      isBoxShadow : isBoxShadow
    }
  }
   getRoomname(){
    return 'test' // to update later with the gateway api
  };
  componentDidMount() {
    this.init()
  }
  initListeners(stream){
    stream.on('interpretation-player:on-ready', ({ isReady }) => {
      console.info('emit interpretation-player:on-ready', isReady);
      this.state.onReady({ isReady })
    })
    stream.on('interpretation-player:on-language-selected', ({ languageSelected }) => {
      console.info('emit interpretation-player:on-language-selected', languageSelected );
      this.state.onLanguageSelected({ languageSelected })
    })
    stream.on('interpretation-player:on-connection-status-updated', ({ connection }) => {
      console.info('emit interpretation-player:on-connection-status-updated', connection );
      this.state.onConnectionStatusUpdated({ connection })
    })
  }
   init(){
     const roomName = this.getRoomname();
     if(!roomName){
      throw Error('interpretation-player: roomname is not defined')
    }
    if(!this.state.apiKey){
      throw Error('interpretation-player: apiKey is not defined')
    }
    const config = {apiKey:this.state.apiKey, roomName, container:'akkadu-interpretation-player', positionMenu:this.state.positionMenu, isBoxShadow: this.state.isBoxShadow }
    const stream = new InterpretationPlayer(config);
    this.initListeners(stream)
    stream.init()
   }
   render() {
     return (
       <div id="akkadu-interpretation-player" className=''>
       </div>
     )
   }
 }
