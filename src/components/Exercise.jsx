import React from 'react';
import recorder from "../jsav-exercise-recorder/exerciseRecorder.js"
import insertionSort from "../exercises/insertionSort.js"

class Exercise extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(window.$ !== undefined){
      let JSAV = window.JSAV
      let $ = window.$;
      recorder.initialize();
      insertionSort(JSAV, $);
      new JSAV.utils.Settings($('#settings'));
      let resetButton = document.getElementsByName('reset')[0];
      resetButton.parentNode.removeChild(resetButton)
    } else {
      window.location.pathname = '/';
    }
  }

  componentWillUnmount() {
    recorder.reset();
  }

  render() {

    return (
      <div id="jsavcontainer">
        <h1>Insertion Sort</h1>
        <p className="instructLabel">Instructions:</p>
        <p className="instructions">
        Use Insertion Sort to sort the table given below in ascending order. Click on an item to select it and click again on another one to swap these bars.
        </p>
        <button id="settings">Animation Speed</button>
        <p align="center" className="jsavexercisecontrols"></p>
        <p className="jsavscore"></p>
        <ol id="exerArray"></ol>
        <p className="jsavoutput jsavline"></p>
      </div>
    );
  }
}

export default Exercise;
