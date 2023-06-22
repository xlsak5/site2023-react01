import React from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, Autoplay]); // Swiper

// import "swiper/css";

const MovieImg = ({ movie }) => {
  return (
    <a href={`https://api.themoviedb.org/3/movie/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt=""
      />
    </a>
  );
};

const MovieSlider = ({ movies }) => {
  return (
    <div className="movie__slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {movies.map((moive, index) => (
          <SwiperSlide key={index}>
            <MovieImg movie={moive} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
