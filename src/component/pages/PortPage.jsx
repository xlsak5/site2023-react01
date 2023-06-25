import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import PortfolioCont from "../portfolio/PortfolioCont";

const PortPage = () => {
  return (
    <>
      <Contents>
        <ContTitle title="PORTFOLIO SITE" />
        <PortfolioCont />
      </Contents>
    </>
  );
};

export default PortPage;
