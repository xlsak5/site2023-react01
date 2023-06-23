import React from "react";

import Tistory from "../../assets/images/intro/tistory.jpg";
import Github from "../../assets/images/intro/github.jpg";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, Autoplay]); // Swiper

const IntroSlider = () => {
  return (
    <div className="intro__slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 10000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="intro__tistory">
            <img src={Tistory} alt="나의 티스토리" />

            <div className="tistory__desc">
              <span className="first">
                6개월 동안 배우면서
                <br /> 정리한 블로그 입니다.
              </span>
              <span className="second">
                1달 동안 코딩테스트를 하면서 부족한 부분을
                <br /> 정리해서 올렸습니다.
              </span>
              <a href="#" title="나의 블로그로 이동하기">
                블로그로 이동하기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="intro__githube">
            <img src={Github} alt="나의 깃허브" />

            <div className="githube__desc">
              <span className="first">
                배우면서 만든 것들을
                <br /> 올린 깃허브 입니다.
              </span>
              <span className="second">
                1달 동안 코딩테스트를 하면서 부족한 부분을
                <br /> 정리해서 올렸습니다.
              </span>
              <a href="#" title="나의 블로그로 이동하기">
                블로그로 이동하기
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IntroSlider;
