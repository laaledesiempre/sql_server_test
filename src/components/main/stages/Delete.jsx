import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Delete = () => {
  const [deleteID, setDeleteID] = useState()
  const [IDListDelete, setIDListDelete] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/get/ids').then(
      (response) => {
        setIDListDelete(response.data)
      }, (error) => {
        console.log(error)
      }
    )
  }, [])
  const deleteIdDb = () => {
    let confirmation = confirm("De verdad desea eliminar el elemento " + deleteID + "?")
    if (confirmation) {
      axios.delete('http://localhost:3001/delete/characters/id/' + deleteID).then(
        (response) => {
          if (response.status == 200) {
            window.alert("deleted with success")
            document.querySelectorAll("select").forEach((e) => {
              e.value = ""
            })
          }
        }, (error) => {
          alert(error)
        }
      )
    }
  }
  return (
    <article className='create-form-wrapper'>
      <form onSubmit={(e) => { e.preventDefault() }} className='create-form-wrapper'>
        <label htmlFor='idToDelete'>Id of the element you want to delete</label>
        <select id="idToDelete" onChange={(e) => { setDeleteID(e.target.value) }}>
          <option value="">Select an existent id</option>
          {IDListDelete && IDListDelete.map((e) => {
            return <option key={e.ID} value={e.ID}>{e.ID}</option>
          })}
        </select>
        <button type='submit' disabled={!deleteID} onClick={() => { deleteIdDb() }}>DELETE</button>
      </form>
    </article>
  )
}

