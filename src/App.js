import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/layout/Header.jsx";
import Home from "./component/pages/Home.jsx";
import Intro from "./component/pages/IntroPage.jsx";
import PortPage from "./component/pages/PortPage.jsx";
import Portfolio from "./component/pages/PortPage.jsx";
import YoutubePage from "./component/pages/YoutubePage.jsx";
import UnsplashPage from "./component/pages/UnsplashPage.jsx";
import MoviePage from "./component/pages/MoviePage.jsx";
import Footer from "./component/layout/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header attr={["header__wrap", "nexon5", "bg-blue"]} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/port" element={<PortPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/unsplash" element={<UnsplashPage />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
      <Footer attr={"footer__wrap section gmarket5 bg-blue"} />
    </BrowserRouter>
  );
}

export default App;
