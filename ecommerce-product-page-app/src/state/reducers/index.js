import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  navigation: navigationReducer,
  cart: cartReducer,
});

export default reducers;
