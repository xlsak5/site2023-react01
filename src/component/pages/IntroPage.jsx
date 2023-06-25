import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import IntroCont from "../intro/IntroCont";
import IntroSkill from "../intro/IntroSkill";
import IntroOperate from "../intro/IntroOperate";

const IntroPage = () => {
  return (
    <>
      <Contents>
        <ContTitle title="Intro" />
        <IntroCont />
        <IntroSkill />
        <IntroOperate />
      </Contents>
    </>
  );
};

export default IntroPage;
