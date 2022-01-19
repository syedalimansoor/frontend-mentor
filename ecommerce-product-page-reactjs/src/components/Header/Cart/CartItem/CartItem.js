import React from "react";

import deleteIcon from "../../../../images/icon-delete.svg";

import "./CartItem.scss";

const CartItem = ({ item }) => {
  return (
    <article key={item.id}>
      <img src={item.img} alt="item thumbnail" />
      <header>
        <h4>{item.name}</h4>
        <p>
          ${item.price} x {item.qty} <strong>${item.price * item.qty}</strong>
        </p>
      </header>
      <button>
        <img src={deleteIcon} alt="delete item" />
      </button>
    </article>
  );
};

export default CartItem;
