import styled from "styled-components";

const Container = styled.nav`
  height: 66px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  z-index: 200;
  background-color: ${props => props.theme.color.default};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  background-position-y: 0px;
  width: 100%;

  ${props => props.theme.media.desktop`
      padding: 0 60px;    
  `};

  ${props => props.theme.media.tablet`
      padding: 0 30px;    
  `};
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 37px;
`;

const Logo = styled.img`
  height: 100%;
`;

export { Container, Content, LogoContainer, Logo };
