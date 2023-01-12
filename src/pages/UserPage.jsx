import React ,{useContext} from 'react'
import { UserContext } from '../context/AuthContextProvider';


const UserPage = () => {
    // const user = window.localStorage.getItem("token");
    const user = useContext(UserContext);
    console.log(user);
  return (
  <div>{user}</div>
  )
}
export default UserPage; 