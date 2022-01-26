import React from "react";

import "./ThumbnailList.scss";

const ThumbnailList = ({ images, currImg, setCurrImg }) => {
  return (
    <div className="ThumbnailList">
      {images.map((src, idx) => (
        <button
          className="ThumbnailList__btn"
          key={idx}
          data-current={currImg === idx}
          onFocus={() => setCurrImg(idx)}
        >
          <img src={src} className="ThumbnailList__img" />
        </button>
      ))}
    </div>
  );
};

export default ThumbnailList;
