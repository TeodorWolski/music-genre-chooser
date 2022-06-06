import { configureStore } from '@reduxjs/toolkit';
import genreSlice from './genreSlice';
import createSagaMiddleware from 'redux-saga';

export const store = configureStore({
  reducer: {
    genre: genreSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
