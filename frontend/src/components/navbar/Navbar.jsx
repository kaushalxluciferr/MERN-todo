import React from 'react'
import './Navbar.css'
import { FaBookReader } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store';

function Navbar() {
  const isLoggedIn=useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn);
  const dispatch=useDispatch()
  const logout=()=>{
dispatch(authActions.logout())
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b className='todoo'>TO-DO APP <span><FaBookReader /></span></b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><NavLink className="navv" to={"/"}>Home</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><NavLink className="navv" to={"/about-us"}>About us</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <NavLink className="btn-todo" to={"/todo"}>ToDo</NavLink> </a>
        </li>
        
        {!isLoggedIn?<>
          <li className="nav-item">
          <a className="nav-link active btn-nav" aria-current="page" href="#"> <NavLink className=".btn-nav" to={"/signup"}>Sign-Up</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active btn-nav" aria-current="page" href="#"> <NavLink className=".btn-nav" to={"/signin"}>Sign-IN</NavLink></a>
        </li>
        </>:<>
        <li className="nav-item" onClick={logout}>
          <a className="nav-link active btn-nav" aria-current="page" href="#">Logout</a>
        </li></>}
        
        
      
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
