import React, { useState } from "react";
import Context from "./state/Context";
import Header from "./components/Header/Header";
import "./App.scss";
import "./keyframes.scss";

const App = () => {
  const [navigation, setNavigation] = useState(false);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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
