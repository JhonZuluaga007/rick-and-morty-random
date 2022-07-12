import styled from "styled-components";
import {
  Card as CommonCard,
  CardBody as CommonCardBody
} from "../../components/common/card";

const Title = styled.h2`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 25px;
`;

const CharacterImage = styled.img`
  width: 80px;
  height: auto;
`;

const Card = styled(CommonCard)`
  flex-direction: row;
`;

const CardBody = styled(CommonCardBody)`
  display: flex;
  align-items: center;
  font-size: 22px;
  button {
    margin-left: auto;
  }
`;

export { Title, CharacterImage, Card, CardBody };
