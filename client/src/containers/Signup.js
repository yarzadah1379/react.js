import React from "react";
import axios from "axios";
import { useMutation,useQueryClient } from "react-query";

import {Link} from 'react-router-dom'

import { useForm } from "react-hook-form";
import './main.scss'




const createUser = async (user) => {
  const { data } = await axios.post("http://localhost:4000/api/user", user);
  
  return data.user;
};

function useCreateUser() {
  const createUserMutation = useMutation(createUser);

  return createUserMutation.mutateAsync
}
function Signup() {
  const queryClient = useQueryClient()

 
  const { handleSubmit, register,errors } = useForm();

  const createUser = useCreateUser();

  function onSubmit(values) {
    console.log(values)


    // you must get these data from form...
    const data = {
      name: values?.name,
      lname:values?.lname,
      email: values?.email,
      password: values?.password

    };
    
    // 
    // without updating list of users
    // 
    // createUser(data);          


    // if you want to refetch list of users:
    createUser(data, {
      onSuccess: (data) => {

        // this will update 'users' query
        queryClient.invalidateQueries(['users']);
      }
    })
  }
  return (
    <div className='signup-container'>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Link to='/' className='back' ><li> Back</li></Link>
      <div className='name-inputs'>
      <div >
       <h3 className='title'>Logint</h3>
       </div>
       <div>
       <input  {...register("name")} className='name'  placeholder='Your name' />
       </div>
       <div>
       <input {...register("lname")} className='lname'  placeholder='Your lastName'/>

       </div>
      
       <div>
         <input {...register("email")}  placeholder='Your Email' className='email' />

       </div>
       <div >
         <input {...register("password")}  placeholder='Your password' className='password' />

       </div>


      </div>
      <button type='submit' className='signup-btn'>Log In</button>
    </form>
</div>
  );
}
export default Signup;