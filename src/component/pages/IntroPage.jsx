import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import IntroCont from "../intro/IntroCont";
import IntroSlider from "../intro/IntroSlider";

const IntroPage = () => {
  return (
    <>
      <Contents>
        <ContTitle title="Intro" />
        <IntroCont />
        <IntroSlider />
      </Contents>
    </>
  );
};

export default IntroPage;
