import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Menu from './HomePage/Menu';

// grid from dev
import DevGrid from '../components/DevGrid';
import PageContainer from '../components/PageContainer';
import MenuLink from '../components/MenuLink';
import PageHeader from '../components/PageHeader';
import RedButton from '../components/RedButton';

export { DevGrid, RedButton, PageHeader, MenuLink, PageContainer };

const Landing = () => (
  <HomePage className='home-page'>
    <Menu />
  </HomePage>
);
export default () => (
  <Switch>
    <Route exact path='/' component={Landing} />
  </Switch>
);
