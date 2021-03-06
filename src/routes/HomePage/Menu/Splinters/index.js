import React from "react";
import styled from "styled-components";

import {
  Path278,
  Path280,
  Path281,
  Path282,
  Path287,
  Path284,
  Path285,
  Path286,
  Path288,
  Path290,
  Path292,
  Path293,
  Path289,
  Path295,
  Path299
} from "../img";

const Div = styled.div`
  margin: 80px 0 0 33.2%;
  width: 72.2%;
  height: 393px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

const Image = styled.img`
  position: relatyve;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  margin-top: ${props => props.top};
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
  margin-bottom: ${props => props.bottom};
`;
const Splinters = () => (
  <div style={{ height: 393 }}>
    <Div>
      <Image column="1/3" row="1/4" top="-25px" src={Path286} alt="" />

      <Image column="6/9" row="1/3" src={Path281} alt="" />
      <Image column="5/9" row="2/4" src={Path286} alt="" />
      <Image column="8/10" row="1/4" top="-40px" src={Path284} alt="" />
      <Image column="10/11" row="3/5" src={Path282} alt="" />
      <Image column="10/11" row="3/5" top="20px" src={Path278} alt="" />
      <Image column="12/13" row="1/5" top="-25px" src={Path299} alt="" />
      <Image column="12/13" row="8/10" left="-2.87%" src={Path295} alt="" />
      <Image column="12/13" row="9/11" src={Path290} alt="" />
      <Image column="11/12" row="10/12" src={Path285} alt="" />
      <Image column="11/12" row="10/12" right="2.2%" src={Path280} alt="" />
      <Image column="10/11" row="11/12" src={Path293} alt="" />
      <Image column="5/8" row="11/12" src={Path289} alt="" />
      <Image column="6/9" row="11/12" top="20px" src={Path292} alt="" />
      <Image column="3/5" row="11/12" top="-20px" src={Path288} alt="" />
      <Image column="1/2" row="9/11" bottom="-30px" src={Path287} alt="" />
    </Div>
  </div>
);

export default Splinters;
