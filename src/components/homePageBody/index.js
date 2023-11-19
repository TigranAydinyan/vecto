import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MovieDescription, MoviesSection } from "components";
import { getAllMovies, getMainMovie, getMovieById } from "redux/actions/mainMovieActions";
import { setMainMovie } from "redux/features/mainMovie";

export const HomeBody = () => {
  const mainMovie = useSelector((state) => state.mainMovieReducer.main_movie);
  const movies = useSelector((state) => state.moviesReducer.movies);
  const movieById = useSelector((state) => state.moviesReducer.movie_by_id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("movie")) {
      dispatch(getMovieById({ id: sessionStorage.getItem("movie") }));
    } else {
      dispatch(getMainMovie());
    }
    dispatch(getAllMovies({ limit: 50 }));
  }, [])

  useEffect(() => {
    dispatch(setMainMovie(movieById))
  }, [movieById])

  return (
    <div className="home_body">
      <MovieDescription movie={mainMovie} />
      <MoviesSection movies={movies} />
    </div>
  );
};