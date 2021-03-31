import React from 'react';
import Modal from "./Modal";
import Exercise from './Exercise';
import { exercises } from "../conf.js";

const Exercises = (props) => {
  const {
    animationData,
    modal,
    openModal,
    closeModal } = { ...props };

  return (
    <div>
      <h1>Exercises</h1>
      <strong style={{color: "red"}}>If the exercises don't work, check that you have allowed thrid party cookies for this web site.</strong>
      <div className="exercise-content">
      { exercises.map( exercise => {
        return <div key={exercise.ordinal_number}>
            <Exercise title={exercise.title} url={constructUrl(exercise)} ordinal_number={exercise.ordinal_number} />
          </div>
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
  return  `${url}?submission_url=${submission_url}&post_url=${post_url}&max_points=${max_points}&uid=${uid}&ordinal_number=${ordinal_number}`;
}



export default Exercises;
