import logo from './logo.svg';
import './App.css';
import { RsiApiInterpretationPlayer, /* RsiApiInterpretationManager */ } from '@akkadu/rsi-api-react'
import '@akkadu/rsi-api-react/dist/index.css'

// We redirect to an URL with a rsi-roomname parameter (test-purposes)
const params = new URLSearchParams(window.location.search)
const roomname = params.get('rsi-roomname');
var url = window.location.href
var arr = url.split("/");
var currentUrl = arr[0] + "//" + arr[2]
if(!roomname){
    window.location.href = `${currentUrl}/?rsi-roomname=pvzj`
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3> Interpretation Player: </h3>
        <p> Widget </p>
        <RsiApiInterpretationPlayer
           apiKey="api_key_test"
           positionMenu="bottom" 
           isBoxShadow={false}
           onReady = {handleOnReady}
           onLanguageSelected = {handleOnLanguageSelected}
           onConnectionStatusUpdated = {handleOnConnectionStatusUpdated}
           isPlayerControlled={true}
        />
        <br></br>
        <br></br>
        <h3> Interpretation Manager: </h3>
        <p> Widget Coming Soon !! </p>
       {/*  <RsiApiInterpretationManager /> */}
      </header>
    </div>
  );
}

export default App;
