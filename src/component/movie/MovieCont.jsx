import React from "react";
import MovieItem from "./movieItem";

const MovieCont = ({ movie }) => {
  return (
    <div className="movie__cont container">
      <ul>
        {movie.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieCont;
