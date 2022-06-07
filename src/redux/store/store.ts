import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'redux/sideeffects/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
