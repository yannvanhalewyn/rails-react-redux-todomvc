import { createStore } from 'redux';
import KeyMirror       from 'keymirror';
import Immutable       from 'immutable';
import API             from './api';

var Constants = KeyMirror({
  ADD_TODO: undefined,
  DESTROY: undefined,
  UPDATE_TODO: undefined,
  TOGGLE: undefined,
  TOGGLE_ALL: undefined
});

// Load initial state
var initialTodos = []
try {
  initialTodos = JSON.parse(document.getElementById('initial-state').text)
} catch (e) {
  console.error("Error parsing json initial-state");
}
var initialState = Immutable.fromJS({todos: initialTodos})

var todosHandler = (todos, action) => {
  switch (action.type) {
    case Constants.ADD_TODO:
      // Will resync once terminated
      API.create(action.text).then(API.fetch, API.fetch);

      // Optimistic update in the meanwhile
      var newTodo = Immutable.Map({title: action.text, completed: false})
      return todos.push(newTodo)

    case Constants.TOGGLE:
      var path = [action.idx, 'completed'];
      return todos.setIn(path, !todos.getIn(path));

    case Constants.DESTROY:
      API.destroy(state.getIn(['todos', action.idx, 'id']))
      return todos.delete(action.idx)

    case Constants.TOGGLE_ALL:
      return todos.map((t) => t.set('completed', action.checked))

    case 'fetch':
      return Immutable.fromJS(action.data)

    default:
      return todos;
  }
}

var storeCallback = (state = initialState, action) => {
  return state.update('todos', (todos) => todosHandler(todos, action));
}

var store = createStore(storeCallback);

export const actions = {
  add: (text) => store.dispatch({type: Constants.ADD_TODO, text}),
  destroy: (idx) => store.dispatch({type: Constants.DESTROY, idx}),
  toggle: (idx) => store.dispatch({type: Constants.TOGGLE, idx}),
  toggleAll: (checked) => store.dispatch({type: Constants.TOGGLE_ALL, checked})
}
export default store;
