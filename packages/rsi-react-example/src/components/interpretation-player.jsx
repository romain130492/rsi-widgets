
import React, { Component } from 'react';
import { RsiApiInterpretationPlayer, /* RsiApiInterpretationManager */ } from '@akkadu/rsi-react'


const handleOnReady = (e) => {
  console.info('receive onReady event:',e );
}
const handleOnLanguageSelected = (e) => {
  console.info('receive onLanguageSelected event:',e );
}
const handleOnConnectionStatusUpdated = (e) => {
  console.info('receive onConnectionStatusUpdated event:',e );
} 
class InterpretationPlayer extends Component {

  componentDidMount() {
    // simple redirection to a page with a rsi-roomname to be aljx
    const params = new URLSearchParams(window.location.search)
    const roomname = params.get('rsi-roomname');
    console.log(roomname,'roomnameroomnameroomname1111');
    var url = window.location.href
    var arr = url.split("/");
    var currentUrl = arr[0] + "//" + arr[2]
    if(!roomname){
        window.location.href = `${currentUrl}/interpretation-player/?rsi-roomname=aljx`
    }
  }
  render() {
    return (
      <div className="InterpretationPlayer">
        <h3> Interpretation Player: </h3>
       <RsiApiInterpretationPlayer
           sdkKey="d9ed0b1e-6027-4c19-a43a-69b231713f1c"
           positionMenu="bottom" 
           isBoxShadow={false}
           onReady = {handleOnReady}
           onLanguageSelected = {handleOnLanguageSelected}
           onConnectionStatusUpdated = {handleOnConnectionStatusUpdated}
           isPlayerControlled={true}
        /> 
      </div>
    )
  }
}
export default InterpretationPlayer;