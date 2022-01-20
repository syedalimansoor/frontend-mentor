import React, { useState } from "react";
import Context from "./state/Context";
import Header from "./components/Header/Header";

import thumbnail1 from "./images/image-product-1-thumbnail.jpg";

import "./App.scss";
import "./keyframes.scss";

const App = () => {
  const [navigation, setNavigation] = useState(false);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Autumn Limited Edition Sneakers",
      img: thumbnail1,
      price: 125.0,
      qty: 3,
    },
    {
      id: 2,
      name: "Autumn Limited Edition Sneakers",
      img: thumbnail1,
      price: 125.0,
      qty: 3,
    },
  ]);

  const value = {
    navigation,
    setNavigation,
    cart,
    setCart,
    cartItems,
    setCartItems,
  };

  return (
    <Context.Provider value={value}>
      <div className="App">
        <Header />
      </div>
    </Context.Provider>
  );
};

export default App;
