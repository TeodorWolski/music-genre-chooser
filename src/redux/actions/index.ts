import { Genre } from 'types/types';

export const fetchGenres = () => ({ type: 'GENRES_FETCH_REQUESTED' });

export const addGenre = (genre: Genre | object) => ({
  type: 'CREATE_GENRE_REQUESTED',
  payload: genre,
});
