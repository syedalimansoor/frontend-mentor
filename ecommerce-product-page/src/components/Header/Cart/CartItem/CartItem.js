import React from "react";

import deleteIcon from "../../../../images/icon-delete.svg";

import "./CartItem.scss";

const CartItem = ({ item, deleteItem }) => {
  return (
    <article className="CartItem">
      <img
        src={item.img}
        alt="item thumbnail"
        className="CartItem__thumbnail"
      />
      <header className="CartItem__details">
        <h4 className="CartItem__name">{item.name}</h4>
        <p>
          ${item.price.toFixed(2)} x {item.qty}{" "}
          <strong className="CartItem__value">
            ${(item.price * item.qty).toFixed(2)}
          </strong>
        </p>
      </header>
      <button className="CartItem__delete-btn" onClick={deleteItem}>
        <img src={deleteIcon} alt="delete item" />
      </button>
    </article>
  );
};

export default CartItem;
