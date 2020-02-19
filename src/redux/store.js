import { createStore } from 'redux';
const INITIAL_STATE = { location: 0 }
const store = createStore(locationReducer);

function locationReducer(state=INITIAL_STATE, action) {
  return state;
}

export default store;