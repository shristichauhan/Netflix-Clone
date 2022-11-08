import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./RowStyles.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div className="row">
        <p className="title">{title}</p>
        <div className="posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`poster_image ${isLarge && "isLarge"}`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
