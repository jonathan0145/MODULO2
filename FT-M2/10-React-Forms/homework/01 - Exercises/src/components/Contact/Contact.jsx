import React from 'react'
import styled from'./Contact.modules.css'
import { useState } from 'react';
import { validatef } from '../validate.js';

export const validate = validatef;

export default function Contact () {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  function handleChange(evento){
    setInputs({
      ...inputs, [evento.target.name]: evento.target.value,
    })

    setErrors(
      validate({
          ...inputs,[evento.target.name]: evento.target.value,
      })
    )
  }

  function handleSubmit(evento){
    evento.preventDefault();
    const aux = Object.keys(errors);
    if(aux.length === 0){
      setInputs({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: "",
      })

      setErrors({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: "",
      })
    }
  }


  return <div className={styled.container_form}>
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Nombre:</label>
      <input name='name' value={inputs.name} className={errors.name && styled.warning} placeholder='Escribe tu nombre...' type='text' onChange={handleChange}/>
      <p className='danger'>{errors.name}</p>
      

      <label htmlFor="email">Correo Electrónico:</label>
      <input name='email' value={inputs.email} className={errors.email && styled.warning} placeholder='Escribe tu email...' type='text' onChange={handleChange}/>
      <p className='danger'>{errors.email}</p>
      

      <label htmlFor="phone">Teléfono:</label>
      <input name='phone' value={inputs.phone} onChange={handleChange} className={errors.phone && styled.warning} placeholder='Escribe un teléfono...' type='number'/>
      <p className='danger'>{errors.phone}</p>
      

      <label htmlFor="subject">Asunto:</label>
      <input name='subject' value={inputs.subject} className={errors.subject && styled.warning} placeholder='Escribe el asunto...' type='text' onChange={handleChange}/>
      <p className='danger'>{errors.subject}</p>

      <label htmlFor="message">Mensaje:</label>
      <textarea name='message' value={inputs.message} className={errors.message && styled.warning}
        placeholder='Escribe tu mensaje...' type='text' onChange={handleChange}></textarea>
      <p className='danger'>{errors.message}</p>
      

      <button type='submit'>Enviar</button>
    </form>
  </div>
}

