import { gql } from "@apollo/client";


export const GET_CHARACTERS = gql`
query  getCharacters {
  characters {
    results {
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
  }}
}
`;

export const GET_CHARACTER = (id) => {
    const queryString = `query  getCharacter {
      character(id: ${id} ) {
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
    `
    return gql(queryString);
};