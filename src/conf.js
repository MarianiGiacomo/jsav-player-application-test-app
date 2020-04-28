const mode = "test";
const exerciseServer = "https://gentle-fjord-22671.herokuapp.com";
const testServer = "http://localhost:8000";

const SERVER = mode === "test"? testServer : exerciseServer;
const POST_URL = 'window';

const EXERCISES = [
  {
    title: "Insertion Sort",
    SERVER,
    path: "/exercises/insertionSort.html",
    submission_url: "",
    POST_URL,
    max_points: 20,
    uid: "test user",
    ordinal_number: 1
  },
  {
    title: "Insertion Sort without Swap",
    SERVER,
    path: "/exercises/insertionSortWithoutSwap.html",
    submission_url: "",
    POST_URL,
    max_points: 20,
    uid: "test user",
    ordinal_number: 2
  }
]

module.exports = {
  server: SERVER,
  post_url: POST_URL,
  exercises: EXERCISES
}
