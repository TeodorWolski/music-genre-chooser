import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
  genres: [],
  error: null,
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    fetchSuccess: (state: any, { payload }) => {
      const { results } = payload;
      state.data.push(...results);
    },
    fetchFailure: (state, { payload }) => {
      state.error = payload;
    },
  },
});

const actions = {
  fetch: createAction('genres/fetch'),
  fetchSuccess: createAction('genres/fetchSuccess'),
  fetchFailure: createAction('genres/fetchFailure'),
};

export { actions };

export default genreSlice;
