import { gql } from "@apollo/client";

export const GET_CHARACTER = gql(
  `query  getCharacter($idCharacter : ID!) {
    character(id: $idCharacter ) {
      id
      name
      status
      species
      type
      gender
      origin{
        id
        name
      }
      location{
        id
        name
      }
      image
      created
    }
  }
  `)