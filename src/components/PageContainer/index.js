import React from 'react';
import PageContainer, { BodyPage } from './styles';

export default ({ props, children, id }) => (
  <PageContainer id={id}>
    <BodyPage {...props}>{children}</BodyPage>
  </PageContainer>
);
