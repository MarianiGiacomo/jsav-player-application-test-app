import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/App.css';
import './css/JSAV.css';
import Exercises from './components/Exercises';
import InsertionSort from './components/exercises/InsertionSort';
import Home from './components/Home';
import Jaal from './components/Jaal';
import Animation from './components/Animation';

function App() {

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
            <Link to="/exercises">Exercises</Link>
          </li>
          <li>
            <Link to="/jaal">JAAL Animation File</Link>
          </li>
          <li>
            <Link to="/animation">Animation</Link>
          </li>
        </nav>
        <div className="app-content">
          <Switch>
            <Route path="/exercises">
              <Exercises />
            </Route>
            // <Route path="/exercise/insertionSort">
            //   <InsertionSort />
            // </Route>
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
      </div>
    </Router>
  );
}

export default App;
