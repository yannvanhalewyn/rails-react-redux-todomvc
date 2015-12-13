import { createStore } from 'redux';
import KeyMirror from 'keymirror';
import Immutable from 'immutable';

var Constants = KeyMirror({
  ADD_TODO: undefined,
  REMOVE_TODO: undefined,
  UPDATE_TODO: undefined,
  TOGGLE: undefined
});

// Load initial state
var initialState = []
try {
  initialState = JSON.parse(document.getElementById('initial-state').text)
} catch (e) {
  console.error("Error parsing json initial-state");
}

var storeCallback = (state, action) => {
  switch (action.type) {
    case Constants.ADD_TODO:
      var newId = Math.floor((Math.random() * 100));
      var newTodo = Immutable.Map({title: action.text, completed: false, id: newId})
      return state.push(newTodo);

    case Constants.TOGGLE:
      var idx = state.findIndex((t) => t.get('id') == action.id)
      return state.setIn([idx, 'completed'], !state.getIn([idx, 'completed']));

    default:
      return state;
  }
}

var store = createStore(storeCallback, Immutable.fromJS(initialState));

export const actions = {
  add: function(text) {
    store.dispatch({type: Constants.ADD_TODO, text: text})
  },
  toggle: function(id) {
    store.dispatch({type: Constants.TOGGLE, id: id})
  }
}
export default store;
