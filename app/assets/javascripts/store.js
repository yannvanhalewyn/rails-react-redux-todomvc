import { createStore } from 'redux';
import Immutable       from 'immutable';
import API             from './api';
import Constants       from './constants';
import actions         from './actions';

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
      API.create(action.text).then(actions.fetchAllAndSync, actions.fetchAllAndSync);

      // Optimistic update in the meanwhile
      var newTodo = Immutable.Map({title: action.text, completed: false})
      return todos.push(newTodo)

    case Constants.TOGGLE:
      var path = [action.idx, 'completed'];
      return todos.setIn(path, !todos.getIn(path));

    case Constants.DESTROY:
      // Will resync if server failed to destroy todo
      API.destroy(todos.getIn([action.idx, 'id'])).fail(actions.fetchAllAndSync)
      // Optimistic update
      return todos.delete(action.idx)

    case Constants.TOGGLE_ALL:
      return todos.map((t) => t.set('completed', action.checked))

    case Constants.FETCHED:
      return Immutable.fromJS(action.data)

    default:
      return todos;
  }
}

var storeCallback = (state = initialState, action) => {
  return state.update('todos', (todos) => todosHandler(todos, action));
}

export default createStore(storeCallback);
