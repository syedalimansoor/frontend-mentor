import { useContext, useState } from "react";
import Context from "../../../../state/Context";

import cartIcon from "../../../../images/icon-cart.svg";
import plusIcon from "../../../../images/icon-plus.svg";
import minusIcon from "../../../../images/icon-minus.svg";
import { thumbnails } from "../../../../images";

import "./Form.scss";

const Form = () => {
  const [qty, setQty] = useState(0);
  const { setCart, setCartItems } = useContext(Context);

  const increment = () => {
    setQty((prev) => prev + 1);
  };

  const decrement = () => {
    setQty((prev) => prev - 1);
  };

  const handleChange = (evt) => {
    setQty(Number(evt.target.value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCartItems((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: "Fall Limited Edition Sneakers",
        img: thumbnails[prev.length % 4],
        price: 125.0,
        qty,
      },
    ]);
    setCart(true);
    setQty(0);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="Form__qty-wrapper">
        <button
          onClick={decrement}
          disabled={qty === 0}
          className="Form__btn-decr Form__btn"
          type="button"
        >
          <img src={minusIcon} />
        </button>
        <input
          type="number"
          value={qty}
          onChange={handleChange}
          className="Form__qty"
        />
        <button
          onClick={increment}
          className="Form__btn-incr Form__btn"
          type="button"
        >
          <img src={plusIcon} />
        </button>
      </div>
      <button className="Form__submit" disabled={qty === 0}>
        <img src={cartIcon} />
        Add to cart
      </button>
    </form>
  );
};

export default Form;
