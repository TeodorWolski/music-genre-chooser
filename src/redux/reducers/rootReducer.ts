import { combineReducers } from '@reduxjs/toolkit';
import genresReducer from './genresReducer';
import selectReducer from './selectReducer';

export const rootReducer = combineReducers({
  genres: genresReducer,
  select: selectReducer,
});
