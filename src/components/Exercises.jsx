import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";

const Exercises = ({}) => {
  const mode = "test";
  const exerciseServer = "https://gentle-fjord-22671.herokuapp.com";
  const testServer = "http://localhost:8000"
  const server = mode === "test"? testServer : exerciseServer;
  const [ animationData, setAnimationData ] = useState("");
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

  window.addEventListener("message", receiveMessage, false);

  return (
    <div>
      <div className="exercise-content">
      { exercises.map( exercise => {
        return <iframe title={ exercise.title } src={constructUrl(exercise)}></iframe>
      }) }
      </div>
      <button id="modalButton" onClick={ openModal }>Replay submission</button>
      <Modal content={animationData}/>
    </div>
  )

  function openModal() {
    document.getElementById('modalWindow').style.display = "block";
  }

  function receiveMessage(event) {
    if (event.origin !== server)
      return;
    try {
      console.log(event.data)
      axios.post(server, event.data)
      .then(response => {
        let data = response.data;
        document.getElementById('modalWindow').style.display = "block";
        setAnimationData(data);
        //document.getElementById('player-container').innerHTML = data;
      })
    } catch (err) {
      console.warn(err);
    }
  }
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
