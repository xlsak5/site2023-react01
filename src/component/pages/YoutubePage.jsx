import React, { useEffect, useState } from "react";

import Contents from "../layout/Contents.jsx";
import ContTitle from "../layout/ContTitle.jsx";
import YoutubeSlider from "../youtube/YoutubeSlider.jsx";
import YoutubeSearch from "../youtube/YoutubeSearch.jsx";
import YoutubeTag from "../youtube/YoutubeTag.jsx";
import YoutubeCont from "../youtube/YoutubeCont.jsx";

const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  // async + await : 동기식
  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=coding&type=video&key=AIzaSyAys6Kt7lJa-dj-2i4zK4pZOhE0BXUdd-Q`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => error);
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=coding&type=video&key=AIzaSyAys6Kt7lJa-dj-2i4zK4pZOhE0BXUdd-Q"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Contents>
        <ContTitle title="youtube" />
        <YoutubeSlider />
        <YoutubeSearch onSearch={search} />
        <YoutubeTag onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
      </Contents>
    </>
  );
};

export default YoutubePage;
