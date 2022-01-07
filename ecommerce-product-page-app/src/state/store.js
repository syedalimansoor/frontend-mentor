import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { cartSeed } from "./seeds";

export const store = createStore(
  reducers,
  { cart: cartSeed },
  applyMiddleware(thunk)
);
