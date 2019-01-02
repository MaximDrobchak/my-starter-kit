import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './../components/Layout';
import HomePage from './HomePage';

import ContainerPage from '../components/ContainerPage';
import Button from '../components/Button';
// grid from dev
import DevGrid from '../components/DevGrid';

export { ContainerPage, DevGrid, Button };

const Landing = () => (
  <Layout>
    <HomePage />
  </Layout>
);
export default () => (
  <Switch>
    <Route exact path='/' component={Landing} />
  </Switch>
);
