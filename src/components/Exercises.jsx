import React from 'react';
import { Link } from 'react-router-dom'
import { exercises } from "../conf.js";
import Modal from './Modal'

const Exercises = ({ modalData }) => {

  return (
    <>
      <h1>Exercises</h1>
			{ 
				exercises.map(e => {
					return <div key={e.ordinal_number}><Link to={`/exercises/${e.ordinal_number}`}>{e.title}</Link></div>
				})
			}
		<Modal modalData={modalData}/>
    </>
  )
};

export default Exercises;
