import KeyMirror from 'keymirror';

export const ActionTypes = KeyMirror({
  ADD_TODO: undefined,
  DESTROY: undefined,
  UPDATE: undefined,
  TOGGLE: undefined,
  TOGGLE_ALL: undefined,
  CLEAR_COMPLETED: undefined,

  // Server
  FETCHED: undefined,

  // Filter type
  SET_FILTER_TYPE: undefined
});

export const FilterTypes = KeyMirror({
  ALL: undefined,
  COMPLETED: undefined,
  ACTIVE: undefined
})
