import React, { useEffect, useState } from "react";

import Contents from "../layout/Contents.jsx";
import MovieSlider from "../movie/MovieSlider.jsx";
import MovieSearch from "../movie/MovieSearch.jsx";
import MovieTag from "../movie/MovieTag.jsx";
import MovieCont from "../movie/MovieCont.jsx";
import ContTitle from "../layout/ContTitle.jsx";

const MoviePage = () => {
  const [movie, setMovie] = useState([]);

  // async + await : 동기식
  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=true&query=${query}&api_key=ec3680ba547ae5f7c2f1143ff31a8746`
    )
      .then((response) => response.json())
      .then((result) => setMovie(result.results))
      .catch((error) => error);
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ec3680ba547ae5f7c2f1143ff31a8746&Limit=18"
    )
      .then((response) => response.json())
      .then((result) => setMovie(result.results))
      .then((error) => error);
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="movie" />
        <MovieSlider movies={movie} />
        <MovieSearch onSearch={search} />
        <MovieTag />
        <MovieCont movie={movie} />
      </Contents>
    </>
  );
};

export default MoviePage;
