import playIcon from "assets/images/icons/play.png";
import { MORE_INFO, PLAY, PAUSE } from "constants";
import { useState } from "react";

export const MovieDescription = ({ movie }) => {
  const [playVideo, setPlayVideo] = useState(false);

  const hours = Math.floor(movie?.Duration / 3600);
  const minutes = Math.floor((movie?.Duration % 3600) / 60);
  const duration = `${!!hours ? `${hours}h` : ""} ${minutes}m`;

  const handlePlayVideo = () => {
    setPlayVideo(!playVideo);
  }

  return (
    <div className="movie_description">
      {playVideo &&
        <video autoPlay={true} loop className="cover_video" controls>
          <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" />
        </video>
      }
      <div className="category_field">
        <p className="category_name">{movie?.Category}</p>
      </div>
      <div className="title_image">
        <img src={`${movie?.TitleImage}`} alt="Title" className="image" />
      </div>
      <div className="movie_info">
        <div>{movie?.ReleaseYear}</div>
        <div>{movie?.MpaRating}</div>
        <div>{duration}</div>
      </div>
      <div className="move_info">
        {movie?.Description}
      </div>
      <div  className="buttons_field">
        <button className="play_btn" onClick={handlePlayVideo}>
          <img src={playIcon} alt="Play"  className="play_icon"/>
          <span className="play_btn_name">{playVideo ? PAUSE : PLAY}</span>
        </button>
        <button className="more_info_btn">{MORE_INFO}</button>
      </div>
    </div>
  );
};