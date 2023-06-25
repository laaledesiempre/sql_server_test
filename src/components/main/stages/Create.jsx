import { useEffect,useState } from "react"
import React from 'react'
import axios from "axios"
export const Create = () => {
    
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const fetchData= () => {axios.post('http://localhost:3001/post/newcharacter',{name: name, description: description}).then(
    (response)=>{if 
      (response.status==200) 
      {window.alert("Agregado con exito")} 
        else if (response.status==500)
      {window.alert("Something went wrong with the server. we apology")}},
    (error)=>{window.alert(error)}
  )}
    
  return (

    <article className="create-form-wrapper">
      <h3>Crear personaje</h3>
      <label>Nombre:</label>
      <input type='text' placeholder='Ej. Superman' onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <label>Descripcion (opcional)</label>
      <input type='text' placeholder='Ej. Hombre volador' onChange={(e)=>{
        setDescription(e.target.value)
      }}/>
      <button disabled={!name} onClick={()=>{fetchData()}}>Guardar en la base de datos</button>
    </article>
  )
}

