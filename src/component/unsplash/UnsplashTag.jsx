import React from "react";

const unsplashTagList = [
  { name: "spring" },
  { name: "color" },
  { name: "flower" },
  { name: "black" },
  { name: "blue" },
  { name: "music" },
];

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="unsplash__tag gmarket5">
      <div>
        {unsplashTagList.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
