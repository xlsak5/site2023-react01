import React from "react";

const IntroSkill = () => {
  return (
    <section id="introSkill" className="introSkill bg-blue">
      <h3 className="blind">프론트앤드 커리큘럼 과정 소개</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>My Skill</span>
          <h3>
            나의 스킬
          </h3>
          <p>
            프론트앤드 개발자로 취업하기 위한<br/> 전문 과정입니다.
          </p>
        </div>
        <div className="intro__desc">
          <div>
            <h4 className="icon-bg1">React.js</h4>
            <p>
              리액트(React)는 페이스북에서 개발된 자바스크립트 라이브러리입니다.
              이는 사용자 인터페이스를 구축하기 위해 사용됩니다.
            </p>
          </div>
          <div>
            <h4 className="icon-bg2">Vue.js</h4>
            <p>
              Vue.js는 사용자 인터페이스를 구축하기 위한 프로그레시브
              자바스크립트 프레임워크입니다.
            </p>
          </div>
          <div>
            <h4 className="icon-bg3">Next.js</h4>
            <p>
              Next.js는 React의 기능을 확장하여 개발자가 웹 애플리케이션을
              빠르고 효율적으로 구축할 수 있도록 도와줍니다.
            </p>
          </div>
          <div>
            <h4 className="icon-bg4">프론트앤드 개발자</h4>
            <p>
              HTML, CSS 및 JavaScript를 사용하여 웹 페이지를 만들고, 사용자의
              상호작용과 시각적인 요소를 구현합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSkill;