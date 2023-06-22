import React from "react";

import { Link } from "react-router-dom";

const youtubeText = {
  title: "코딩 유튜버 추천",
  desc: (
    <p>
      더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
      <br /> 구둑과 좋아요! 부탁드립니다.
    </p>
  ),
};

const youtubeSrc = [
  {
    img: "../../assets/images/youtube/you1.png",
    title: "유튜브11",
    num: "abcde1",
  },
  {
    img: "../../assets/images/youtube/you2.png",
    title: "유튜브22",
    num: "abcde12",
  },
  {
    img: "../../assets/images/youtube/you3.png",
    title: "유튜브33",
    num: "abcde123",
  },
  {
    img: "../../assets/images/youtube/you4.png",
    title: "유튜브44",
    num: "abcde1234",
  },
];

function YoutubeImte2({ src, title }) {
  return (
    <div>
      <img src={src} alt={title} />
    </div>
  );
}

const Youtube = (props) => {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>{youtubeText.title}</h3>
          <>{youtubeText.desc}</>
          <Link to="/youtube" className="button-red">
            자세히 보기
          </Link>
        </div>
        <div className="youtube__item">
          <div>
            {/* <img src={youtubeImg1} alt="유튜브1"/> */}

            <div className="youtube__item">
              {youtubeSrc.map((src, index) => (
                <YoutubeImte2 key={index} src={src.img} title={src.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
