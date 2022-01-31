import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import Attribution from "./components/Attribution/Attribution";

import * as themes from "./themes/schema.json";
import { setLocalStorage } from "./utils/localStorage";

const Index = () => {
  setLocalStorage("all-themes", themes);

  return (
    <HelmetProvider>
      <App />
      <Attribution />
    </HelmetProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
