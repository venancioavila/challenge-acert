import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
