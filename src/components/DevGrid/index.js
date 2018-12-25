import React from 'react';
import { DevGrid, Container, Column } from './styles';

const cols = [];
let i = 0;

while (i < 12) {
  cols.push({ id: i });
  i++;
}

export default () => (
  <Container>
    <DevGrid>
      {cols.map(el => (
        <Column key={el.id} />
      ))}
    </DevGrid>
  </Container>
);
