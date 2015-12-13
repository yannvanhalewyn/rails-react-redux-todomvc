import React from 'react';
import App from "./components/app.jsx";
import { render } from 'react-dom';
import store from './store';
import { actions } from './store';

function renderApp() {
  render(<App todos={store.getState()} />, document.getElementById('content'));
}

renderApp();
store.subscribe(renderApp);
