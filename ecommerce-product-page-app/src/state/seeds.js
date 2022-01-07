import exampleThumbnail from "../images/image-product-1-thumbnail.jpg";
import exampleThumbnail2 from "../images/image-product-2-thumbnail.jpg";

export const cartSeed = {
  open: false,
  items: [
    {
      id: 1,
      thumbnail: exampleThumbnail,
      name: "Autumn Limited Edition Sneakers",
      price: 125.0,
      qty: 3,
    },
    {
      id: 2,
      thumbnail: exampleThumbnail2,
      name: "Fall Limited Edition Sneakers",
      price: 75.0,
      qty: 2,
    },
  ],
};
