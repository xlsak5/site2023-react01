import React from "react";

import Contents from "../layout/Contents.jsx";
import Slider from "../section/Slider.jsx";
import Intro from "../section/Intro.jsx";
import Port from "../section/Portfolio.jsx";
import Youtube from "../section/Youtube.jsx";
import Unsplash from "../section/Unsplash.jsx";
import Movie from "../section/Movie.jsx";

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap gmarket5" />
        <Intro attr={"intro__wrap section suseong"} />
        <Port attr={"port__wrap section center scoreDream bg-blue"} />
        <Youtube attr={"youtube__wrap section crown"} />
        <Unsplash attr={"unsplash__wrap section scoreDream bg-blue"} />
        <Movie attr={"movies__wrap section crown"} />
      </Contents>
    </>
  );
};

export default Home;
