import React from 'react'
import PageNotFound from '../assets/jisunpark_404-error.gif'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
    
    <div className='text-center bg-lime'>
       
      <img src={PageNotFound} className="w-full h-full" alt="Sorry! Page not found" />
       {/* <Link to={"/"}><button className="  bg-primary p-3 absolute text-5xl rounded-md text-white top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">Take me Home</button></Link> */}
      
      
    </div>
    </>
  )
}
