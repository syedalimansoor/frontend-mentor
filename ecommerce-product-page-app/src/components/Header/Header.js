import React, { useRef } from "react";
import Navigation from "./Navigation/Navigation";
import Cart from "./Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

import navIcon from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";

import "./Header.scss";

const Header = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { toggleNavigation, toggleCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const cart = useRef();
  const handleCartToggle = () => {
    if (state.cart.open) {
      cart.current.classList.add("fade-out");
      setTimeout(toggleCart, 300);
    } else {
      toggleCart();
    }
  };

  return (
    <header className="Header">
      <button className="Header__toggle-nav" onClick={toggleNavigation}>
        <img src={navIcon} alt="Open navigation" />
      </button>

      <img src={logo} alt="sneakers logo" className="Header__logo" />

      {state.navigation ? <Navigation /> : ""}

      <button className="Header__toggle-cart" onClick={handleCartToggle}>
        <img src={cartIcon} alt="Open cart" />
      </button>

      {state.cart.open ? (
        <Cart ref={cart} handleCartToggle={handleCartToggle} />
      ) : (
        ""
      )}

      <img src={avatar} className="Header__avatar" alt="Avatar" />
    </header>
  );
};

export default Header;
