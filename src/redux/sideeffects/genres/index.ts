import { put } from 'redux-saga/effects';
import { getGenres } from 'redux/api';
import { Genre } from 'types/types';

export function* fetchGenres() {
  const genres: Genre[] = yield getGenres();
  yield put({ type: 'GENRES_FETCH_SUCCEEDED', payload: genres });
}
