import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
const data = [
    { title: 'Total Users', number:200,  },
    { title: ' Total Students', number: 167, },
    { title: 'Total Tutors', number: 33, },
    { title: 'Total Courses', number: 4, },
  ]

export const AdminDashboard = () => {
  return (
    <div className='flex gap-20 m-10 flex-wrap  sm:gap-8'>
        {data.map((data)=>{
            return(
                <div className='bg-silver h-28 rounded-md'>
                    <div className="bg-grey text-white  p-3" key={data.title}>
                        {data.title}
                    </div>
                    <div className=" text-4xl p-3" key={data.title}>{data.number}</div>
                </div>
            )
        })}
        <Link to="/admin/tutor-reg"><button>ADD TUTOR</button></Link>
        <Link to="/admin/course"><button>ADD Course</button></Link>
    </div>
  )
}