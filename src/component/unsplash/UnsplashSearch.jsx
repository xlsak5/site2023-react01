// 선생님꺼
import React, { useRef } from "react";

const UnsplashSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="unsplash__search container">
      <h2 className="blind">검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeyPress}
        placeholder="이미지를 검색하세요!"
      />
      <button type="submit" onClick={onClick}>
        검색하기
      </button>
    </div>
  );
};
export default UnsplashSearch;

// 내꺼
// import React, { useRef } from "react";

// const UnsplashSearch = ({ onSearch }) => {
//   const inputRef = useRef();

//   console.log(inputRef);

//   const handleSearch = () => {
//     const value = inputRef.current.value;
//     onSearch(value);

//     console.log(value);
//   };
//   const onKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };
//   const onClick = () => {
//     handleSearch();
//   };

//   return (
//     <div className="unsplash__search container">
//       <h2 className="blind">검색하기</h2>
//       <input
//         type="search"
//         onKeyPress={onKeyPress}
//         placeholder="이미지를 검색하세요!"
//       />
//       <button type="submit" onClick={onClick}>
//         검색하기
//       </button>
//     </div>
//   );
// };

// export default UnsplashSearch;
