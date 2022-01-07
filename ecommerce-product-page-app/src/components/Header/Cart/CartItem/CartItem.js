import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../state";

import deleteIcon from "../../../../images/icon-delete.svg";
import "./CartItem.scss";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { removeItem } = bindActionCreators(actionCreators, dispatch);

  return (
    <article className="CartItem">
      <img
        className="CartItem__thumbnail"
        src={item.thumbnail}
        alt="Product thumbnail"
      />
      <header className="CartItem__info">
        <h4 className="CartItem__title">{item.name}</h4>$
        <span>{item.price.toFixed(2)}</span> x <span>{item.qty}</span>{" "}
        <strong className="CartItem__total-value">
          $<span>{(item.price * item.qty).toFixed(2)}</span>
        </strong>
      </header>
      <button className="CartItem__delete-btn" onClick={() => removeItem(item)}>
        <img src={deleteIcon} alt="Remove from cart" />
      </button>
    </article>
  );
};

export default CartItem;
