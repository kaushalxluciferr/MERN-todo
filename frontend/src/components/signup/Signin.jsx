import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Todo from '../todo/Todo';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

function Signin() {

const dispatch=useDispatch()

const navigate=useNavigate()
  const [inp,setinp]=useState({ 
    "email":"",
    "password":"",
  })
 

  const change=(e)=>{
    const{name,value}=e.target;
    setinp({...inp,[name]:value})
  }

const submit= async(e)=>{
  e.preventDefault()
  try{
const response=await axios.post(`${window.location.origin}/api/v1/login`,inp)
sessionStorage.setItem("id",response.data.others._id)
dispatch(authActions.login())
toast.success("login sucessfully")
navigate('/todo')

  }catch(error)
  {
    toast.error(error.message)
  }
}


  return (
   <>
    <div className='signup'>
      <div className="contain">
        <h3>Sign In Here</h3>
        <div className="box">
        <input onChange={change} value={inp.email} type="email" name="email" className='txt' placeholder='Enter Your Email:' /> <br /> <br />
         <input onChange={change} value={inp.password} type="password" name="password" className='txt' placeholder='Enter Your Pass' /> <br /> <br /> 
         <button onClick={submit} className='btn-cl'> SignIn</button>
        </div>

      </div>
    </div>
   </>
  )
}

export default Signin
