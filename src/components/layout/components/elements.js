import styled from "styled-components";

const Main = styled.main`
  padding: 20px 90px;
  padding-top: 66px;
  display: flex;
  flex-direction: column;

  ${props => props.theme.media.tablet`
    padding: 10px 40px;
  `}
`;

export { Main };
