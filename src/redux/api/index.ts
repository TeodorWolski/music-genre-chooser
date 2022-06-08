import { Genre } from 'types/types';
import axios from 'axios';
import apiRequest from 'utils/apiRequest';

export const getGenres = async (): Promise<Genre[] | unknown> => {
  try {
    const { data } = await apiRequest('genres');
    return data;
  } catch (err) {
    return err;
  }
};

export const createGenre = async ({
  id,
  genre,
  artist,
  url,
  image,
}: Genre): Promise<Genre> => {
  axios.put(`/genres/create/:${id}`);
  return { genre, artist, url, image, id };
};
