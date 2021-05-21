import logo from './logo.svg';
import './App.css';
/* import {ExampleComponent} from '@akkadu/rsi-api-react' */
import { RsiApiInterpretationPlayer, /* RsiApiInterpretationManager */ } from '@akkadu/rsi-api-react'
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
