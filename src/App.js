import './App.css';
import { gql, useLazyQuery } from '@apollo/client';
//import { GET_CHARACTER } from './apollo/queries';
//import { getRandomInt } from './utils/random.utils';
import { useState } from 'react';


const GET_CHARACTER = gql(
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



function DisplayCharacter(props) {
  
  
  const getRandomInt = Math.floor(Math.random() * 826);
  console.log(getRandomInt);

  const [getCharacter, { loading, called, data }] = useLazyQuery(GET_CHARACTER);
  
  const manejarEnvio = newcharts => {
    newcharts.preventDefault();
      props.onSubmit(newcharts);
  }
    if (called && loading) return <p>Loading ...</p>
    if (!called) {
      return <>
      <h2>No se ha cargado ningún personaje</h2>
      <button onSubmit={manejarEnvio} onClick={() => getCharacter({variables: {idCharacter: getRandomInt}})}>Load greeting</button>
      </>
    }
    return <> <Character character={data?.character} />
          <button onSubmit={manejarEnvio} onClick={() => getCharacter({variables: {idCharacter: getRandomInt}})}>Load greeting</button></>
}

function DisplayCharacters () {
  const [characters, setCharacters] = useState([]);

  const agregarTarea = character => {

    console.log(character);
    //if (character.name.trim()) {
      //character.name = character.name.trim();
      //const updatedCharacters = [character, ...characters];
      //setCharacters(updatedCharacters);
    //}
  }

  return (
    <>
      <DisplayCharacter onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          characters.map((character)=>
            <Character key={character.id} character={character} />
          )
        }
      </div>
    </>

  );

}

function Character({ character}) {
  if(character ===null) return null
  return (
    <div key={character.id}>
      <h3>{character?.name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${character.image}`} />
      <br />
      <b>About this location:</b>
      <p>{character.species}</p>
      <br />
    </div>
  );    
}


function App() {
  return (
    <div className="App">
      <DisplayCharacters />
    </div>
  );
}

export default App;
