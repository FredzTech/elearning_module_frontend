import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from '../../assets/homeimage.png'
import Mechatronic from '../../assets/mechatronic.jpeg'
import Mechanical from '../../assets/mechanical.jpeg'
import CompScience from '../../assets/computer-science.jpeg'
import Electrical from '../../assets/electrical.jpeg'
import Tutor1 from '../../assets/Screenshot from 2023-01-13 04-58-06 .png'
import Tutor2 from '../../assets/Screenshot from 2023-01-13 04-58-49.png'
import Whatsapp from '../../assets/whatsapp.png'
import Twitter from '../../assets/twitter.png'
const LandingSection = () => {

  return (
    <>
    <div className="flex w-screen gap-60 pl-16 h-100 ">
        <div className='h-48'>
            <h3 className="text-4xl mb-3">Make Studying at School Easier </h3>
            <p>With access to well curated study materials from :</p>
            <ul className='list-disc p-6'>
                <li>Videos</li>
                <li>Notes</li>
                <li>Quizzes and even </li>
                <li>A chance to interact with qualified tutors</li>
            </ul>
            <p> Enrol to get access to this and so much more.</p>
            <div className="mt-16 z-10 flex gap-20">
              <button className="ml-10 bg-white border-blue text-blue ring-4 ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Try free</button>
              <button className="block text-white bg-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " >Enroll</button>
            </div>
        </div>
        <div className='object-none object-right'>
            <img src={HomeImage} alt="" className=''/>
        </div>
    </div>
    {/* lead tutors cection */}
    <div className='bg-silver  w-screen'>
      <h3 className='text-6xl font-bold text-center mt-3'>Get Started</h3>
      <p className='mb-6 text-center'>Explore the courses</p>
    <div className="flex flex-wrap gap-10 sm:flex-col sm:gap-4 " >
        
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
          <div style={{ backgroundImage: `url(${Mechatronic})` }}
              className="bg-gray-300 h-64 w-64 rounded-lg shadow-md bg-cover bg-center">

          </div>
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Mechatronic Engineering</div>
            <div className="flex items-center justify-center py-2 px-3 bg-gray-400">
              <Link to="courses">
                <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">View the course</button>
              </Link>
              
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
          <div style={{ backgroundImage: `url(${Mechanical})` }}
              className="bg-gray-300 h-64 w-64 rounded-lg shadow-md bg-cover bg-center">

          </div>
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Mechanical Engineering</div>
            <div className="flex items-center justify-center py-2 px-3 bg-gray-400">
              <Link to="courses">
                <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">View the course</button>
              </Link>
              
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
          <div style={{ backgroundImage: `url(${Electrical})` }}
              className="bg-gray-300 h-64 w-64 rounded-lg shadow-md bg-cover bg-center">

          </div>
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Electrical Engineering</div>
            <div className="flex items-center justify-center py-2 px-3 bg-gray-400">
              <Link to="courses">
                <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">View the course</button>
              </Link>
              
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
          <div style={{ backgroundImage: `url(${CompScience})` }}
              className="bg-gray-300 h-64 w-64 rounded-lg shadow-md bg-cover bg-center">

          </div>
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Computer Science</div>
            <div className="flex items-center justify-center py-2 px-3 bg-gray-400">
              <Link to="courses">
                <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">View the course</button>
              </Link>
              
            </div>
          </div>
        </div>
    </div>
    </div>
    <div className='bg-white  w-screen'>
      <h3 className='text-5xl font-bold text-center mt-3'>Our Team</h3>
      <p className='mb-6 text-center'>Meet our lead Tutors</p>
      <div className="flex gap-20 px-10 mt-10 sm:flex-col">
      <div className="flex flex-col justify-center items-center pb-6 mx-auto my-8 ">
            <div className='flex '>
              
               <img src={Tutor1} alt="" className='h-48 -mr-16 -mt-16 rounded-lg shadow-lg'/>
              
            
              <div className='w-auto shadow-md  pl-24 pr-4 py-4 h-auto flex flex-col'>
                <div>
                  <p className='text-blue text-bold mb-1 text-lg'>Prof. Eugine Maina</p>
                  <p className='text-bold mb-2 text-md'>Mechatronic Enginnering</p>
                  <p className='text-xs'>“The ideal engineer is a composite … He is not a scientist, he is not a mathematician, he is not a sociologist or a writer; but he may use the knowledge and techniques of any or all of these disciplines in solving engineering problems.”</p>
               
                </div>
                <div className='text-center pt-4'>
                <div className='text-center pt-4 flex gap-3'>
                  <img src={Whatsapp} alt="" className='h-8 ' />
                  <img src={Twitter} alt="" className='h-8 '  />
                </div>
                </div>
              </div>
              
            </div>
           
        </div>
        <div className="flex flex-col justify-center items-center pb-6 mx-auto my-8 ">
            <div className='flex '>
              
               <img src={Tutor2} alt="" className='h-48 -mr-16 -mt-16 rounded-lg shadow-lg'/>
              
            
              <div className='w-auto shadow-md  pl-24 pr-4 py-4 h-auto flex flex-col'>
                <div>
                  <p className='text-blue text-bold mb-1 text-lg'>Dr. Evelyne Chemboi</p>
                  <p className='text-bold mb-2 text-md'>Electrical Enginnering</p>
                  <p className='text-xs'>“We need to understand that if we all work on inclusion together, it’s going to be faster, broader, better, and more thorough than anything we can do on our own.”</p>
               
                </div>
                <div className='text-center pt-4 flex gap-3'>
                  <img src={Whatsapp} alt="" className='h-8 ' />
                  <img src={Twitter} alt="" className='h-8 '  />
                </div>
              </div>
              
            </div>
           
        </div>
      </div>
      
      
      
    </div>
    </>
  )
}

export default LandingSection