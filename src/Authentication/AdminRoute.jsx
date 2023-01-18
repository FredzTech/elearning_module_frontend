import React,{ useContext } from 'react'
import { useState } from 'react'
import { Navigate, Outlet} from 'react-router'
import { UserdataContext } from './AuthContextProvider'
import { UserContext } from './AuthContextProvider'
import { Sidebar } from '../components/Admin/Sidebar'
import { useEffect } from 'react'
export const AdminRoute = () => {
    const isAuthenticated = useContext(UserContext)
    const userData = useContext(UserdataContext)
    const [isAdmin,setAdmin] = useState(false)
    useEffect(()=>{
        if(userData.role ==='Admin'){

        setAdmin (true);

    } 
    },[])
   
return !isAdmin  ?   <div className='flex sm:flex-col'><Sidebar/> <Outlet/></div> : <Navigate to="forbidden" />;
      
    
    
  
}
