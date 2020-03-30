import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import store from "../store";

// Pages
import App from "../pages/App";

const Navigation = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Navigation;
