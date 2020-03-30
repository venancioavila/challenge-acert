import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import App from "../pages/App";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
