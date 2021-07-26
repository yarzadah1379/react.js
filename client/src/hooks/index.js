import * as api from "../api"
import { useQuery, useMutation, queryCache } from "react-query"


const useAllUsers=() =>{
  return useQuery("users",  api.getAllUsers);
}


const useUser=(userId) =>{
  return useQuery(["user", userId], () => api.getUser(userId));
}



const useDeleteUser = () => {
  return useMutation(api.deleteUser, {
    onSuccess: (_, id) => {
      const users = queryCache.getQueryData("users")
      const data = users.filter((item) => item._id !== id)
      queryCache.setQueryData("users", data)
    },
  })
}

const useUpdateUser = () => {
  return useMutation(api.updateUser, {
    onSuccess: (_, { id, ...variables }) => {
      queryCache.refetchQueries("users")
      queryCache.refetchQueries(["user", id])
    },
  })
}

export {
    useAllUsers,
  useDeleteUser,
  useUser,
  useUpdateUser,
}
