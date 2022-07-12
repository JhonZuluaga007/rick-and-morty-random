import styled from "styled-components";
import CommonButton from "../../components/common/button";

const Container = styled.div``;

const DataContainer = styled.div`
  display: flex;

  ${props => props.theme.media.tablet`
    flex-direction: column;
  `}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => props.basis}%;
  margin-right: 20px;

  &:last-child {
    border-bottom: none;
  }

  ${props => props.theme.media.tablet`
    margin: 0 !important;
  `}
`;

const Button = styled(CommonButton)`
  margin-left: auto;
  ${props => props.theme.media.tablet`
    width: 100%;
  `}
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  min-width: 300px;
`;

const Field = styled.div`
  display: flex;
  span {
    font-weight: bold;
    margin-right: auto;
  }
`;

const Divider = styled.hr`
  border: 0.5px solid ${props => props.theme.grey.veryLightGrey};
`;

const EmptyContainer = styled.div`
  width: 100%;
  padding: 80px;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

export {
  Container,
  DataContainer,
  Column,
  Button,
  CharacterImage,
  Field,
  Divider,
  EmptyContainer
};
