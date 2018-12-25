import React from 'react';
import { Link } from 'react-router-dom';
import { agileNixIcon, social } from './img';

import { Navigation, AgileNixLinkImage, BackgroundMenu } from './style.js';

import MainText from './MainText';
import Splinters from './Splinters';
import Typed from './Typed';
// from dev schema grid
import { DevGrid, PageContainer, MenuLink } from '../../';

const links = [
  { linkID: 0, title: 'About Us', path: '#about' },
  { linkID: 4, title: 'Services', path: '#services' },
  { linkID: 5, title: 'Technologies', path: '#technologies' },
  { linkID: 3, title: 'Portfolio', path: '#portfolio' },
  { linkID: 2, title: 'Hiring', path: '#hiring' },
  { linkID: 1, title: 'Contact', path: '#contact' },
];

const NavBar = () => (
  <Navigation>
    <Link to='/'>
      <AgileNixLinkImage src={agileNixIcon} alt='AgileNix' />
    </Link>
    <div>
      {links.map(link => (
        <MenuLink key={link.linkID} {...link} />
      ))}
      <img src={social} alt='' />
    </div>
  </Navigation>
);

export default () => (
  <BackgroundMenu>
    <PageContainer id='Menu'>
      {/* <DevGrid /> */}
      <Typed />
      <NavBar />
      <MainText />
      <Splinters />
    </PageContainer>
  </BackgroundMenu>
);
