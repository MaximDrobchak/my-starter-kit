import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import Menu from "./HomePage/Menu";

import ContainerPage from "../components/ContainerPage";
import Button from "../components/Button";
// grid from dev
import DevGrid from "../components/DevGrid";

export { ContainerPage, DevGrid, Button };

const Landing = () => (
  <HomePage className="home-page">
    <Menu />
  </HomePage>
);
export default () => (
  <Switch>
    <Route exact path="/" component={Landing} />
  </Switch>
);
