import React from "react";
import Botones from "./Botones";

const studentName = "jonathan ivan rendon bermeo";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  const lis = techSkills.map((nombre) => <li key={nombre}>{nombre}</li>);
  return(
    <div>
      <h1>soy texto</h1>
      <h3>{studentName}</h3>
      <ul>{lis}</ul>
      <Botones modulo1="Módulo 1" modulo2="Módulo 2" alerts={alerts}></Botones>
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
