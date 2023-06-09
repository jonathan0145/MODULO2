import React from 'react'

export default function Species (props) {
  return (
    <div>
      <h2>Species</h2>

    {props.species.map((specie, index) => (
  <button key={index} value={specie} onClick={props.handleSpecies}>
    {specie}
  </button>
 ))}

        <button name='All Animals' onClick={props.handleAllSpecies}>
          All Animals
        </button>
    </div>
  );
}
