import React, { useRef, useState } from "react";

import prevIcon from "../../../images/icon-previous.svg";
import nextIcon from "../../../images/icon-next.svg";
import images from "../../../images/index";

import "./ProductPreview.scss";
import Carousel from "./Carousel/Carousel";
import ThumbnailList from "./ThumbnailList/ThumbnailList";

const ProductPreview = () => {
  const [currImg, setCurrImg] = useState(0);

  const nextImg = () => {
    setCurrImg((prev) => prev + 1);
  };
  const prevImg = () => {
    setCurrImg((prev) => prev - 1);
  };

  const desktopQuery = matchMedia("(min-width: 900px)");

  return (
    <div className="ProductPreview">
      <Carousel images={images} currImg={currImg} />
      <button
        onClick={prevImg}
        className="ProductPreview__btn ProductPreview__prev-btn"
        disabled={currImg === 0}
      >
        <img src={prevIcon} />
      </button>
      <button
        onClick={nextImg}
        className="ProductPreview__btn ProductPreview__next-btn"
        disabled={currImg === images.length - 1}
      >
        <img src={nextIcon} />
      </button>
      {desktopQuery.matches && (
        <ThumbnailList
          images={images}
          currImg={currImg}
          setCurrImg={setCurrImg}
        />
      )}
    </div>
  );
};

export default ProductPreview;
