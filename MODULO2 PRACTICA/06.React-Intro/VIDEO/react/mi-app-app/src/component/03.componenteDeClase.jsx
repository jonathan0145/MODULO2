import React from "react";

export default class Welcome extends React.Component{
    render(){
        return (<div className="componente-css" id="clases">
            <p>{this.props.wel}</p>
        </div>)
    }
}