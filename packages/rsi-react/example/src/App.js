import React from 'react'
import { RsiApiInterpretationPlayer } from '@akkadu/rsi-react'
import { RsiInterpretationManager } from '@akkadu/rsi-react'
import '@akkadu/rsi-react/dist/index.css'


// We redirect to an URL with a rsi-roomname parameter (test-purposes)
const params = new URLSearchParams(window.location.search)
const roomname = params.get('rsi-roomname');
var url = window.location.href
var arr = url.split("/");
var currentUrl = arr[0] + "//" + arr[2]
if(!roomname){
    window.location.href = `${currentUrl}/?rsi-roomname=aljx`
}

const handleOnReady = (e) => {
  console.info('receive onReady event:',e );
}
const handleOnLanguageSelected = (e) => {
  console.info('receive onLanguageSelected event:',e );
}
const handleOnConnectionStatusUpdated = (e) => {
  console.info('receive onConnectionStatusUpdated event:',e );
}
const handleOnCreateEvent = (e) => {
  console.info('receive onConnectionStatusUpdated event:',e );
}
const App = () => {
  return  <div style={{ marginBottom: '2rem' }}>
    <h3>Interpretation Player</h3>
    <video loop="" controls width="640" height="480">
      <source type="video/mp4" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
    </video>
     <RsiApiInterpretationPlayer
        sdkKey="d9ed0b1e-6027-4c19-a43a-69b231713f1c"
        onReady = {handleOnReady}
        onLanguageSelected = {handleOnLanguageSelected}
        onConnectionStatusUpdated = {handleOnConnectionStatusUpdated}
        isBoxShadow={false}
        isPlayerControlled={true}
   />
   <h3 style={{ margin: '2rem 0 0.5rem 0' }}>Interpretation Manager</h3>
    <RsiInterpretationManager
        sdkKey="d9ed0b1e-6027-4c19-a43a-69b231713f1c"
        onCreateEvent = {handleOnCreateEvent}
   />
   </div>
}

export default App
