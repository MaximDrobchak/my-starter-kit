import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { agileNixIcon, social } from './img';

import { ContainerPage, Button } from '../../';
import Splinters from './Splinters';

import './style.css';

// from dev schema grid
// import { DevGrid } from '../../';

const Navigation = styled.div`
  width: 100%;
  display: flex;
  z-index: 100;
  position: absolute;
  justify-content: flex-start;
  padding-top: 18px;
`;

const links = [
  { linkID: 0, title: 'About Us', path: '#about' },
  { linkID: 4, title: 'Services', path: '#services' },
  { linkID: 5, title: 'Technologies', path: '#technologies' },
  { linkID: 3, title: 'Portfolio', path: '#portfolio' },
  { linkID: 2, title: 'Hiring', path: '#hiring' },
  { linkID: 1, title: 'Contact', path: '#contact' },
];

const MenuLink = ({ path, title }) => (
  <a className="text-links" href={path} style={{ marginRight: 15 }}>
    {title}
  </a>
);

const NavBar = () => (
  <Navigation>
    <div>
      <Link to="/">
        <img style={{ height: 25 }} src={agileNixIcon} alt="AgileNix" />
      </Link>
    </div>
    <div style={{ marginLeft: '8.7%' }}>
      {links.map(link => (
        <MenuLink key={link.linkID} {...link} />
      ))}
      <img style={{ height: 14 }} src={social} alt="" />
    </div>
  </Navigation>
);

const Text = () => (
  <div className="main-text">
    <span>Mobile application</span>
    <br />
    <span>DEVELOPMENT</span>
    <br />
    <span>Full-cycle website</span>
    <br />
    <Button text="Learn more now" />
  </div>
);

const Menu = () => (
  <ContainerPage id="Menu">
    {/* <DevGrid /> */}

    <NavBar />
    <Text />
    <Splinters />
  </ContainerPage>
);

export default Menu;
