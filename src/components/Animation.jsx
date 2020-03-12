import React, { Component } from 'react';
import player from "../jsav-exercise-player/player.js"
import "../css/player.css";
import playButton from "../jsav-exercise-player/img/play-button.png";

class Animation extends Component {
  constructor(props) {
    super(props);
    }

    // componentWillUnmount() {
    //   let jsavCanvas = document.getElementsByClassName('jsavcanvas');
    //   if(jsavCanvas[0]) {
    //     jsavCanvas[0].innerHTML = ''
    //   }
    // }


  render() {
    const  submission = window.submission;
    if(window.$ !== undefined && submission) {
      setTimeout(() => {
        player.initialize(window.JSAV, submission)
      }, 500);
      return (
        <div>

          <div className="player-content">
            <div className="import-export">
              <button id="settings">Animation Speed</button>
              <button>Import Animation</button>
              <button>Export Animation</button>
            </div>
            <div className="animation-instructions">
              <p>Press the arrows or use your keyboard arrow buttons to go through the animation</p>
              <p>Key right = forward | key back = backward | Key up = begin | key down = end</p>
            </div>
          </div>

          <div id="jsavcontainer">
            <div className="jsavcontrols"></div>
            <div className="instructions-div">
              <p className="instructLabel">Instructions:</p>
              <p className="instructions" id="exercise-instructions"></p>
            </div>
            <div className="final-grade" id="final-grade">
              <b>Final Score:</b>
              <div id="scores"></div>
            </div>
            <p className="jsavoutput jsavline" id="animation-html"></p>
          </div>

          <div className="model-solution">
            <h3>Here will be shown the model solution steps if they are present in the animation</h3>
            <div id="model-solution"></div>
          </div>

        </div>
      )
    }
    return (
      <h2 className="no-data">No data available for the animation</h2>
    )
  }

}

export default Animation;
