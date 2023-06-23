import React from "react";
import { Link } from "react-router-dom";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={youtube.snippet.thumbnails.medium.url}
          alt={youtube.snippet.title}
        />
        <span className="ellipsis">{youtube.snippet.title}</span>
      </a>
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <>
      <section id="youtubePage" className="container">
        <div className="youtube__page">
          <div className="youtube__slider">youtube__slider</div>
          <div className="youtube__tag">
            <ul>
              <li>
                <Link to="#">코딩 애플</Link>
              </li>
              <li>
                <Link to="#">리액트</Link>
              </li>
              <li>
                <Link to="#">Next.js</Link>
              </li>
              <li>
                <Link to="#">JavaScript</Link>
              </li>
              <li>
                <Link to="#">프론트엔드</Link>
              </li>
            </ul>
          </div>
          <div className="youtube__cont">
            <ul>
              {youtubes.map((youtube, index) => (
                <YoutubeItem key={index} youtube={youtube} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default YoutubeCont;
