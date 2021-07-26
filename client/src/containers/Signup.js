import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import './main.scss'
import { useMutation } from 'react-query';




  const Signup = () => {
  const { register } = useForm();




  const createUser = async (users) => {
    await axios.post(`http://localhost:4000/api/user`, user)
    .then((result)=>{
      console.log('success save')
    }).catch((err)=>{
      console.log(err)
    })
 }
 const {mutate}=useMutation(createUser)


 const onChangeName=(ev)=>{
   setValue(ev.target.value)
 }
  return (
      
    <div className='signup-container'>
     <form   onSubmit={event => {
          event.preventDefault()
          mutate(value, {
           
          })
        }} >
     <Link to='/' className='back' ><li> Back</li></Link>
       <div className='name-inputs'>
       <div >
        <h3 className='title'>Add Client</h3>
        </div>
        <div >
        <input {...register("name", { required: true, maxLength: 20 })}    placeholder='Your first name'
       value={value}
       onChange={onChangeName}
        className='fname' />
        </div>
        
        <div >
          <input {...register("lname", { required: true, maxLength: 20 })}   placeholder='Your last name'
        value={value}
        onChange={ev => setValue(ev.target.value)}
          className='lname' />

        </div>
        <div>
          <input {...register("email", { pattern: /^[A-Za-z]+$/i })}  placeholder='Your Email' 
           value={value}
           onChange={ev => setValue(ev.target.value)}
          className='email' />

        </div>
        <div >
          <input {...register("password", { pattern: /^[A-Za-z]+$/i })}  placeholder='Your password' 
           
         value={value}
          onChange={ev => setValue(ev.target.value)}
          className='password' />

        </div>

       </div>
       <button
  
       type='liubmit' className='signup-btn' >Sign Up</button>
    
     </form>
     </div>
    
  )
}

export default Signup;
