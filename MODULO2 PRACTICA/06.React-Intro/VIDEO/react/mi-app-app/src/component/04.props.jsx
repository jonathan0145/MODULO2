// import React from "react"; no hay necesidad de importarlo en los componentes
import '../App.css';

export default function  Imagen({a, b, c}){
    return (
        <div className="componente-image">
            <p>esto es una {a} de un {b} dale {c}</p>
            <p>aqui toy</p>
        </div>
    )
}