import React, { forwardRef, useContext } from "react";
import Context from "../../../state/Context";

import CartItem from "./CartItem/CartItem";

import "./Cart.scss";

const Cart = forwardRef((props, ref) => {
  const { cartItems, setCartItems } = useContext(Context);

  const checkout = () => {
    setCartItems([]);
  };

  const deleteItem = ({ id }) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const items = (
    <>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          deleteItem={() => deleteItem(item)}
        />
      ))}
      <button onClick={checkout} className="Cart__checkout-btn" autoFocus>
        Checkout
      </button>
    </>
  );

  const emptyMessage = <p className="Cart__empty-msg">Your cart is empty.</p>;

  return (
    <aside className="Cart" ref={ref}>
      <h3 className="Cart__title">Cart</h3>
      <div className="Cart__content">
        {cartItems.length ? items : emptyMessage}
      </div>
    </aside>
  );
});

export default Cart;
