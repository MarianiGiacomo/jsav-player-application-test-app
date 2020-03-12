import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/App.css';
import './css/JSAV.css'
import Exercise from './components/Exercise';
import Home from './components/Home';
import Jaal from './components/Jaal';
import Animation from './components/Animation';

function App() {
  // let submission = {}
  //
  // function saveSubmission() {
  //   if(window.submission) {
  //     setSubmission(window.submission)
  //   }
  // }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          JSAV Player Test Application
        </header>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test/exercise">Exercise</Link>
          </li>
          <li>
            <Link to="/jaal">JAAL Animation File</Link>
          </li>
          <li>
            <Link to="/animation">Animation</Link>
          </li>
        </nav>
        <Switch>
          <Route path="/test/exercise">
            <Exercise />
          </Route>
          <Route path="/jaal">
            <Jaal />
          </Route>
          <Route path="/animation">
            <Animation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
