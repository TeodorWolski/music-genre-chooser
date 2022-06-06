import { Genre } from 'types/types';
import apiRequest from 'utils/apiRequest';

export const getGenres = async (): Promise<Genre[] | unknown> => {
  try {
    const { data } = await apiRequest('genres');
    return data;
  } catch (err) {
    return err;
  }
};
