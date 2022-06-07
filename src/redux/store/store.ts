import { createStore, applyMiddleware } from 'redux';
import genresReducer from 'redux/reducers/genresReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'redux/sideeffects/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  genresReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
