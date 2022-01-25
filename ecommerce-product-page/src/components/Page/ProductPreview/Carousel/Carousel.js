import "./Carousel.scss";

const Carousel = ({ images, currImg }) => {
  return (
    <div className="Carousel">
      {images.map((src, idx) => (
        <img
          src={src}
          className="Carousel__img"
          data-id={idx}
          data-visible={currImg === idx}
          key={idx}
        />
      ))}
    </div>
  );
};

export default Carousel;
