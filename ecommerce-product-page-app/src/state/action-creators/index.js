export const toggleNavigation = () => {
  return (dispatch) => {
    return dispatch({
      type: "toggle-nav",
    });
  };
};

export const toggleCart = () => {
  return (dispatch) => {
    return dispatch({
      type: "toggle-cart",
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    return dispatch({
      type: "clear-cart",
    });
  };
};

export const removeItem = (item) => {
  console.log(`removing item ${item}`);
  return (dispatch) => {
    return dispatch({
      type: "remove-item",
      payload: item,
    });
  };
};
