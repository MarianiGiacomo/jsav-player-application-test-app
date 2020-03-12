import React, { useEffect, useState }  from 'react';
const Jaal = (props) => {

  const { submission } = { ...props }

  function noSubmission() {
    return <h2>No JAAL file available</h2>
  }

  function showSubmission() {
    let prettySubmission = JSON.stringify(submission, null, 2)
    return <code><pre>{ prettySubmission }</pre></code>
  }

  return (
    <div>
      { Object.keys(submission).length === 0? noSubmission() : showSubmission() }
    </div>
  )

}

export default Jaal;
