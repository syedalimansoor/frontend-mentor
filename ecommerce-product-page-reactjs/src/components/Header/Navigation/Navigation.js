import React, { useContext, useRef } from "react";
import Context from "../../../state/Context";

import closeIcon from "../../../images/icon-close.svg";

import "./Navigation.scss";

const Navigation = () => {
  const { setNavigation } = useContext(Context);
  const nav = useRef();
  const wrapper = useRef();

  const closeNavigation = () => {
    nav.current.classList.add("close");
    wrapper.current.classList.add("close");
    setTimeout(() => setNavigation(false), 200);
  };

  const handleClickOutside = (evt) => {
    !wrapper.current.contains(evt.target) && closeNavigation();
  };

  return (
    <nav className="Navigation" ref={nav} onClick={handleClickOutside}>
      <div className="Navigation__wrapper" ref={wrapper}>
        <button onClick={closeNavigation} className="Navigation__close-btn">
          <img src={closeIcon} />
        </button>
        <ul className="Navigation__list">
          <li className="Navigation__list-item">
            <a href="#" className="Navigation__list-link">
              Collections
            </a>
          </li>
          <li className="Navigation__list-item">
            <a href="#" className="Navigation__list-link">
              Men
            </a>
          </li>
          <li className="Navigation__list-item">
            <a href="#" className="Navigation__list-link">
              Women
            </a>
          </li>
          <li className="Navigation__list-item">
            <a href="#" className="Navigation__list-link">
              About
            </a>
          </li>
          <li className="Navigation__list-item">
            <a href="#" className="Navigation__list-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
