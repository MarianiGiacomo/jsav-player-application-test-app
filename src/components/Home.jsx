import React from 'react';
import { Link } from "react-router-dom";
import testApplicationImg from "../img/test-application.png";

const Home = () => (
  <div>
		<p>
			This is an application to test the recording of traces from JSAV algorithm animation exercises,
			and replaying the submission step-by-step starting from the recorded trace. 
			The trace is recorded in the JAAL format
		</p>
    <ol>
      <li>The <a href="https://github.com/MarianiGiacomo/jsav-exercise-recorder">Exercise Recorder</a> records the exercise while you are doing it.
      </li>
      <li>The trace is recorded and stored in the <a href="https://github.com/atilante/JAAL">JSON-based Algorithm Animation Language (JAAL)</a> format.
      </li>
      <li>The <a href="https://github.com/MarianiGiacomo/jsav-exercise-player">Exercise Player</a> creates the animation based on the received <em>JAAL</em> file
      </li>
  	</ol>
		<p>
			Start by trying out some <Link to="/exercises">exercise</Link>.
		</p>
  </div>
);

export default Home;
