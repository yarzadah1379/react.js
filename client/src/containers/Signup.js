import React from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";

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
    <div className="signup-container">
  
 <form onSubmit={handleSubmit(onSubmit)}>
      <input  {...register("name")} />
      
      <input {...register("lname")} />
      <input {...register("email")} />
      <input {...register("password")} />

      
      <input type="submit" />
    </form>
    </div>
  );
}
export default Signup;