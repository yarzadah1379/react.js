import React from 'react'
import {Link} from 'react-router-dom'
import {useAllUsers} from '../hooks'
import './table.scss'
const Table = ({setUserId}) => {

    const { data:users, isLoading } = useAllUsers()

return(
<div >

         <table className="table-latitude">
                 <caption>User Information</caption>
                  <thead>
                      <th>id</th>
                      <th>Name</th>
                      <th>LastName</th>
                      <th>E-mail</th>
                      <th>Setting</th>
                </thead>
              
                <tbody>
                   
           
            {isLoading ? 'loading' : users.map((user,index)=>(
                <tr  key={user._id} > 
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.lname}</td>
                 <td>{user.email}</td>
                 <td><button onClick={()=>setUserId(user._id)}> Edit</button>
              <button>Delete</button></td>
                 </tr>
                
            ))}
           
                  
                </tbody>
            </table>
            </div>
)
}

export default Table
