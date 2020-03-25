import React from 'react';

const Modal = ({ visible, closeModal }) => {
  let style;
  if(visible) style = { visibility: 'visible' }
  else style = { visibility: 'hidden' }
    return (
      <div className="modal" id="modalWindow" style={style}>
        <button id="modalButton" className=".modal-content" onClick={closeModal}>Close</button>
        <div id="player-container" className="close">
        </div>
      </div>
    )
};

export default Modal;
