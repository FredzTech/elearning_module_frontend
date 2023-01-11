import React from 'react'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Whatsapp from '../assets/whatsapp.png'

export default function  Footer () {
  return (
    <div className='flex gap-48 h-40 bg-light-grey w-screen text-center p-8'>
        <div className='text-4xl text-center'>E-MODULE</div>
        <div className="flex">Get our app in google play store</div>
        <div className="flex gap-20">
            <img src={Twitter} alt="" className='h-20 '  />
            <img src={Whatsapp} alt="" className='h-20 '  />
            <img src={Linkedin} alt="" className='h-20 '  />
            <img src={Facebook} alt="" className='h-20 '  />
        </div>
    </div>
  )
}
