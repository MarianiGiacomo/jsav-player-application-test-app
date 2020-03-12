import React from 'react';
const Jaal = (props) => {

  const  submission  = window.submission

  function noSubmission() {
    return <h2 className="no-data">No JAAL file available</h2>
  }

  function showSubmission() {
    let prettySubmission = JSON.stringify(submission, null, 2)
    return <code><pre>{ prettySubmission }</pre></code>
  }

  return (
    <div>
      { !submission ? noSubmission() : showSubmission() }
    </div>
  )

}

export default Jaal;
