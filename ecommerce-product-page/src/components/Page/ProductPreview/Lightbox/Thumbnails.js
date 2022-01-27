import React from "react";

import "./Thumbnails.scss";

const Thumbnails = ({ images, currImg, setCurrImg }) => {
  return (
    <div className="Thumbnails">
      {images.map((src, idx) => (
        <button
          key={idx}
          data-current={idx === currImg}
          className="Thumbnails__btn-img"
          onFocus={() => setCurrImg(idx)}
        >
          <img src={src} />
        </button>
      ))}
    </div>
  );
};

export default Thumbnails;
