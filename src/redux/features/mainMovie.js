import { createSlice } from "@reduxjs/toolkit";
import { getMainMovie } from "redux/actions/mainMovieActions";

const initialState = {
  main_movie: {},
  loading: false
};

export const mainMovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    setMainMovie: (state, { payload }) => {
      state.main_movie = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMainMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMainMovie.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.main_movie = payload;
      })
      .addCase(getMainMovie.rejected, (state) => {
        state.loading = false;
      })
  }
});

export const { setMainMovie } = mainMovieSlice.actions;

export default mainMovieSlice.reducer;
