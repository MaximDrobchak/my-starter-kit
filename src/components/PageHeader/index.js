import React from 'react';
import PageHeaderStyle from './styles';

export default ({ text, pageMainHeader }) => (
  <PageHeaderStyle pageMainHeader={pageMainHeader}>{text}</PageHeaderStyle>
);
