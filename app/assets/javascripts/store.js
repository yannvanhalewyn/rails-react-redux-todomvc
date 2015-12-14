import { createStore }            from 'redux';
import Immutable                  from 'immutable';
import API                        from './api';
import {ActionTypes, FilterTypes} from './constants';
import actions                    from './actions';

// Load initial state
var initialTodos = []
try {
  initialTodos = JSON.parse(document.getElementById('initial-state').text)
} catch (e) {
  console.error("Error parsing json initial-state");
}
var initialState = Immutable.fromJS({filterType: FilterTypes.ALL, todos: initialTodos})

/*
 * Every switch case will return an optimistic update to the redux store causing
 * an immediate update in the UI. If the server responds with an error, eg when
 * the api call's promise fail handler, the data will be refetched and restored!
 */
var todosHandler = (todos, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      API.create(action.text).then(actions.fetchAllAndSync, actions.fetchAllAndSync);
      var newTodo = Immutable.Map({title: action.text, completed: false})
      return todos.push(newTodo)

    case ActionTypes.TOGGLE:
      var completed = !todos.getIn([action.idx, 'completed']);
      var id = todos.getIn([action.idx, 'id']);
      API.update(id, {completed}).fail(actions.fetchAllAndSync);
      return todos.setIn([action.idx, 'completed'], completed);

    case ActionTypes.DESTROY:
      API.destroy(todos.getIn([action.idx, 'id'])).fail(actions.fetchAllAndSync)
      return todos.delete(action.idx)

    case ActionTypes.TOGGLE_ALL:
      todos.forEach((t) => {
        // Persist to server if needed. Will resync on error
        if (t.get('completed') != action.checked)
          API.update(t.get('id'), {completed: action.checked})
            .fail(actions.fetchAllAndSync)
      })
      return todos.map((t) => t.set('completed', action.checked))

    case ActionTypes.UPDATE:
      API.update(todos.getIn([action.idx, 'id']), {title: action.text})
        .fail(actions.fetchAllAndSync)
      return todos.setIn([action.idx, 'title'], action.text)

    // Primarily used for when error occured and data is
    // refetched from the server
    case ActionTypes.FETCHED:
      return Immutable.fromJS(action.data)

    default:
      return todos;
  }
}

var storeCallback = (state = initialState, action) => {
  if (action.type == ActionTypes.SET_FILTER_TYPE)
    return state.set('filterType', action.filterType)
  return state.update('todos', (todos) => todosHandler(todos, action));
}

export default createStore(storeCallback);
