// 선생님꺼
import React, { useEffect, useState } from "react";

import Contents from "../layout/Contents";
import UnsplashSlider from "../unsplash/UnsplashSlider";
import UnsplashSearch from "../unsplash/UnsplashSearch";
import UnsplashTag from "../unsplash/UnsplashTag";
import UnsplashCont from "../unsplash/UnsplashCont";
import ContTitle from "../layout/ContTitle";

const UnsplashPage = () => {
  const [images, setImages] = useState([]);

  // async + await : 동기식
  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=r6e6_4ZwiAV0Dc0WvGopVnh2YGoPLi5X-C52UOikVNc&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => error);
  };
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.unsplash.com/photos?client_id=r6e6_4ZwiAV0Dc0WvGopVnh2YGoPLi5X-C52UOikVNc&per_page=30",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Contents>
      <ContTitle title="unsplash" />
      <UnsplashSearch onSearch={search} />
      <UnsplashTag onSearch={search} />
      <UnsplashCont images={images} />
    </Contents>
  );
};
export default UnsplashPage;

// 내꺼
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Contents from "../layout/Contents.jsx";
// import ContTitle from "../layout/ContTitle.jsx";
// import UnsplashSlider from "../unsplash/UnsplashSlider.jsx";
// import UnsplashSearch from "../unsplash/UnsplashSearch.jsx";
// import UnsplashTag from "../unsplash/UnsplashTag.jsx";
// import UnsplashCont from "../unsplash/UnsplashCont.jsx";

// const UnsplashPage = () => {
//   const [images, setImages] = useState([]);

//   // 동기식
//   const search = async (query) => {
//     await fetch(
//       // RESTFULL API
//       `https://api.unsplash.com/search?client_id=1A5wx-s_geGW4wkODkps0CydKGxaxYPUTMbYzK8FDm0&per_page=30&query=${query}`
//     )
//       .then((response) => response.json())
//       .then((result) => setImages(result.results))
//       .catch((error) => console.log("error", error));
//   };

//   useEffect(() => {
//     var requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch(
//       // RESTFULL API
//       "https://api.unsplash.com/photos?client_id=1A5wx-s_geGW4wkODkps0CydKGxaxYPUTMbYzK8FDm0&per_page=30",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => setImages(result))
//       .catch((error) => console.log("error", error));
//   }, []);

//   return (
//     <>
//       <Contents>
//         <ContTitle title="unsplash" />
//         <UnsplashSlider />
//         <UnsplashSearch onSearch={search} />
//         <UnsplashTag />
//         <UnsplashCont images={images} />
//       </Contents>
//     </>
//   );
// };

// export default UnsplashPage;
