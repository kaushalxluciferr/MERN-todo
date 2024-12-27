import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './components/signup/Signup'
import Signin from './components/signup/Signin'
import Todo from './components/todo/Todo'
import {ToastContainer} from 'react-toastify'
import Update from './components/todo/Update'
import { useDispatch } from 'react-redux'
import { authActions } from './store'
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
const id= sessionStorage.getItem("id");
if(id)
{
dispatch(authActions.login())
}
  },[])
  return (
  <>
 <div>
  <Router>
  <Navbar/>
  <Routes>
<Route path='/about-us' element={<About/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/todo' element={<Todo/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/update/:id' element={<Update/>}/>
</Routes>
  </Router>
<ToastContainer position='bottom-right'/>
 </div>
  </>
  )
}

export default App
