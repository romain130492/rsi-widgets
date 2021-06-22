/**
 * @class RsiApiInterpretationPlayer
 */

import React, { Component } from 'react'
import InterpretationPlayer from '@akkadu/rsi-interpretation-player'

 export default class RsiApiInterpretationPlayer extends Component {
  constructor({ sdkKey, positionMenu, onReady, onLanguageSelected, onConnectionStatusUpdated, isBoxShadow, isPlayerControlled }){
    super()
     this.state= {
      apiKey: sdkKey,
      positionMenu : positionMenu,
      onLanguageSelected : onLanguageSelected,
      onConnectionStatusUpdated : onConnectionStatusUpdated,
      onReady : onReady,
      isBoxShadow : isBoxShadow,
      isPlayerControlled : isPlayerControlled
    }
  }
   getRoomname(){
      const params = new URLSearchParams(window.location.search)
      const roomname = params.get('rsi-roomname');
      if(!roomname){
       console.error('No rsi-roomname define on your page. You must add as a query parameter rsi-roomname=abcd, abcd is the roomname that you got during the event creation with the interpretation-manager. Infos here: https://rsi-docs.akkadu.com/interpretation-player/roomname.html');
      }
      return roomname 
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
      throw Error('interpretation-player: sdkKey is not defined')
    }
    const config = {apiKey:this.state.apiKey, roomName, positionMenu:this.state.positionMenu, isBoxShadow: this.state.isBoxShadow, isPlayerControlled: this.state.isPlayerControlled }
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
