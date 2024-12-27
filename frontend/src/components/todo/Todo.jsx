import React, { useState } from 'react'
import './Todo.css'
import Todocard from './Todocard'
import { toast } from 'react-toastify'
import Update from './Update'
import axios from 'axios'
import { useEffect } from 'react'
function Todo() {


const id=sessionStorage.getItem('id')
const [data,setdata]=useState([])

 const [inp,setinp]=useState({
        title:"",
        body:""
    })


 const show=()=>{
document.getElementById("txtar").style.display='block'
    }

//handle input
    const change=(e)=>{
const {name,value}=e.target
setinp({...inp,[name]:value})
    }


    //create todo button
const submit=async()=>{
    if(inp.title===''||inp.body===""){
toast.error("Title or Body shouut not be empty")
    }
    else{
        if(id)
        { 
            const response=await axios.post(`${window.location.origin}/api/v2/addtask`,{title:inp.title,body:inp.body,id:id})
            console.log(response);
    setinp({
        title:"",
        body:"",
    })
    toast.success("task is added")
        }
        else{
    setdata([...data,inp])
    setinp({
        title:"",
        body:"",
    })
    toast.success("task is added")
    toast.error("signin to acess all feature")
}}}
 
 
//handle delete
 const del=async(cid)=>{
    if(id)
    {
        const response=await axios.delete(`${window.location.origin}/api/v2/delete/${cid}`,{
         data:{id:id},
        })
     console.log(id);
  toast.success("delete sucessful")
    }
    else{
      toast.error("please signup first")  
    }
}


//fethes the todo from the database
useEffect(()=>{
    if(id)
        {
            const fetchtodo=async ()=>{
                const response=await axios.get(`${window.location.origin}/api/v2/gettask/${id}`)    
                setdata(response.data.list)
            }
            fetchtodo()
        }   
       

    },[submit])  //whwnever we create it automatically display the todo in 

  return (
    <div className='todo'>
        
   <div className="todo-main">
    <input type="text" value={inp.title} onChange={change} placeholder='Enter Title' onClick={show} name='title' className='txt-todo' />
    <br /> <br />
    <textarea className='txt-todo' value={inp.body} name='body' onChange={change} placeholder='Enter Description' id='txtar' ></textarea>
    <button className='button' onClick={submit} >Add</button>
   </div>
   <div className="todo-body">
    <div className="container-fluid con">
        <div className="row ">
        {data&&data.map((i,index)=><>
        <div className=' hey col-lg-3  col-8 mx-5 my-2' key={index}>
            <Todocard title={i.title} body={i.body} id={i._id} delid={del} />
        
        </div>
        </>)}
        </div>
    </div>
   </div>
    </div>
  )
}


export default Todo
