import React from 'react';
import styled from "styled-components";


const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Buttons = styled.button`
margin: 10px;
border-radius: 5px;
padding: 5px;
`;

export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <DivButtons className={DivButtons}>
        <Buttons onClick={() => window.alert(alerts.m1)} className={Buttons}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)} className={Buttons}>Módulo 2</Buttons>
      </DivButtons>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }
