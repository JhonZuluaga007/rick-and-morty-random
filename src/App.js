import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
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

const GET_CHARACTER = (id) => {

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

function getRandomInt() {
  return Math.floor(Math.random() * 826);
}

function DisplayCharacter() {
  //const { loading, error, data } = useQuery(GET_CHARACTERS);
  console.log(getRandomInt());
  const { loading, error, data } = useQuery(GET_CHARACTER(getRandomInt()));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  //return data.characters.results.map( result => {
    return <div key={data.character.id}>
      <h3>{data.character.name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${data.character.image}`} />
      <br />
      <b>About this location:</b>
      <p>{data.character.species}</p>
      <br />
    </div>
//});
}


function App() {
  return (
    <div className="App">
      <DisplayCharacter />
    </div>
  );
}

export default App;
