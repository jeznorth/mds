import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import Routes from "./routes/Routes";
import ModalWrapper from "@/components/common/wrappers/ModalWrapper";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => (
  <BrowserRouter basename={process.env.BASE_PATH}>
    <Fragment>
      <Routes />
      <PublicRoutes />
      <ModalWrapper />
    </Fragment>
  </BrowserRouter>
);

export default hot(module)(App);
