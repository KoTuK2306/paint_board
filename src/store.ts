import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as canvasReducer } from 'slices';

const rootReducer = combineReducers({
  canvasReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
