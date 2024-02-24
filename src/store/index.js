import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Cached } from 'App/reducers/cached';
import { LOCAL_STORAGE_NAME } from 'constants/index.js';

import { loadState, saveState, clearState } from './localStorage';

const mergedReducers = {
  Cached
};

// update localStorage
const cachedMiddleware = store => next => action => {
  switch (action.type) {
    case 'SET_CACHED_DATA':
      next(action);
      saveState(store.getState());
      break;
    default:
      next(action);
  }
};

const appReducer = combineReducers(mergedReducers);
const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    // eslint-disable-next-line
    state = action.payload;
    // clear localStorage.
    clearState();
  }
  return appReducer(state, action);
};
const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(LOCAL_STORAGE_NAME),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cachedMiddleware)
});
// eslint-disable-next-line
export default store;
