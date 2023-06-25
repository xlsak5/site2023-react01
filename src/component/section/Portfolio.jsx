import React from "react";

import port1 from "../../assets/images/port/Bust/peep-73.png";
import sport1 from "../../assets/images/port/Bust/peep-1.svg";

import port2 from "../../assets/images/port/Bust/peep-52.png";
import sport2 from "../../assets/images/port/Bust/peep-90.svg";

import port3 from "../../assets/images/port/Bust/peep-43.png";
import sport3 from "../../assets/images/port/Bust/peep-91.svg";

import port4 from "../../assets/images/port/Bust/peep-54.png";
import sport4 from "../../assets/images/port/Bust/peep-94.svg";

import port5 from "../../assets/images/port/Bust/peep-55.png";
import sport5 from "../../assets/images/port/Bust/peep-95.svg";

import port6 from "../../assets/images/member/Bust/peep-56.png";
import sport6 from "../../assets/images/port/Bust/peep-96.svg";

const portText = [
  {
    portImg: "../../assets/images/port/Bust/peep-73.png",
    iconImg: "../../assets/images/port/Bust/peep-1.svg",
    title: "안교남 포트폴리오",
    desc: "프론트앤드 개발자 포트폴리오",
  },
  {
    portImg: "../../assets/images/port/Bust/peep-52.png",
    iconImg: "../../assets/images/port/Bust/peep-90.svg",
    title: "안교남 포트폴리오",
    desc: "프론트앤드 개발자 포트폴리오",
  },
  {
    portImg: "../../assets/images/port/Bust/peep-43.png",
    iconImg: "../../assets/images/port/Bust/peep-91.svg",
    title: "안교남 포트폴리오",
    desc: "프론트앤드 개발자 포트폴리오",
  },
  {
    portImg: "../../assets/images/port/Bust/peep-54.png",
    iconImg: "../../assets/images/port/Bust/peep-94.svg",
    title: "안교남 포트폴리오",
    desc: "프론트앤드 개발자 포트폴리오",
  },
  {
    portImg: "../../assets/images/port/Bust/peep-55.png",
    iconImg: "../../assets/images/port/Bust/peep-95.svg",
    title: "안교남 포트폴리오",
    desc: "프론트앤드 개발자 포트폴리오",
  },
  {
    portImg: "../../assets/images/member/Bust/peep-56.png",
    iconImg: "../../assets/images/port/Bust/peep-96.svg",
    title: "안교남 포트폴리오",
    desc: "프론트앤드 개발자 포트폴리오",
  },
];

function PortDesc({ portImg, iconImg, title, desc }) {
  return (
    <div className="port">
      <figure className="member__header">
        <img src={portImg} alt={title} />
      </figure>
      <div className="port__body">
        <span>
          <img src={iconImg} alt={title} />
        </span>
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Portfolio(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>포트폴리오</h3>
      <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 포트폴리오입니다.</p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li>
              <a href="/" className="active">
                21기
              </a>
            </li>
            <li>
              <a href="/">22기</a>
            </li>
            <li>
              <a href="/">23기</a>
            </li>
            <li>
              <a href="/">24기</a>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          {portText.map((text, index) => (
            <PortDesc
              key={index}
              portImg={text.portImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
            />
          ))}

          {/* <div className="port">
                    <figure className="member__header">
                        <img src={port1} alt="멤버1"/>
                    </figure>
                    <div className="port__body">
                        <span>
                            <img src={sport1} alt="멤버_동그라미"/>
                        </span>
                        <div>
                            <h4>안교남 포트폴리오</h4>
                            <p>프론트앤드 개발자 포트폴리오</p>
                        </div>
                    </div>
                </div> */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
