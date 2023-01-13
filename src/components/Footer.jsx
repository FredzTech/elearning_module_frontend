import React from 'react'
import { Link } from 'react-router-dom'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Whatsapp from '../assets/whatsapp.png'
import GooglePlaystore from '../assets/googlePlaystore.png'

export default function  Footer () {
  return (
    <div className='flex gap-48 h-auto bg-light-grey w-screen text-center  p-8 mb-0 sm:flex-col sm:gap-10'>
        <div className='text-4xl text-center align-center'>E-MODULE</div>
       
        {/* <div className="br-blue">
            <h3 className='text-3xl pb-2'>App</h3>
            <p>Get our app in google play store</p>
            <img src={GooglePlaystore} alt="" className='h-20 '  />
        </div> */}
         <div className='flex flex-col gap-3 p-8 '>
           <Link to="courses">Courses</Link>
           <Link to="units">Units</Link>
           <Link to="pricing">Subscription</Link>
           <Link to="home">Home</Link>
         </div>
         <div className='justify-center items-center'>
          <h3 className='text-3xl mb-4'>Socials</h3>
          <div className="flex gap-8 justify-center items-center">
            
              <img src={Twitter} alt="" className='h-10 '  />
              <img src={Whatsapp} alt="" className='h-10 '  />
              <img src={Linkedin} alt="" className='h-10 '  />
              <img src={Facebook} alt="" className='h-10 '  />
          </div>
        </div>
    </div>
  )
}
