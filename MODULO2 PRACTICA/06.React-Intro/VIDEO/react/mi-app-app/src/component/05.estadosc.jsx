import React, { Component } from 'react'
import Aestadosc from './05a.estadosc'

let proporciona = "jonathan pasado por props";
export default class Estadosc extends Component {
    
  render() {
    /** aqui se puede hacer destreucturing */
    return (
        <div>
            <p>estado padre</p>
            <Aestadosc proporciona={proporciona}></Aestadosc>
        </div>
      
    )
  }
}

// props
// state
// setState

/**
 * LIFECYCLE
 * componentDidMount(){} cuando el componente se monta
 * componentDidUpdate(prevPros, prevState){} cuando el componente se actualiza
 * componentWillUnmount cuando el componente se desmonta
*/