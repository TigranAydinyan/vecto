import { configureStore } from "@reduxjs/toolkit";
import mainMovieReducer from "./features/mainMovie";
import moviesReducer from "./features/movies";

export const store = configureStore({
  reducer: {
    mainMovieReducer,
    moviesReducer,
  },
});