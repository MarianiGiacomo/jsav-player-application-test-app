import React, { Component } from 'react';
import "../jsav-exercise-player/styles/player.css";
// import playButton from "../jsav-exercise-player/img/play-button.png";
import "../jsav-exercise-player/build/player-bundle.js"

class Animation extends Component {

  componentWillUnmount() {
    window.resetAnimationData();
  }


  render() {
    function notImplemented(){
      alert('This functionality has not yet been implemented')
    }
    const  submission = window.submission;

    if(window.$ !== undefined && submission) {
      setTimeout(() => {
        window.initializeAnimation(window.JSAV, submission)
      }, 100);
      return (
        <div>
          <div className="auto-animation">
            <button id="play-button">Play</button>
            <button id="pause-button">Pause</button>
            <button id="reset-button">Reset</button>
          </div>
          <div className="player-content">
            <div className="import-export">
              <button id="settings">Animation Speed</button>
              <button id="import-animation" onClick={() => notImplemented()}>Import Animation</button>
              <button id="export-animation" onClick={() => notImplemented()}>Export Animation</button>
            </div>
            <div className="animation-instructions">
              <p>Click the <b>arrows</b> buttons or use your <b>keyboard</b> to step through the animation</p>
              <p><b>Key right = forward</b> | <b>key back = backward</b> | <b>Key up = begin</b> | <b>key down = end</b></p>
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
            <h3>If the model answer was opened during the exercise, the viewed steps will be shown here</h3>
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
