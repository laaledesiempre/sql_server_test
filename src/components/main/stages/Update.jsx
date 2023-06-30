import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Update = () => {
  const [IDList, setIDList] = useState([])
  const [updateName, setUpdateName] = useState("")
  const [updateDescription, setUpdateDescription] = useState("")
  const [updateID, setUpdateID] = useState()

  useEffect(() => {
    axios.get('http://localhost:3001/get/ids').then(
      (response) => {
        setIDList(response.data)
        console.log(response)
      }, (error) => {
        console.log(error)
      }
    )
  }, [])
  const fetchUpdate = () => {
    axios.put('http://localhost:3001/put/characters/id/' + updateID, { name: updateName, description: updateDescription }).then(
      (response) => {
        if (response.status == 200) {
          window.alert("Updated succesfully")
          document.querySelectorAll("input").forEach((e) => {
            e.value = ""

          })

        } else if (response.status == 500) {
          window.alert("Sorry, server error, try again!")
        }
      }, (error) => {
        console.log(error)
      }
    )
  }
  return (<article className='create-form-wrapper'>
    <form className='create-form-wrapper' onSubmit={(e) => { e.preventDefault() }}>
      <label>Id of the element you want to change</label>
      <select onChange={(e) => { setUpdateID(e.target.value) }}>
        <option value="">Select an existent id</option>
        {IDList && IDList.map((e) => {
          return <option key={e.ID} value={e.ID}>{e.ID}</option>
        })}
      </select>
      <label htmlFor="name">Nuevo Nombre (obligatorio)</label>
      <input type="text" name="name" required onChange={(e) => {
        setUpdateName(e.target.value)
      }} />
      <label htmlFor="description">Nueva Descripcion(opcional)</label>
      <input type="tect" name="description" onChange={(e) => {
        setUpdateDescription(e.target.value)
      }} />
      <button type='submit' disabled={!updateName || !updateID} onClick={() => { fetchUpdate() }}>Actualizar</button>
    </form>
  </article>
  )
}
