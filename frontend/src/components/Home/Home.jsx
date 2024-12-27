import React from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'
function Home() {
  return (
    <>
   <div className="home d-flex justify-content-center align-items-center">
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <h3 className=' txt1 text-center'>Add Your work here,</h3>
      <h3 className='txt1'>Remember your work</h3>
      <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Possimus, rerum.</p>
      <NavLink to={'/todo'}><button className='btn-todo'>Create TODO</button></NavLink>
      
    </div>
   </div>
    
    </>
  )
}

export default Home
