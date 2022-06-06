import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genres: [],
  error: null,
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
});

export default genreSlice;
