
import React from 'react'

import { RsiApiInterpretationPlayer } from '@akkadu/rsi-api-react'
import '@akkadu/rsi-api-react/dist/index.css'
const handleOnReady = (e) => {
  console.info('receive onReady event:',e );
}
const handleOnLanguageSelected = (e) => {
  console.info('receive onLanguageSelected event:',e );
}
const handleOnConnectionStatusUpdated = (e) => {
  console.info('receive onConnectionStatusUpdated event:',e );
}
const App = () => {
  return  <div>
    <video loop="" controls width="640" height="480">
      <source type="video/mp4" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
    </video>
     <RsiApiInterpretationPlayer
        apiKey="api_key_test1"
        onReady = {handleOnReady}
        onLanguageSelected = {handleOnLanguageSelected}
        onConnectionStatusUpdated = {handleOnConnectionStatusUpdated}
        isBoxShadow={false}
        isPlayerControlled={true}
   /></div>
}

export default App
