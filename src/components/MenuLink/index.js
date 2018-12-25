import React from 'react';
import LinkStyle from './styles';

const MenuLink = ({ props, path, title }) => (
  <LinkStyle href={path} alt='' {...props}>
    {title}
  </LinkStyle>
);

export default MenuLink;
