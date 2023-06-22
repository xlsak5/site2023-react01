import React from "react";

import { Link } from "react-router-dom";

const movieTitle = {
  title: "코딩 영화 추천",
  desc: (
    <p>
      영화는 컴퓨터 과학, 인공 지능, 해킹, 가상 현실, 로봇 공학 등과
      <br /> 관련된 주제를 다루며, 종종 과학 기술 요소를 역동적이고 시각적으로
      표현합니다.
    </p>
  ),
};

const movieSrc = [
  {
    img: "../../assets/images/movie/movie1.png",
    title: "코딩 영화1",
    num: "abcde1",
  },
  {
    img: "../../assets/images/movie/movie2.jpg",
    title: "코딩 영화2",
    num: "abcde12",
  },
  {
    img: "../../assets/images/movie/movie3.jpg",
    title: "코딩 영화3",
    num: "abcde123",
  },
  {
    img: "../../assets/images/movie/movie4.jpg",
    title: "코딩 영화4",
    num: "abcde1234",
  },
];

function MovieItem2({ src, title }) {
  return (
    <div>
      <img src={src} alt={title} />
    </div>
  );
}

const Movie = (props) => {
  return (
    <section id="moviesSection" className={props.attr}>
      <div className="movies__inner container">
        <div className="movies__text">
          <h3>{movieTitle.title}</h3>
          <p>{movieTitle.desc}</p>
          <Link to="/" className="button-green">
            자세히 보기
          </Link>
        </div>
        <div className="movies__item">
          {movieSrc.map((item, index) => (
            <MovieItem2
              key={index}
              src={item.img}
              title={item.title}
              num={item.num}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movie;
