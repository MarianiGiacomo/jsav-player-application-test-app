import React from 'react';

const Modal = ({ content }) => {

  if(content) {
    document.getElementById('fallback').innerHTML = "";
    document.getElementById('player-container').innerHTML = content;
  }

  return (
    <div className = "modal" id="modalWindow">
      <button id="modalButton" className=".modal-content"  onClick={ closeModal }>Close</button>
      <h3 id="fallback">Did you submit your solution?</h3>
      <div id="player-container" className="close">
      </div>
    </div>
  )

  function closeModal() {
    document.getElementById('modalWindow').style.display = "none";
  }
};

export default Modal;
