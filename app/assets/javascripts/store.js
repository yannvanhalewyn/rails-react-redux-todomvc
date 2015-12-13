import { createStore } from 'redux';
import KeyMirror from 'keymirror';
import Immutable from 'immutable';

var Constants = KeyMirror({
  ADD_TODO: undefined,
  DESTROY: undefined,
  UPDATE_TODO: undefined,
  TOGGLE: undefined,
  TOGGLE_ALL: undefined
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

    case Constants.DESTROY:
      var idx = state.findIndex((t) => t.get('id') == action.id)
      return state.delete(idx)

    case Constants.TOGGLE_ALL:
      return state.map((t) => t.set('completed', action.checked))

    default:
      return state;
  }
}

var store = createStore(storeCallback, Immutable.fromJS(initialState));

export const actions = {
  add: (text) => store.dispatch({type: Constants.ADD_TODO, text}),
  destroy: (id) => store.dispatch({type: Constants.DESTROY, id}),
  toggle: (id) => store.dispatch({type: Constants.TOGGLE, id}),
  toggleAll: (checked) => store.dispatch({type: Constants.TOGGLE_ALL, checked})
}
export default store;
