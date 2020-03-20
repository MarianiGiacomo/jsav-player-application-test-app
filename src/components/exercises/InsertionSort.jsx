// import React from 'react';
// import insertionSort from "../../exercises/insertionSort.js"
// import "../../jsav-exercise-recorder/build/exercise_recorder-bundle.js";
// import "../../css/odsaStyle-min.css";
//
//
// class InsertionSort extends React.Component {
//
//   componentDidMount() {
//     if(window.$ !== undefined){
//       let JSAV = window.JSAV
//       let $ = window.$;
//       window.initializeRecorder();
//       insertionSort(JSAV, $);
//       new JSAV.utils.Settings($('#settings'));
//       let resetButton = document.getElementsByName('reset')[0];
//       resetButton.parentNode.removeChild(resetButton)
//     } else {
//       window.location.pathname = '/';
//     }
//   }
//
//   componentWillUnmount() {
//     window.detachRecorder();
//   }
//
//   render() {
//
//     return (
//       <div id="jsavcontainer">
//         <h1>Insertion Sort</h1>
//         <p className="instructLabel">Instructions:</p>
//         <p className="instructions">
//         Use Insertion Sort to sort the table given below in ascending order. Click on an item to select it and click again on another one to swap these bars.
//         </p>
//         <button id="settings">Animation Speed</button>
//         <p align="center" className="jsavexercisecontrols"></p>
//         <p className="jsavscore"></p>
//         <ol id="exerArray"></ol>
//         <p className="jsavoutput jsavline"></p>
//       </div>
//     );
//   }
// }
//
// export default InsertionSort;
