import React from 'react'
import {Create, Update, Delete, Search} from "../index.jsx"

export const Main = () => {
  return (
    <>
    <main>
     <section className='section_wrapper'><Create/></section>
    
    <section className='section_wrapper'><Update/></section>

    <section className='section_wrapper'><Delete/></section>
 
    </main>
    <aside>
    <Search/> 
    </aside>
    </>
  )
}
