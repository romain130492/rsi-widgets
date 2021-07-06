
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './components/homepage';
import InterpretationPlayer from './components/interpretation-player';
import InterpretationManager from './components/interpretation-manager';
import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
      <Router>
        <nav>
          <ul>
            <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
            <li><NavLink to="/interpretation-player" activeClassName="selected">Interpretation Player</NavLink></li> 
            <li><NavLink to="/interpretation-manager" activeClassName="selected">Interpretation Manager</NavLink></li> 
          </ul>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/interpretation-player">
            <InterpretationPlayer />
          </Route>
          <Route path="/interpretation-manager">
            <InterpretationManager />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
