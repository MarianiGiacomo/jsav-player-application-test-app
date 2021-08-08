import React, {  useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from "axios";
import './css/App.css';
import { server } from './conf.js'
import { Nav } from './components/Nav';
import Exercises from './components/Exercises';
import Home from './components/Home';
import Exercise from './components/Exercise';
import { JsonViewer } from './components/JsonViewer';

function App() {
	const [modalVisible, setModalVisible] = useState(true)
	const [animationData, setAnimationData] = useState({})
	// Listens for the post message sent by the exercise recorder
  window.addEventListener("message", receiveMessage, false);

	const modalData = { 
		visible: modalVisible, 
		close: () => setModalVisible(false), 
		content: 'Whe you try the exercises, if the content does not load make sure the browser accepts third party cookies for this web site'
	}

  return (
    <Router>
      <div className="App">
				<Nav/>
				<main>
					<header className="App-header">
						JSAV Player Test Application
					</header>
					<div className="app-content">
						<Switch>
							<Route path="/exercises/:number" render={({ match }) => <Exercise match={ match }/>}/>
							<Route path="/exercises">
								<Exercises modalData={modalData} />
							</Route>
							<Route path="/jaal">
								<JsonViewer data={animationData} />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</div>
				</main>
      </div>
    </Router>
  );

  function receiveMessage(event) {
    if (event.origin === server && sentByExerciseRecorder(event.data)) {
			// Used by the JAAL Visualizer
			setAnimationData(event.data);
			const exerciseIframe = document.querySelector('iframe.exercise');
			const warning = document.querySelector('strong.warning');
			if(exerciseIframe) exerciseIframe.remove();
			if(warning) warning.remove();
			if(!document.querySelector('.loader')) {
				const loader = document.createElement('div')
				loader.className = 'loader'
				document.querySelector('.exercise-content').prepend(loader)
			}
      try {
        axios.post(server, event.data)
        .then(response => {
          let data = response.data;
          loadExercisePlayer(data);
        })
      } catch (err) {
        console.warn(err);
      }
    }
    return;
  }

  function sentByExerciseRecorder(data) {
    return data.metadata && data.definitions && data.initialState && data.animation;
  }

  function loadExercisePlayer(content) {
		const loader = document.querySelector('.loader')
    const jsavPlayer = document.getElementById('player-container');
		if(loader) loader.remove() 
		if(jsavPlayer && !jsavPlayer.innerHTML) jsavPlayer.innerHTML = content;
  }
}

export default App;
