import React from 'react';

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

export default Character;
  