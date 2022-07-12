import React from "react";
import Button from "../../components/common/button";
import { Card, CardBody, CharacterImage, Title } from "./elements";

const History = ({ history, selectCharacter }) => (
  <>
    <Title>History</Title>
    {history.map((character, index) => (
      <Card marginB="20">
        <CharacterImage src={character.image} />
        <CardBody>
          {character.name}
          <Button
            onClick={() => selectCharacter(index)}
            variant="outlined"
            color="secondary"
          >
            View
          </Button>
        </CardBody>
      </Card>
    ))}
  </>
);

export default History;
