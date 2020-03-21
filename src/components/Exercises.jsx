import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const testServer = "http://localhost:8000"
const exerciseServer = "https://gentle-fjord-22671.herokuapp.com";
const exercisePath = "/exercises/"
const insertionSort = `${testServer}${exercisePath}insertionSort.html`

let urlWithParams = constructUrl( insertionSort, getParams() )

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (event.origin !== testServer)
    return;
  try {
    console.log(event.data)
    axios.post(testServer, event.data)
    .then(response => {
      let data = response.data;
      document.getElementById('player-container').innerHTML = data;
    })
  } catch (err) {
    console.warn(err);
  }
}

const Exercises = ({}) => (
  <div>
    <iframe title="insertion-sort" src={urlWithParams}></iframe>
    <div id="player-container">
    </div>
  </div>
);

function getParams() {
  let submission_url = "";
  let post_url = "window";
  let max_points = 20;
  let uid = "test-user"
  let ordinal_number = 1;
  return {
    submission_url,
    post_url,
    max_points,
    uid,
    ordinal_number
  }
}

function constructUrl(url, params) {
  let {
    submission_url,
    post_url,
    max_points,
    uid,
    ordinal_number
  } = { ...params };
  return  `${url}?submission_url=${submission_url}
    &post_url=${post_url}&max_points=${max_points}&uid=${uid}&ordinal_number=${ordinal_number}`;
}

export default Exercises;
