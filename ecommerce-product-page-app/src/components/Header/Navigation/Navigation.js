import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";

import closeIcon from "../../../images/icon-close.svg";

import "./Navigation.scss";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const { toggleNavigation } = bindActionCreators(actionCreators, dispatch);
  const navigation = useRef(null);
  const wrapper = useRef(null);

  const closeNavigation = () => {
    navigation.current.classList.add("fade-out");
    wrapper.current.classList.add("slide-out");
    window.setTimeout(toggleNavigation, 300);
  };

  const handleOutsideClick = (evt) => {
    if (!wrapper.current.contains(evt.target)) closeNavigation();
  };

  const handleNavBlur = (evt) => {
    if (evt.relatedTarget && !wrapper.current.contains(evt.relatedTarget))
      closeNavigation();
  };

  return (
    <nav
      className="Navigation"
      ref={navigation}
      onClick={handleOutsideClick}
      onBlur={handleNavBlur}
    >
      <div className="Navigation__wrapper" ref={wrapper}>
        <button
          className="Navigation__close-btn"
          onClick={closeNavigation}
          autoFocus
        >
          <img src={closeIcon} alt="Close navigation" />
        </button>
        <ul className="Navigation__list">
          <li>
            <a href="#" className="Navigation__link">
              <span>Collections</span>
            </a>
          </li>
          <li>
            <a href="#" className="Navigation__link">
              <span>Men</span>
            </a>
          </li>
          <li>
            <a href="#" className="Navigation__link">
              <span>Women</span>
            </a>
          </li>
          <li>
            <a href="#" className="Navigation__link">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#" className="Navigation__link">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
