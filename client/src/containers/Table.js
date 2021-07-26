import React from 'react'
import { useAllUsers } from "../hooks"

import './table.scss'
const Table = () => {

    const { data:users, isLoading } = useAllUsers()

 
console.log(users)

return(
<div >

         <table className="table-latitude">
                 <caption>Employee Information</caption>
                  <thead>
                      <th>id</th>
                      <th>Name</th>
                      <th>LastName</th>
                      <th>E-mail</th>
                </thead>
              
                <tbody>
                   
            <tr >
            {isLoading ? 'loading' :users.map((user)=>(
                <>
                <td key={user._id}></td>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.lname}</td>
                 <td>{user.email}</td>

                </>
            ))}
            </tr>
                  
                </tbody>
            </table>
            </div>
)
}

export default Table

