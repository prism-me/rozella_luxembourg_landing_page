import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../themes/404";

import Theme from "../themes/theme2";
// const Theme = lazy(() => import("../themes/theme2"));

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Theme} />
            <Route exact path="/404" component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
