import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./BannerStyles.css";

const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.NetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
      }}
    >
      <div className="banner-container">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">Info</button>
        </div>
        <p className="description">{movie?.overview}</p>
      </div>
      <div className="fadebottom" />
    </header>
  );
};

export default Banner;
