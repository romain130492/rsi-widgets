/**
 * @class RsiApiInterpretationPlayer
 */

import React, { Component } from 'react'
import InterpretationPlayer from '@akkadu/rsi-interpretation-player'
import '@akkadu/rsi-interpretation-player/dist/index.css'

 export default class RsiApiInterpretationPlayer extends Component {
   constructor({ 
     sdkKey,
     roomName,
     onReady,
     onLanguageSelected,
     onConnectionStatusUpdated,
     isPlayerControlled,
     displayFlag = true,
     placeholderText,
     widgetWrapperClass,
     dropdownWrapperClass,
     headerClass,
     optionsWrapperClass,
     optionItemClass,
     selectedOptionClass,
     refreshButtonClass
    }){
    super()
     this.state = {
      apiKey: sdkKey,
      roomName : roomName,
      onLanguageSelected : onLanguageSelected,
      onConnectionStatusUpdated : onConnectionStatusUpdated,
      onReady : onReady,
      isPlayerControlled : isPlayerControlled,
      displayFlag,
      placeholderText,
      classNames: {
        widgetWrapperClass,
        dropdownWrapperClass,
        headerClass,
        optionsWrapperClass,
        optionItemClass,
        selectedOptionClass,
        refreshButtonClass
      }
    }
  }
   getRoomname(){
      const params = new URLSearchParams(window.location.search)
      const roomname =  this.state.roomName ? this.state.roomName : params.get('rsi-roomname');
      if(!roomname){
       console.error('No rsi-roomname define on your page. You must add as a query parameter rsi-roomname=abcd, abcd is the roomname that you got during the event creation with the interpretation-manager. Infos here: https://rsi-docs.akkadu.com/interpretation-player/roomname.html');
      }
      return roomname
  };
  componentDidMount() {
    this.init()
  }
  initListeners(stream) {
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
    const config = {
      apiKey: this.state.apiKey,
      roomName,
      isPlayerControlled: this.state.isPlayerControlled,
      displayFlag: this.state.displayFlag,
      placeholderText: this.state.placeholderText
    }
    const stream = new InterpretationPlayer(config, this.state.classNames);
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
