import React from 'react';
import RedButton from './styles';

export default ({ props, children, type = 'button' }) => (
  <RedButton type={type} {...props}>
    {children}
  </RedButton>
);
