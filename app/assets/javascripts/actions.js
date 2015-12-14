import store         from './store';
import {ActionTypes} from './constants';
import API           from './api';

export default {
  // Client
  add: (text) => store.dispatch({type: ActionTypes.ADD_TODO, text}),
  destroy: (idx) => store.dispatch({type: ActionTypes.DESTROY, idx}),
  toggle: (idx) => store.dispatch({type: ActionTypes.TOGGLE, idx}),
  toggleAll: (checked) => store.dispatch({type: ActionTypes.TOGGLE_ALL, checked}),
  updateTitle: (idx, text) => store.dispatch({type: ActionTypes.UPDATE, idx, text}),
  clearCompleted: () => store.dispatch({type: ActionTypes.CLEAR_COMPLETED}),

  // Server
  fetchAllAndSync: () => {
    return API.fetch().then((data) => store.dispatch({type: ActionTypes.FETCHED, data}))
  },

  // FilterType
  setFilterType: (filterType) => {
    store.dispatch({type: ActionTypes.SET_FILTER_TYPE, filterType})
  }
}

