import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
export const Create = () => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const fetchData = () => {
    axios.post('http://localhost:3001/post/newcharacter', { name: name, description: description }).then(
      (response) => {
        if
          (response.status == 200) {
            window.alert("Agregado con exito")
          document.querySelectorAll("input").forEach((e) => {
            e.value = ""
          })
        }

        else if (response.status == 500) { window.alert("Something went wrong with the server. we apology") }
      },
      (error) => { window.alert(error) }
    )
  }

  return (

    <article className="create-form-wrapper">
      <h3>Crear personaje</h3>
      <form className="create-form-wrapper" onSubmit={(e) => { e.preventDefault() }}>
        <label htmlFor="name">Nombre:</label>
        <input type='text' id="name" placeholder='Ej. Superman' onChange={(e) => {
          setName(e.target.value)
        }} />
        <label htmlFor="description">Descripcion (opcional)</label>
        <input type='text' id="description" placeholder='Ej. Hombre volador' onChange={(e) => {
          setDescription(e.target.value)
        }} />
        <button type="submit" disabled={!name} onClick={() => { fetchData() }}>Guardar en la base de datos</button>
      </form>
    </article>
  )
}

