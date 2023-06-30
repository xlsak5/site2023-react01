import React from "react";

const IntroCont = () => {
  return (
    <div className="me__box">
      <h1>About Me</h1>
      <div className="me__introduce">
        <div className="introduce__box">
          <img src="../../assets/images/member/Bust/peep-96.png" alt="안교남" />

          <div className="introduce__desc">
            <ul>
              <li>
                <p>FULL NAME</p>
                <span>An Gyo nam</span>
              </li>
              <li>
                <p>E-MAIL</p>
                <span>skadldldl123@gmail.com</span>
              </li>
              <li>
                <p>BLOG</p>
                <span>asdasdasdasdas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCont;
