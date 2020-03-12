import React from 'react';
import recorder from "../jsav-exercise-recorder/exerciseRecorder.js"
import insertionSort from "../exercises/insertionSort.js"

class Exercise extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mounting')
    if(window.$ !== undefined){
      recorder.initialize(window.$);
      insertionSort(window.JSAV, window.$);
    } else {
      window.location.pathname = '/';
    }
  }

  componentWillUnmount() {
    this.props.saveSubmission();
  }

  render() {

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
}

export default Exercise;
