
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
  console.log('test555');
  return <RsiApiInterpretationPlayer
    apiKey="api_key_test"
    onReady = {handleOnReady}
    onLanguageSelected = {handleOnLanguageSelected}
    onConnectionStatusUpdated = {handleOnConnectionStatusUpdated}
    isBoxShadow={false}
   />
}

export default App
