import React from 'react';
import App from "./components/app.jsx";
import { render } from 'react-dom';

$(document).ready(() => {
  var state = []
  try {
    state = JSON.parse(document.getElementById('initial-state').text)
  } catch (e) {
    console.error("Error parsing json initial-state");
  }
  render(<App todos={state} />, document.getElementById('content'));
})
