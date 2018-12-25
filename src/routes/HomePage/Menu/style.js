import styled from 'styled-components';

import BackGroundIcon from './img/background-header.png';

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  z-index: 100;
  position: absolute;
  justify-content: flex-start;
  padding-top: 18px;

  > div {
    margin-left: 8.7%;
    > img {
      height: 14px;
    }
  }
`;

export const AgileNixLinkImage = styled.img`
  height: 25px;
`;

export const BackgroundMenu = styled.div`
background: url('${BackGroundIcon}') no-repeat center;
background-size: cover;
position: relative;
`;
