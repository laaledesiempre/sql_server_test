import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Delete = () => {
  const [deleteID, setDeleteID] = useState()
  const [IDListDelete, setIDListDelete] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/get/ids').then(
      (response)=>{
        setIDListDelete(response.data)
      }, (error)=>{
        console.log(error)
      }
    )},[])
  const deleteIdDb=()=>{ axios.delete('http://localhost:3001/delete/characters/id/'+deleteID).then(
    (response)=>{
      if (response.status==200){
        window.alert("deleted with success")
        
      } else if (response.status==500){
        window.alert("error from the server")
      } (error) =>{
        console.log(error)
      }
    }
  )

  }
return (
    <article className='create-form-wrapper'>
  <label>Id of the element you want to delete</label>
  <select onChange={(e)=>{setDeleteID(e.target.value)}}>
    <option value="">Select an existent id</option>
      {IDListDelete && IDListDelete.map((e)=>{ return <option key={e.ID} value={e.ID}>{e.ID}</option>
      })}
  </select>
  <button onClick={()=>{deleteIdDb()}}>DELETE</button>
    </article>
  )
}

