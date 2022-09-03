import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import "popper.js";

import "../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "../node_modules/@fortawesome/fontawesome-free/scss/solid.scss";
import "../node_modules/@fortawesome/fontawesome-free/scss/brands.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
