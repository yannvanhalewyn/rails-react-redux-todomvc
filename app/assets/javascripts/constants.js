import KeyMirror from 'keymirror';

export const ActionTypes = KeyMirror({
  ADD_TODO: undefined,
  DESTROY: undefined,
  UPDATE: undefined,
  TOGGLE: undefined,
  TOGGLE_ALL: undefined,

  // Server
  FETCHED: undefined
});

export const FilterTypes = KeyMirror({
  ALL: undefined,
  COMPLETED: undefined,
  ACTIVE: undefined
})
