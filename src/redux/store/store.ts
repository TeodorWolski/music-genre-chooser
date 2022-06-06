import { configureStore } from '@reduxjs/toolkit';
import genreSlice from './genreSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'redux/sideeffects/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    genre: genreSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

// sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
