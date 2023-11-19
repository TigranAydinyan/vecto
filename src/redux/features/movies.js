import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies, getMovieById } from "redux/actions/mainMovieActions";

const initialState = {
  movies: [],
  movie_by_id: {},
  loading: false,
  by_id_loading: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.movies = payload;
      })
      .addCase(getAllMovies.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getMovieById.pending, (state) => {
        state.by_id_loading = true;
      })
      .addCase(getMovieById.fulfilled, (state, { payload }) => {
        state.by_id_loading = false;
        state.movie_by_id = payload;
      })
      .addCase(getMovieById.rejected, (state) => {
        state.by_id_loading = false;
      })
  }
});

export default moviesSlice.reducer;