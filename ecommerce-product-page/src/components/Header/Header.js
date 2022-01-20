import React, { useContext, useEffect, useRef } from "react";

import Context from "../../state/Context";
import Navigation from "./Navigation/Navigation";
import Cart from "./Cart/Cart";

import menuIcon from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";

import "./Header.scss";
import CartCounter from "./CartCounter/CartCounter";

const Header = () => {
  const { navigation, setNavigation, cart, setCart, cartItems } =
    useContext(Context);
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

  const desktopQuery = matchMedia("(min-width: 900px)");
  desktopQuery.addEventListener("change", () => {
    setNavigation(desktopQuery.matches);
  });

  return (
    <div className="Header">
      <button onClick={toggleNavigation} className="Header__nav-btn">
        <img src={menuIcon} alt="open navigation" />
      </button>

      <img src={logo} alt="logo" className="Header__logo" />

      {desktopQuery.matches || navigation ? <Navigation /> : null}

      <button onClick={toggleCart} className="Header__cart-btn">
        {cartItems.length ? <CartCounter length={cartItems.length} /> : null}
        <img src={cartIcon} alt="open cart" />
      </button>

      {cart ? <Cart ref={$cart} /> : null}

      <img src={avatar} alt="avatar" className="Header__avatar" />
    </div>
  );
};

export default Header;
