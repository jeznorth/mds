import React from "react";
import { Route, Switch } from "react-router-dom";
import * as routes from "@/constants/routes";

const PublicRoutes = () => (
  <div>
    <Switch>
      <Route path={routes.RETURN_PAGE.route} component={routes.RETURN_PAGE.component} />
    </Switch>
  </div>
);

export default PublicRoutes;
