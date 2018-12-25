import styled from 'styled-components';

export const DevGrid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid: auto-flow / repeat(12, 1fr);
  column-gap: 1rem;
  border: 2px solid tomato;
`;
export const Container = styled.div`
  position: absolute;
  z-index: 1000;
  width: 74%;
  height: 100%;
`;
export const Column = styled.div`
  background: rgba(22, 158, 255, 0.25);
`;
