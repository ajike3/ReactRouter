import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Welcome from "./components/Welcome.js";
import NoMatch from "./components/NoMatch.js";

function App() {
  return (
    <Router>
      <div className="Container"></div>
      <Switch>
        <Route path="/welcome/:name" component={Welcome}/>
        <Route path="/:name" component={Welcome}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}

export default App;
