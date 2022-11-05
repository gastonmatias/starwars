import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import 'animate.css';

import StarWarsApp from "./StarWarsApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StarWarsApp />
    </BrowserRouter>
  </React.StrictMode>
);

