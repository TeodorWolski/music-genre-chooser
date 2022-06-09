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

export const createGenre = async (genre: Genre): Promise<Genre> => {
  await axios.post(`/genres/create/:${genre.id}`);
  return genre;
};
