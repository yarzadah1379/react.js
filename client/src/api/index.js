

import axios from "axios";

const getAllUsers = async () => {
  const { data } = await axios.get(
    "http://localhost:4000/api/user"
  );

  return data.user;
  
};


const getUser = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:4000/api/user/${userId}`
  );
  return data.user;
};





const updateUser = async ({ id, ...user }) => {
  const { data } = await axios.put(`http://localhost:4000/api/user/${id}`, user)
  return data.user;
}

const deleteUser = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/api/user/${id}`)
  return data.user;
}

export {
    getAllUsers,
    getUser,
    
    updateUser,
    deleteUser,
}
