import React from "react";
import {
  Container,
  DataContainer,
  Column,
  Button,
  CharacterImage,
  Field,
  Divider,
  EmptyContainer
} from "./elements";
import Loader from "../../components/common/loader";
import { Card, CardBody, CardHeader } from "../../components/common/card";

const CharacterGenerator = ({ requestCharacter, character, loading }) => (
  <Container>
    <DataContainer>
      {character ? (
        <>
          <Column basis="40">
            <CharacterImage src={character.image} alt={character.name} />
          </Column>
          <Column basis="60">
            <Card>
              <CardHeader
                title={character.name}
                subtitle={`Character id: ${character.id}`}
              />
              <CardBody>
                <Field>
                  <span>Status:</span>
                  {character.status || "unknown"}
                </Field>
                <Divider />
                <Field>
                  <span>Species:</span>
                  {character.species || "unknown"}
                </Field>
                <Divider />
                <Field>
                  <span>Type:</span>
                  {character.type || "unknown"}
                </Field>
                <Divider />
                <Field>
                  <span>Gender:</span>
                  {character.gender || "unknown"}
                </Field>
                <Divider />
                <Field>
                  <span>Origin:</span>
                  {character.origin.name || "unknown"}
                </Field>
                <Divider />
                <Field>
                  <span>Location:</span>
                  {character.location.name || "unknown"}
                </Field>
                <Divider />
                <Field>
                  <span>Created at:</span>
                  {new Date(character.created).toDateString() || "unknown"}
                </Field>
              </CardBody>
            </Card>
          </Column>
        </>
      ) : (
        <EmptyContainer>No se ha cargado ningún personaje</EmptyContainer>
      )}
    </DataContainer>
    <Button
      onClick={requestCharacter}
      disabled={loading}
      marginT="20"
      color="gradient"
      size="large"
    >
      {loading ? <Loader size="15" /> : "Generate"}
    </Button>
  </Container>
);

export default CharacterGenerator;
