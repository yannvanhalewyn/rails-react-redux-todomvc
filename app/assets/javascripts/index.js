import React       from 'react';
import App         from './components/app.jsx';
import { render }  from 'react-dom';
import store       from './store';
import { actions } from './store';

// Bootstrap the app
var target = document.getElementById('content');
var renderApp = () => render(<App state={store.getState()} />, target);
store.subscribe(renderApp);
renderApp();
