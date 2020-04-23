const mode = "test";
const exerciseServer = "https://gentle-fjord-22671.herokuapp.com";
const testServer = "http://localhost:8000";

const SERVER = mode === "test"? testServer : exerciseServer;
const POST_URL = 'window';

module.exports = {
  server: SERVER,
  post_url: POST_URL
}
