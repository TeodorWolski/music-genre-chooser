import { takeEvery } from 'redux-saga/effects';
import { fetchGenres, createGenre } from './genres';

function* rootSaga() {
  yield takeEvery('GENRES_FETCH_REQUESTED', fetchGenres);
  yield takeEvery('CREATE_GENRE_REQUESTED', createGenre);
}

export default rootSaga;
