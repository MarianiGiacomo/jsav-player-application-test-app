import React from 'react';
import { Link } from "react-router-dom";
import testApplicationImg from "../img/test-application.png";

const Home = () => (
  <div>
    <h3>This is an application to test the <em>JSAV Player Application</em></h3>
    <h4>The <em>JSAV Player Application</em> is used to record, store and replay
     <em>Visual Algorithm Simulation</em> exercises.
     The application consists of three main components:</h4>
    <ol>
      <li><h4>The <em>Exercise Recorder</em> which records the exercise while
      you are doing it.</h4>
      </li>
      <li><h4>The <em>JSON-based Algorithm Animation Language (JAAL)</em> file,
      where the recording is stored</h4>
      </li>
      <li><h4>The <em>Exercise Player</em>, which creates the animation based
      on the <em>JAAL</em> file</h4>
      </li>
  </ol>
    <h4>Start by trying some <Link to="/exercises">exercise</Link></h4>
    <div >
      <img
      src={ testApplicationImg }
      alt="Test application architecture"
      style={{ margin: "1% 5%" }}>
      </img>
    </div>
  </div>
);

export default Home;
