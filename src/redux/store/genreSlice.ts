import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genres: [],
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
});

export default genreSlice;
