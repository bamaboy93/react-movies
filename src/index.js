import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-movies/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
