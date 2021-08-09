import React from 'react';
import { Link } from "react-router-dom";

const Home = () => (
  <div>
		<h1>About this project</h1>
		<p>
			This is an application to test the recording of traces from <a href="http://jsav.io/" target="_blank" rel="noopener noreferrer">JSAV </a> visual algorith simulation exercises,
			and replaying the submission step-by-step starting from the recorded trace.
		</p>
		<p>
			This application represents a Learning Management System, which loads the JSAV visual algorithm simulation exercises as third party tools from an external service.
			In our case, the external service is a <a href="https://github.com/MarianiGiacomo/jsav-player-application-test-server" target="_blank" rel="noopener noreferrer">test server</a>.
			The external service provides the exercises with embedded the <a href="https://github.com/MarianiGiacomo/jsav-exercise-recorder" target="_blank" rel="noopener noreferrer">Exercise Recorder</a> module,
			which records in the <a href="https://github.com/atilante/JAAL" target="_blank" rel="noopener noreferrer">JAAL 1.0</a> format the actions performed when solving the exercise. 
			The Exercise Recorcer posts the JAAL trace to the host window or to the specified URL.
		</p>
		<p>
			The <a href="https://github.com/MarianiGiacomo/jsav-exercise-player" target="_blank" rel="noopener noreferrer">Exercise Player</a> is an application that given a JAAL 1.0 file, 
			allows to replay the recorded exercise trace and exercise model answer (if given in the JAAL file).
			This application, simulating a Learning Management System, loads the Exercise Player as external tool, in our case from the test server. 
			The Exercise Player is loaded right after the submission of the JSAV visual algorithm simulation exercise.
		</p>
		<p>
			On top of solving and replaying JSAV visual algorithm exercises, you can also see the content of the JAAL file from your last submission using the <Link to="/jaal">JAAL Visualizer</Link>.
		</p>
		<p>
			Start by trying out some <Link to="/exercises">exercise</Link>. After submitting an exercise, you will see the <a href="https://github.com/MarianiGiacomo/jsav-exercise-player" target="_blank" rel="noopener noreferrer">Exercise Player</a>,
			where you can review your submission and compare it with the model answer. Both, the submission steps and the model answer, are reconstructed from the JAAL file. 
			You can see the content of your latest submission's JAAL file with the <Link to="/jaal">JAAL Visualizer</Link>.
		</p>
  </div>
);

export default Home;
