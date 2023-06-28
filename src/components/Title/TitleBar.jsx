import React from 'react'

export const TitleBar = () => {
  const changeMainPosition=(amountVH)=>{
    console.log(amountVH)
    document.querySelector("main").style.marginLeft=(amountVH)
  }
  return (
    <>
    <h1>Characters database</h1>
    <h2>Put your favourite characters!</h2>
    <nav>
        <button onClick={()=>{changeMainPosition("0vw")}} className="nav-element">Create</button>
        <button onClick={()=>{changeMainPosition("-100vw")}} className="nav-element">Update</button>
        <button onClick={()=>{changeMainPosition("-200vw")}} className="nav-element">Delete</button>
    </nav>
    </>
  )
}
