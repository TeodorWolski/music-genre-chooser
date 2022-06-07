import { takeEvery } from 'redux-saga/effects';
import { fetchGenres } from './genres';

function* rootSaga() {
  yield takeEvery('GENRES_FETCH_REQUESTED', fetchGenres);
}

export default rootSaga;
