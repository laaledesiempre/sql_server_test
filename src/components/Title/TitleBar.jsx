import React from 'react'

export const TitleBar = () => {
  return (
    <>
    <h1>Characters database</h1>
    <h2>Put your favourite characters!</h2>
    <nav>
        <button className="nav-element">Create</button>
        <button className="nav-element">Update</button>
        <button className="nav-element">Delete</button>
    </nav>
    </>
  )
}
