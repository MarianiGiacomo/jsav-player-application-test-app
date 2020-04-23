import React, { useState }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";
import './css/App.css';
import './css/JSAV.css';
import { server, post_url } from './conf.js'
import Exercises from './components/Exercises';
import Home from './components/Home';
import Jaal from './components/Jaal';

function App() {
  const [ animationData, setAnimationData ] = useState("No data");
  const [ modal, setModal ] = useState(false);

  window.addEventListener("message", receiveMessage, false);


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
        </nav>
        <div className="app-content">
          <Switch>
            <Route path="/exercises">
              <Exercises
              server={server}
              post_url={post_url}
              animationData={animationData}
              modal={modal}
              openModal={openModal}
              closeModal={closeModal}
              />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );

  function receiveMessage(event) {
    if (event.origin !== server)
      return;
    try {
      console.log(event.data)
      axios.post(server, event.data)
      .then(response => {
        let data = response.data;
        setAnimationData(data);
        openModal(data);
      })
    } catch (err) {
      console.warn(err);
    }
  }

  function openModal(content) {
    setModal(true);
    document.getElementById('player-container').innerHTML = content;
  }

  function closeModal() {
    setModal(false);
  }
}

export default App;
