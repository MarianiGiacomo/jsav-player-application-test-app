import React, { useState }  from 'react';

const Exercise = ({ title, url, ordinal_number}) => {
  const iframe =`<iframe src=${url} id=${title}-${ordinal_number}></iframe>`;
  const [ display, setDisplay ] = useState(false);

  return (
  <div>
    <div className="exercise-content">
      <h3><label
      onClick={() => showHide(display)}
      style={{cursor: 'pointer', color: 'blue'}}
      >{title}
      </label></h3>
      <div id={`${title}-${ordinal_number}`}></div>
    </div>
  </div>
)

function showHide(display) {
  if(!display) {
    document.getElementById(`${title}-${ordinal_number}`).innerHTML = iframe;
    setDisplay(true);
  } else {
    document.getElementById(`${title}-${ordinal_number}`).innerHTML = '';
    setDisplay(false);
  }
}

};

export default Exercise;
