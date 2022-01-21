import React, { useRef, useState } from "react";

import prevIcon from "../../../images/icon-previous.svg";
import nextIcon from "../../../images/icon-next.svg";
import images from "../../../images/index";

import "./ProductPreview.scss";

const ProductPreview = () => {
  const [currImg, setCurrImg] = useState(0);
  const $img = useRef();

  const isLastImg = () => currImg === images.length - 1;
  const isFirstImg = () => currImg === 0;

  const nextImg = () => {
    if (!isLastImg()) {
      $img.current.classList.add("flip-next");
      setTimeout(() => setCurrImg((prev) => prev + 1), 500);
      setTimeout(() => $img.current.classList.remove("flip-next"), 1000);
    }
  };

  const prevImg = () => {
    if (!isFirstImg()) {
      $img.current.classList.add("flip-prev");
      setTimeout(() => setCurrImg((prev) => prev - 1), 500);
      setTimeout(() => $img.current.classList.remove("flip-prev"), 1000);
    }
  };

  return (
    <div className="ProductPreview">
      <img src={images[currImg]} ref={$img} className="ProductPreview__img" />
      <button
        onClick={prevImg}
        disabled={isFirstImg()}
        className="ProductPreview__btn ProductPreview__prev-btn"
      >
        <img src={prevIcon} />
      </button>
      <button
        onClick={nextImg}
        disabled={isLastImg()}
        className="ProductPreview__btn ProductPreview__next-btn"
      >
        <img src={nextIcon} />
      </button>
    </div>
  );
};

export default ProductPreview;
