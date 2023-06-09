import React, { Component } from 'react'

export default class Aestadosc extends Component {
  constructor(props){
    super(props)
    this.state = {
        count:1,
        data: [1,2,3,4]
    }
  }

  componentDidMount(){
    alert("componentDidMount")
    console.log("cuando el componente se monta")
  };

  componentDidUpdate(){
    console.log("lo ejecuta react cuan se actualiza")
    if (this.state.count === "count") {
      this.setState({...this.state, count: 100})
    }
  }

  componentWillUnmount(){
    console.log("cuando se desmonta")
  }
  
    change = () =>{ // usar arrow function o bind para crear metodos o funciones
      // this.setState({count: this.state.count+1})// se puede hacer una funcion que retorne un objeto
      this.setState(
        (stateNew) => {
          return {...stateNew, count: this.state.count+1,};
        }, 
        ()=>{
          console.log(this.state); // este arrow function me consologuea en tiempo real
        }
      );
    };
  
    render() {
    return (
        <div>
            <p>{this.props.proporciona}</p>
            <p>{this.state.count}</p>
            <button onClick={this.change}>cambia</button>

            <h1>soy tu hijo</h1>
        </div>
    )
  }
}

/**
 * setState ayuda escuchar a react cuando hay un cambio
 */
