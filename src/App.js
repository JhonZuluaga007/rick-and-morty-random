import './App.css';
import { useLazyQuery } from '@apollo/client';
import { GET_CHARACTER } from './apollo/queries';
import Character from './components/character';
import ListCharacters from './components/list-character';

export function DisplayCharacter(props) {
  const getRandomInt = Math.floor(Math.random() * 826);
  const [getCharacter, { loading, called, data }] = useLazyQuery(GET_CHARACTER);
  
  const manejarEnvio = newcharts => {
    newcharts.preventDefault();
    getCharacter({variables: {idCharacter: getRandomInt}});
    props.onSubmit(data.character);
  }
    if (called && loading) return <p>Loading ...</p>
    if (!called) {
      return <>
      <h2>No se ha cargado ningún personaje</h2>
      <button onClick={manejarEnvio}>Load greeting</button>
      </>
    }
    return <> <Character character={data?.character} />
          <button onClick={manejarEnvio}>Load greeting</button></>
}


function App() {
  return (
    <div className="App">
      <ListCharacters />
    </div>
  );
}

export default App;
