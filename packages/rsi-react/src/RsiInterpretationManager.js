/**
 * @class Foo
 */

 import React, { Component } from 'react'
 import InterpretationManager  from '@akkadu/rsi-interpretation-manager'

 export default class RsiApiInterpretationManager extends Component {
  constructor({ sdkKey }){
    super()
    this.state= {
     apiKey: sdkKey
   }
 }
    componentDidMount() {
      this.init()
    }
   initListeners(manager){
    manager.on('interpretation-manager:on-create-event', ({ roomName }) => {
      console.info('emit interpretation-manager:on-create-event', roomName);
      this.$emit("onCreateEvent", { roomName });
      })
    }
     init(){
     if(!this.state.apiKey){
       throw Error('interpretation-player: sdkKey is not defined')
     }
     const config = {apiKey:this.state.apiKey }
     const manager = new InterpretationManager(config);
     console.log(manager,'the manager');
     this.initListeners(manager)
     manager.init()
    }
    render() {

     return (
      <div id="akkadu-interpretation-manager" className=''>
      </div>
     )
   }
 }
