import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";

import CartItem from "./CartItem/CartItem";

import "./Cart.scss";

const Cart = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { clearCart } = bindActionCreators(actionCreators, dispatch);

  const { cart } = useSelector((state) => state);

  return (
    <aside className="Cart" ref={ref}>
      <h3 className="Cart__heading">Cart</h3>
      <div className="Cart__wrapper">
        {/* If there are items in the cart, show them alongwith a button, else show a message */}
        {cart.items.length ? (
          <>
            {cart.items.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
            <button className="Cart__checkout-btn" onClick={clearCart}>
              Checkout
            </button>
          </>
        ) : (
          <p className="Cart__empty-msg">Your cart is empty.</p>
        )}
      </div>
    </aside>
  );
});

export default Cart;
