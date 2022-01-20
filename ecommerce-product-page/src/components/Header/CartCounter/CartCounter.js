import React from "react";

import "./CartCounter.scss";

const CartCounter = ({ length }) => {
  return <small className="CartCounter">{length}</small>;
};

export default CartCounter;
