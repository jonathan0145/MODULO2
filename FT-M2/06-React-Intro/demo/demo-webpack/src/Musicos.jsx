import React from 'react';
import Musico from './Musico.jsx';

export default function Musicos({ musicos }) {
  var i = 0;
    return (
      <div>
        {
          musicos.map(musico => (
            <Musico name={musico.name +" " +i++} lastname={musico.lastname} band={musico.band} />
          ))
        }
      </div>
    )
};