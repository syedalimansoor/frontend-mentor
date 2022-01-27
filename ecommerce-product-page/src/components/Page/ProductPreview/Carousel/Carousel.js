import "./Carousel.scss";

const Carousel = ({ images, currImg, setLightbox }) => {
  return (
    <button className="Carousel" onClick={() => setLightbox(true)}>
      {images.map((src, idx) => (
        <img
          src={src}
          className="Carousel__img"
          data-visible={currImg === idx}
          key={idx}
        />
      ))}
    </button>
  );
};

export default Carousel;
