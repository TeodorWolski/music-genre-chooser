import { Genre } from 'types/types';

const genresReducer = (
  state: Genre[] = [],
  action: { type: 'GENRES_FETCH_SUCCEEDED'; payload: Genre[] }
) => {
  switch (action.type) {
    case 'GENRES_FETCH_SUCCEEDED':
      return action.payload;
    default:
      return state;
  }
};

export default genresReducer;
