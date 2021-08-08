import React from 'react';
import { Link } from "react-router-dom";
import testApplicationImg from "../img/test-application.png";

const Home = () => (
  <div>
		<h1>About this project</h1>
		<p>
			This is an application to test the recording of traces from <a href="http://jsav.io/">JSAV </a>algorithm animation exercises,
			and replaying the submission step-by-step starting from the recorded trace. 
			The trace is recorded in the JAAL 1.0 format
		</p>
    <ol>
      <li>The <a href="https://github.com/MarianiGiacomo/jsav-exercise-recorder">Exercise Recorder</a> records the exercise while you are doing it.
      </li>
      <li>The trace is recorded and stored in the <a href="https://github.com/atilante/JAAL">JSON-based Algorithm Animation Language (JAAL) 1.0</a> format.
      </li>
      <li>The <a href="https://github.com/MarianiGiacomo/jsav-exercise-player">Exercise Player</a> creates the animation based on the received JAAL file
      </li>
  	</ol>
		<p>
			Start by trying out some <Link to="/exercises">exercise</Link>. After submitting an exercise, you will see the <a href="https://github.com/MarianiGiacomo/jsav-exercise-player">Exercise Player</a>,
			where you can review your submission and compare it with the model answer. Both, the submission steps and the model answer, are reconstructed from the JAAL file. 
			You can see the content of your latest submission's JAAL file with the <Link to="/jaal">JAAL Visualizer</Link>.
		</p>
  </div>
);

export default Home;
