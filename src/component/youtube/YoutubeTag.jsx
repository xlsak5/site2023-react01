import React from "react";

const youtubeTag = [
  { name: "아이브(IVE)" },
  { name: "react.js" },
  { name: "vue.js" },
  { name: "next.js" },
  { name: "node.js" },
  { name: "music" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
    console.log(e.target.innerText);
  }

  return (
    <div className="youtube__tag gmarket5">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
