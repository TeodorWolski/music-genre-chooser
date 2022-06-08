import { createGenre as createGenreFunction } from 'redux/api/index';
import { put } from 'redux-saga/effects';
import { getGenres } from 'redux/api';
import { Genre } from 'types/types';

export function* fetchGenres() {
  const genres: Genre[] = yield getGenres();
  yield put({ type: 'GENRES_FETCH_SUCCEEDED', payload: genres });
}

export function* createGenre({
  payload,
}: {
  type: 'CREATE_GENRE_REQUESTED';
  payload: Genre;
}) {
  yield createGenreFunction(payload);
  yield put({ type: 'GENRES_FETCH_REQUESTED' });
}
