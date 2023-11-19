import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainMovieApi } from "services/mainMovieApis";

export const getMainMovie = createAsyncThunk(
  "get_movie",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await mainMovieApi.getMovie();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const getAllMovies = createAsyncThunk(
  "get_all",
  async ({ limit }, { rejectWithValue }) => {
    try {
      const { data } = await mainMovieApi.getAllMovies(limit);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
)

export const getMovieById = createAsyncThunk(
  "getById",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await mainMovieApi.getMovieById(id);
      return data[0];
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
)