import React from 'react';
import Modal from "./Modal";
import { exercises } from "../conf.js";

const Exercises = (props) => {
  const {
    animationData,
    modal,
    openModal,
    closeModal } = { ...props };

  return (
    <div>
      <div className="exercise-content">
      { exercises.map( exercise => {
        return <iframe title={ exercise.title } src={constructUrl(exercise)} key={ exercise.ordinal_number}></iframe>
      }) }
      </div>
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
