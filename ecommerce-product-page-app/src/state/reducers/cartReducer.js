import exampleThumbnail from "../../images/image-product-1-thumbnail.jpg";
import exampleThumbnail2 from "../../images/image-product-2-thumbnail.jpg";

const reducer = (state = { open: false, items: [] }, action) => {
  switch (action.type) {
    case "toggle-cart":
      return { ...state, open: !state.open };
    case "add-item":
      return { ...state, items: [...state.items, action.payload] };
    case "remove-item":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "clear-cart":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export default reducer;
