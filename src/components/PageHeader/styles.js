import styled from 'styled-components';

// export default styled.h1`
//   font-family: Roboto;
//   text-align: center;
//   color: #2e5e99;
//   margin: 0;
//   padding: 0;
//   ${props =>
//     props.pageMainHeader
//       ? `
//   font-size: 30px;
//   line-height: 1.4;
//   letter-spacing: 1.2px;
//   margin-top: 60px;
//   `
//       : `
//   font-size: 20px;
//   line-height: 1.2;
//   letter-spacing: 0.4px;
//   color: #189af1;

//   `};
// `;
export default styled.h1`
  font-family: Roboto;
  font-size: 30px;
  line-height: 1.4;
  letter-spacing: 1.2px;
  text-align: center;
  color: #2e5e99;
  margin: 60px 0 0 0;
  padding: 0;

  ${props =>
    !props.pageMainHeader &&
    `
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.4px;
  color: #189af1;
  margin: 0;

  `};
`;
