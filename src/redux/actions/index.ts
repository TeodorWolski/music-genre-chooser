import { Genre } from 'types/types';

export const fetchGenres = () => ({ type: 'GENRES_FETCH_REQUESTED' });

export const addGenre = ({ id, genre, url, image, artist }: Genre) => ({
  type: 'CREATE_GENRE_REQUESTED',
  payload: { id, genre, url, image, artist },
});
