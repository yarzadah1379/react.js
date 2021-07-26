import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";

import './main.scss'

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
     
   
    <div className='signup-container'>
      
     <form>
     <Link to='/' className='back' ><li> Back</li></Link>
       <div className='name-inputs'>
       <div >
        <h3 className='title'>Logint</h3>
        </div>
        <div>
          <input {...register("email", { pattern: /^[A-Za-z]+$/i })}  placeholder='Your Email' className='email' />

        </div>
        <div >
          <input {...register("password", { pattern: /^[A-Za-z]+$/i })}  placeholder='Your password' className='password' />

        </div>


       </div>
       <button type='submit' className='signup-btn'>Log In</button>
     </form>
     </div>
    
  )
  
}

export default Login
