import React from "react";

import { Link } from "react-router-dom";

const unsplashText = {
  title: "이미지 다운로드 추천",
  desc: (
    <p>
      더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
      <br /> 구독과 좋아요! 부탁드립니다.
    </p>
  ),
};

const youtubeSrc = [
  {
    img: "../../assets/images/unsplash/unsplash1.png",
    title: "유튜브1",
    num: "abcde1",
  },
  {
    img: "../../assets/images/unsplash/unsplash2.png",
    title: "유튜브2",
    num: "abcde12",
  },
  {
    img: "../../assets/images/unsplash/unsplash3.png",
    title: "유튜브3",
    num: "abcde123",
  },
  {
    img: "../../assets/images/unsplash/unsplash4.png",
    title: "유튜브4",
    num: "abcde1234",
  },
];

function UnsplashItem({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}

const Unsplash = (props) => {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>{unsplashText.title}</h3>
          <p>{unsplashText.desc}</p>
          <Link to="/" className="button-blue">
            자세히 보기
          </Link>
        </div>
        <div className="unsplash__item">
          {youtubeSrc.map((src, index) => (
            <UnsplashItem key={index} img={src.img} title={src.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
