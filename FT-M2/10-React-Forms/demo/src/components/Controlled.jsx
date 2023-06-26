import React, { useState } from 'react';

export default function Form() {
  //? lo que esta aqui abajo son estados siempre debe estar dentro del componente este controlo lo que sucede con el componente controlado
  // cuando cambian los valores del input el componente guarda los valores en su state
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  //? esta funcion valida el input usuername
  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }

  //este es un hooks
  function handleChange(e) {
    setUsername( validateUser(e.target.value));
  }

  return (
      <form>
        {/* //este input funciona correctamente sinla funcion handleChange tal y como se encuentra aqui solo debes descomentar ya que no utiliza hooks
          <input className={error && 'danger'}
          name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/> */}

        <input className={error && 'danger'}
          name="username" value={username} placeholder="username" onChange={handleChange}/>
        {!error ? null : <span>{error}</span>}

        <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    );
}

// el form tiene un state, validar los valores ingresados, mostrar mensajes de validacion.

// *librerias y metodos para forms