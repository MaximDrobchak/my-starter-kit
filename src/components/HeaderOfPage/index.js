import React from "react";
import styled from "styled-components";

const HeaderOfPage = styled.span`
  font-family: Roboto;
  font-size: 1.95em;
  line-height: 1.4;
  letter-spacing: 1.2px;
  color: #2e5e99;
`;

export default ({ text }) => <HeaderOfPage>{text}</HeaderOfPage>;
