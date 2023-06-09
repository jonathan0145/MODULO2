import React from 'react'

export default class Animals extends React.Component {
  


  render (){
    return <div>
      {
        this.props.animals.map((animal, index) => (
          <div key={index}>
            <h5>{animal.name}</h5>
            
            <img 
              width="300px" 
              src={animal.image} 
              alt={animal.name}
            />

            <span>{animal.specie}</span>
          </div>
        ))
      }
    </div>
  }
}
