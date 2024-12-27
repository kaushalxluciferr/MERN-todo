import React from 'react'
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import {NavLink} from 'react-router-dom'
function Todocard({title,body,id,delid}) {
  const userid=sessionStorage.getItem('id')
  return (
    <div className='p-3 todo-card'>
   <div>
   <h5>{title}</h5> <hr className='hr'/>
   <p>{body}</p>
   </div>
   <div className='d-flex justify-content-between'>
   <div onClick={()=>{delid(id)}
   } className='b'>Delete<MdDelete className=' b' /></div>
   {userid? <>   <NavLink to={`/update/${id}`}>
   <div className='a'>Update<RxUpdate className='a'/></div>
   </NavLink></>:<></>}

   </div>
    </div>
  )
}

export default Todocard
