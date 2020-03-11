import React, { useEffect } from 'react';

function Exercise () {

  useEffect(() => {
    const exerciseScript = document.createElement('script');
    exerciseScript.src = "./lib/exercise.js";
    exerciseScript.async = true;
    document.body.appendChild(exerciseScript);
    const recorderScript = document.createElement('script');
    recorderScript.src = "./lib/exercise_recorder-bundle.js";
    recorderScript.async = true;
    document.body.appendChild(recorderScript);
  });

  // componentDidMount() {
  //   const script = document.createElement('script');
  //   script.src = "./lib/exercise.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }

  return (
    <div id="jsavcontainer">
      <h1>Insertion Sort</h1>
      <p className="instructLabel">Instructions:</p>
      <p className="instructions">
      Use Insertion Sort to sort the table given below in ascending order. Click on an item to select it and click again on another one to swap these bars.
      </p>
      <p align="center" className="jsavexercisecontrols"></p>
      <p className="jsavscore"></p>
      <ol id="exerArray"></ol>
      <p className="jsavoutput jsavline"></p>
    </div>
  );
}

export default Exercise;
