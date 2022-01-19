import React, { useContext, useRef } from "react";

import Context from "../../state/Context";
import Navigation from "./Navigation/Navigation";
import Cart from "./Cart/Cart";

import menuIcon from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";

import "./Header.scss";

const Header = () => {
  const { navigation, setNavigation, cart, setCart } = useContext(Context);
  const $cart = useRef();

  const toggleNavigation = () => {
    setNavigation((prev) => !prev);
  };

  const toggleCart = () => {
    if (cart) {
      $cart.current.classList.add("close");
      setTimeout(() => setCart((prev) => !prev), 200);
    } else {
      setCart((prev) => !prev);
    }
  };

  return (
    <div className="Header">
      <button onClick={toggleNavigation} className="Header__nav-btn">
        <img src={menuIcon} alt="open navigation" />
      </button>

      {navigation ? <Navigation /> : ""}

      <img src={logo} alt="logo" className="Header__logo" />

      <button onClick={toggleCart} className="Header__cart-btn">
        <img src={cartIcon} alt="open cart" />
      </button>

      {cart ? <Cart ref={$cart} /> : ""}

      <img src={avatar} alt="avatar" className="Header__avatar" />
    </div>
  );
};

export default Header;
