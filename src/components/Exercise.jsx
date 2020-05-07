import React from 'react';

const Exercise = ({ title, url, ordinal_number}) => {
  console.log(url);
  const iframe =
`    <iframe
      src=${url}
      id=${title}-${ordinal_number}>
    </iframe>`;
  let display = false;

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

function showHide(current) {
  display = !current;
  console.log();
  if(display) {
    document.getElementById(`${title}-${ordinal_number}`).innerHTML = iframe;
  } else {
    document.getElementById(`${title}-${ordinal_number}`).innerHTML = '';
  }
}

};

export default Exercise;
