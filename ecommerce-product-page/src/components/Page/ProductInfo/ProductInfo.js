import Form from "./Form/Form";
import "./ProductInfo.scss";

const ProductInfo = () => {
  return (
    <section className="ProductInfo">
      <h2 className="ProductInfo__overline">SNEAKER COMPANY</h2>
      <h1 className="ProductInfo__title">Fall Limited Edition Sneakers</h1>
      <p className="ProductInfo__descr">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="ProductInfo__pricing">
        <strong className="ProductInfo__new-price">$125.00</strong>
        <small className="ProductInfo__original-price">$250.00</small>
      </div>
      <Form />
    </section>
  );
};

export default ProductInfo;
