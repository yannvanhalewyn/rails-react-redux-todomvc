import store     from './store';
import Constants from './constants';
import API       from './api';

export default {
  // Client
  add: (text) => store.dispatch({type: Constants.ADD_TODO, text}),
  destroy: (idx) => store.dispatch({type: Constants.DESTROY, idx}),
  toggle: (idx) => store.dispatch({type: Constants.TOGGLE, idx}),
  toggleAll: (checked) => store.dispatch({type: Constants.TOGGLE_ALL, checked}),
  updateTitle: (idx, text) => store.dispatch({type: Constants.UPDATE, idx, text}),

  // Server
  fetchAllAndSync: () => {
    return API.fetch().then((data) => store.dispatch({type: Constants.FETCHED, data}))
  }
}

