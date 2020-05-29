const mode = "test";
const exerciseServer = "https://gentle-fjord-22671.herokuapp.com";
const testServer = "http://localhost:8000";

const SERVER = mode === "test"? testServer : exerciseServer;
const POST_URL = 'window';

const EXERCISES = [
  {
    title: "Insertion Sort",
    server: SERVER,
    path: "/exercises/insertionSort.html",
    submission_url: "",
    post_url: POST_URL,
    max_points: 20,
    uid: "testuser",
    ordinal_number: 1,
  },
  {
    title: "Insertion Sort without Swap",
    server: SERVER,
    path: "/exercises/insertionSortWithoutSwap.html",
    submission_url: "",
    post_url: POST_URL,
    max_points: 20,
    uid: "testuser",
    ordinal_number: 2,
  },
  {
    title: "Heap Build",
    server: SERVER,
    path: "/exercises/heapbuildPRO.html",
    submission_url: "",
    post_url: POST_URL,
    max_points: 20,
    uid: "testuser",
    ordinal_number: 3,
  },
  {
    title: "Dijkstra's algorithm",
    server: SERVER,
    path: "/exercises/DijkstraPE.html",
    submission_url: "",
    post_url: POST_URL,
    max_points: 20,
    uid: "testuser",
    ordinal_number: 34
  },
  {
    title: "Evaluating Postfix Expression",
    server: SERVER,
    path: "/exercises/postfixEvaluationPRO.html",
    submission_url: "",
    post_url: POST_URL,
    max_points: 20,
    uid: "testuser",
    ordinal_number: 35
  },
  {
    title: "Binary Search Tree - Search",
    server: SERVER,
    path: "/exercises/BSTinsertPRO-ODSA.html",
    submission_url: "",
    post_url: POST_URL,
    max_points: 20,
    uid: "testuser",
    ordinal_number: 36
  }
]

module.exports = {
  server: SERVER,
  post_url: POST_URL,
  exercises: EXERCISES
}
