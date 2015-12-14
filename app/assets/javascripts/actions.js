import store     from './store';
import Constants from './constants';

export default {
  add: (text) => store.dispatch({type: Constants.ADD_TODO, text}),
  destroy: (idx) => store.dispatch({type: Constants.DESTROY, idx}),
  toggle: (idx) => store.dispatch({type: Constants.TOGGLE, idx}),
  toggleAll: (checked) => store.dispatch({type: Constants.TOGGLE_ALL, checked})
}

