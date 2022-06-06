import { call, put } from 'redux-saga/effects';
import { getGenres } from 'redux/api';

function* fetchGenres(): Generator {
  try {
    const genresData = yield call(getGenres);
  } catch (e) {
    console.error(e);
  }
}
