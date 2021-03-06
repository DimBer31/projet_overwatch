import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
          <Router>
              <NavBar/>
              <Switch>
                <Route exact path="/" component={Home}/>
              </Switch>
          </Router>
  );
}

export default App;
