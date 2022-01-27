import React, { useRef, useState } from "react";
import Display from "./Display";

import images from "../../../../images";
import closeIcon from "../../../../images/icon-close.svg";
import "./Lightbox.scss";
import Thumbnails from "./Thumbnails";

const Lightbox = ({ setLightbox }) => {
  const [currImg, setCurrImg] = useState(0);
  const $wrapper = useRef();

  const handleClickOutside = (evt) => {
    if (!$wrapper.current.contains(evt.target)) setLightbox(false);
  };

  return (
    <aside className="Lightbox" onClick={handleClickOutside}>
      <div className="Lightbox__wrapper" ref={$wrapper}>
        <button
          className="Lightbox__close-btn"
          onClick={() => setLightbox(false)}
          autoFocus
        >
          <img src={closeIcon} />
        </button>
        <Display images={images} currImg={currImg} setCurrImg={setCurrImg} />
        <Thumbnails images={images} currImg={currImg} setCurrImg={setCurrImg} />
      </div>
    </aside>
  );
};

export default Lightbox;
