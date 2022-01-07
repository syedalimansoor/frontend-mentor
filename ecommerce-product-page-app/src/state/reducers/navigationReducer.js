const reducer = (state = false, action) => {
  switch (action.type) {
    case "toggle-nav":
      return !state;
    default:
      return state;
  }
};

export default reducer;
