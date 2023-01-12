import React from 'react'
import PageNotFound from '../assets/jisunpark_404-error.gif'

export const NotFound = () => {
  return (
    <div className='text-center'>
        
      <img src={PageNotFound} alt="Sorry! Page not found" />
      
    </div>
  )
}
