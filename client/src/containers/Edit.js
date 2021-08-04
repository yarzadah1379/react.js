import React from "react";
import {Link} from 'react-router-dom'
import {useUser} from '../hooks'

import { useForm } from "react-hook-form";
import './main.scss'


function Edit({userId}) {
 
  const { data:user, isLoading } = useUser()

  const { handleSubmit, register,errors } = useForm();

  
  return (
    <div className='signup-container'>
    <form>
    <Link to='/' className='back' ><li> Back</li></Link>
      <div className='name-inputs'>
      <div >
       <h3 className='title'>Edit</h3>
       </div>
       <div>
       <input  {...register("name")} className='name' defaultValue={user.name} />
       </div>
       <div>
       <input {...register("lname")} className='lname' defaultValue={user.lname} />

       </div>
      
       <div>
         <input {...register("email", { pattern: /^[A-Za-z]+$/i })}  className='email' defaultValue={user.email} />

       </div>
       <div >
         <input {...register("password", { pattern: /^[A-Za-z]+$/i })}   className='password' defaultValue={user.password}/>

       </div>


      </div>
      <button type='submit' className='signup-btn'>Log In</button>
    </form>
</div>
  );
}
export default Edit;