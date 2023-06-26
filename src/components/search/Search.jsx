import axios from "axios"
import { useEffect, useState } from "react"

export const Search=()=>{
  const [list,setList]=useState([])
  const fetchList=(query)=>{
    if (query) {
    axios.get('http://localhost:3001/get/characters/name/'+query).then(
      (response)=>{
        console.log(response.data)
        if (response.status==500) {
          console.log("todo")
          //todo
        } else if (response.status==200) {
          setList(response.data)}},
      (err)=>{
          console.log(err)
          //todo
        })} else {setList([])}}
    

  return (
  <>
      <div className="search-bar">
    <input type="text" onChange={(e)=>{
        fetchList(e.target.value)
      }}/>
    <button className="search-button"></button>
    </div>
    <div className="results-wrapper">
      {list.map((e)=>{
          return <div key={e.ID}>
            <h3>{e.NAME}</h3>
            <p>{e.DESCRIPTION}</p>
            </div>
        })}
  </div>
  </>
  )
  
}
