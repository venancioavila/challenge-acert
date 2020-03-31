import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Pages
import App from "../pages/App";
import Home from "../pages/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/home" exact={true} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
