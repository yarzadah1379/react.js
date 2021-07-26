import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";

import { useUpdateUser } from "../hooks/index"
import './main.scss'

const Edit = ({ id, name, lname,email, password }) => {

  const updateUser= useUpdateUser()

  
  const onSubmit = (values) => {
    updateUser({ id, ...values })
  }
  const { register } = useForm();


  return (
   
   
    <div className='signup-container'>
       <form  method="post" onSubmit={getFormValues(onSubmit)}>
     <Link to='/' className='back' ><li> Back</li></Link>
       <div className='name-inputs'>
       <div >
        <h3 className='title'>Add Client</h3>
        </div>
        <div >
        <input {...register("name", { required: true, maxLength: 20 })}  defaultValue={name} 
       
        className='fname' />
        </div>
        
        <div >
          <input {...register("lname", { required: true, maxLength: 20 })} defaultValue={lname} 
        
          className='lname' />

        </div>
        <div>
          <input {...register("email", { pattern: /^[A-Za-z]+$/i })}  
           defaultValue={email}
          className='email' />

        </div>
        <div >
          <input {...register("password", { pattern: /^[A-Za-z]+$/i })}   
           defaultValue={password}
           
          className='password' />

        </div>

       </div>
       <button
  
       type='liubmit' className='signup-btn' >Sign Up</button>
    
     </form>
     </div>
   
  )
}

export default Edit;
