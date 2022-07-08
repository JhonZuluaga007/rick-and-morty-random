import './App.css';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from './apollo/queries';
import { getRandomInt } from './utils/random.utils';



function DisplayCharacter() {
  //const { loading, error, data } = useQuery(GET_CHARACTERS);
  console.log(getRandomInt);
  const { loading, error, data } = useQuery(GET_CHARACTER(getRandomInt));

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
