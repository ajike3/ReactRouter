import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Welcome from "./components/Welcome.js";
import NoMatch from "./components/NoMatch.js";
import Jeopardy from './components/jeopardy/jeopardy';

function App() {
  return (
    <Router>
      <div className="Container">
        <nav>
          <ul>
            <li>Home</li>
            <li>Jeopardy</li>
            <li>Contacts</li>
            <li>Clock</li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/welcome/:name" component={Welcome}/>
        <Route path="/:name" component={Welcome}/>
        <Route path="/jeopardy" component={Jeopardy}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}

export default App;
