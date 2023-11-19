import { TRENDING_NOW } from "constants";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useDispatch } from "react-redux";
import { getMovieById } from "redux/actions/mainMovieActions";


export const MoviesSection = ({ movies }) => {
  const dispatch = useDispatch();

  const swiperOptions = {
    spaceBetween: 15,
    slidesPerView: 3,
    breakpoints: {
      1280: {
        slidesPerView: 8,
      },
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 2,
      }
    }
  }

  const handleMovieClick = (id) => {
    sessionStorage.setItem("movie", id);
    dispatch(getMovieById({ id }));
  }

  return (
    <div className="movies_section">
      <p className="trending_now">{TRENDING_NOW}</p>
      <div>
        <Swiper {...swiperOptions}>
          {movies?.map((movie) => (
            <SwiperSlide key={movie?.id}>
              <img
                src={movie?.CoverImage}
                alt="Movie"
                className="movie_image"
                onClick={() => handleMovieClick(movie.Id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
