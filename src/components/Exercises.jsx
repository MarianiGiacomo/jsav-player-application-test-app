import React, { useState } from 'react';
import Modal from "./Modal";

const Exercises = (props) => {
  const {
    server,
    animationData,
    modal,
    openModal,
    closeModal } = { ...props };
  const [ exercises, setExercises ] = useState([
    {
      title: "Insertion Sort",
      server: server,
      path: "/exercises/insertionSort.html",
      submission_url: "",
      post_url: "window",
      max_points: 20,
      uid: "test user",
      ordinal_number: 1
    }
  ]);

  return (
    <div>
      <div className="exercise-content">
      { exercises.map( exercise => {
        return <iframe title={ exercise.title } src={constructUrl(exercise)}></iframe>
      }) }
      </div>
      <button id="modalButton" onClick={() => openModal(animationData)}>Replay submission</button>
      <Modal
      visible={modal}
      openModal={openModal}
      closeModal={closeModal}/>
    </div>
  )

};

function constructUrl(exercise) {
  let {
    server,
    path,
    submission_url,
    post_url,
    max_points,
    uid,
    ordinal_number
  } = { ...exercise };
  let url = server + path;
  return  `${url}?submission_url=${submission_url}
    &post_url=${post_url}&max_points=${max_points}&uid=${uid}&ordinal_number=${ordinal_number}`;
}

export default Exercises;
