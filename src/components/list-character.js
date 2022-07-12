import React, { useState } from 'react';
import { DisplayCharacter } from '../App';

function ListCharacters () {
    const [characters, setCharacters] = useState([]);
  
    const agregarTarea = character => {
      console.log("nuevo character");
      console.log(character);
      const updatedCharacters = [character, ...characters];
      setCharacters(updatedCharacters);
    }
  
    return (
      <>
        <DisplayCharacter onSubmit={agregarTarea} />
        <div className='tareas-lista-contenedor'>
          {
            characters.map((character)=> {
              return <div key={character.id}>
                <p>{character.name}</p>
              </div>
            }
              
            )
          }
        </div>
      </>
    );
  
  }

  export default ListCharacters;