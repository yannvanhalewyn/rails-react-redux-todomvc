import { createStore } from 'redux';
import KeyMirror from 'keymirror';

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
  console.log("action", action);
  switch (action.type) {
    case Constants.TOGGLE:
      for (var todo of state) {
        if (todo.id == action.id) {
          todo.completed = !todo.completed;
        }
      }

    default:
      return state;
  }
}

var store = createStore(storeCallback, initialState);

export const actions = {
  add: function(text) {
    store.dispatch({type: Constants.ADD_TODO, text: text})
  },
  toggle: function(id) {
    store.dispatch({type: Constants.TOGGLE, id: id})
  }
}
export default store;
