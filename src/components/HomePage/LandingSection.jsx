import React from 'react'
import HomeImage from '../../assets/homeimage.png'
const LandingSection = () => {
  return (
    <>
    <div className="flex w-screen px-16">
        <div>
            <h3 className="text-4xl mb-3">Make Studying at School Easier </h3>
            <p>With access to well curated study materials from :</p>
            <ol className='style-numbered'>
                <li>Videos</li>
                <li>Notes</li>
                <li>Quizzes and even </li>
                <li>A chance to interact with qualified tutors</li>
            </ol>
            <p> Enrol to get access to this and so much more.</p>
        </div>
        <div>
            <img src={HomeImage} alt="" />
        </div>
    </div>
    </>
  )
}

export default LandingSection