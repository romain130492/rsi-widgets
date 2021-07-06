
import React, { Component } from 'react';
import { RsiInterpretationManager } from '@akkadu/rsi-react'


const handleOnCreateEvent = (e) => {
  console.info('handleOnCreateEvent event:',e);
}

class InterpretationManager extends Component {

  render() {
    return (
      <div className="InterpretationManager">
        <h3> Interpretation Manager: </h3>
       <RsiInterpretationManager
           sdkKey="d9ed0b1e-6027-4c19-a43a-69b231713f1c"
           onReady = {handleOnCreateEvent}
        /> 
      </div>
    )
  }
}
export default InterpretationManager;