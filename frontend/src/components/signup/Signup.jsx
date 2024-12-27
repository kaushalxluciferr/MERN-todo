import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Signup() {
const navigate=useNavigate()
  const[inp,setinp]=useState({
    "email":"",
    "username":"",
    "password":"",
  })
  const change=(e)=>{
const{name,value}=e.target
setinp({...inp,[name]:value})

  }

const submit=async (e)=>{
  e.preventDefault()
  try{

    await axios.post(`${window.location.origin}/api/v1/register`,inp).then((response)=>{
      console.log(response);
      toast.success("signup sucessfull")
    })
    setinp({
      "email":"",
      "username":"",
      "password":"",
    })
    navigate('/signin')
  }catch(error)
  {
    toast.error(error.message)
  }
  
}

  return (
    <div className='signup'>
      <div className="contain">
        <h3>Sign Up Here</h3>
        <div className="box">
        <input value={inp.email} onChange={change} type="email" name="email" className='txt' placeholder='Enter Your Email:' /> <br /> <br />
         <input value={inp.username} onChange={change} type="text" name="username" className='txt' placeholder='Enter Your Username' /> <br /> <br />
         <input value={inp.password} onChange={change} type="password" name="password" className='txt' placeholder='Enter Your Pass' /> <br /> <br /> 
         <button className='btn-cl' onClick={submit}> SignUp</button>
        </div>

      </div>
    </div>
  )
}

export default Signup
