import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Attribution from "./components/Attribution/Attribution";
import { Provider } from "react-redux";
import { store } from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Attribution />
  </React.StrictMode>,
  document.getElementById("root")
);
