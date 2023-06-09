import React from "react";
import '../App.css';

export default function  Propiedades({numero, abc, que}){
    return (
        <div className="componente-css">
            <p>{abc} soy un componente {que} el numero {numero}</p>
        </div>
    )
}