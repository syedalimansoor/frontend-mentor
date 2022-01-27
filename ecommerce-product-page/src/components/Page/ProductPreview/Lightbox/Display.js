import React from "react";

import iconPrev from "../../../../images/icon-previous.svg";
import iconNext from "../../../../images/icon-next.svg";
import "./Display.scss";

const Display = ({ images, currImg, setCurrImg }) => {
  const nextImg = () => {
    setCurrImg((prev) => prev + 1);
  };
  const prevImg = () => {
    setCurrImg((prev) => prev - 1);
  };

  return (
    <div className="Display">
      <button
        className="Display__btn-prev Display__btn"
        disabled={currImg === 0}
        onClick={prevImg}
      >
        <img src={iconPrev} />
      </button>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          data-current={idx === currImg}
          className="Display__img"
        />
      ))}
      <button
        className="Display__btn-next Display__btn"
        disabled={currImg === images.length - 1}
        onClick={nextImg}
      >
        <img src={iconNext} />
      </button>
    </div>
  );
};

export default Display;
