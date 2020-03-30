import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

// Pages
import App from "../pages/App";

const theme = createMuiTheme({});

const Navigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={App} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Navigation;
