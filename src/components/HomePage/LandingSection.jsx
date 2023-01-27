import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import HomeImage from "../../assets/homeimage.png";
import Mechatronic from "../../assets/courses/mechatronic.jpeg";
import Mechanical from "../../assets/courses/mechanical.jpeg";
import CompScience from "../../assets/courses/computer-science.jpeg";
import Electrical from "../../assets/courses/electrical.jpeg";
import Tutor1 from "../../assets/Screenshot from 2023-01-13 04-58-06 .png";
import Tutor2 from "../../assets/Screenshot from 2023-01-13 04-58-49.png";
import { FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";


const tutors = [
  {
    name: "Prof. Eugine Maina",
    image: Tutor1,
    course: "Mechatronic Engineering",
    text: "“The ideal engineer is a composite … He is not a scientist, he is not a mathematician, he is not a sociologist or a writer; but he may use the knowledge and techniques of any or all of these disciplines in solving engineering problems.”",
    whatsapp: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Dr. Evelyne Chemboi",
    image: Tutor2,
    course: "Electrical Engineering",
    text: "“We need to understand that if we all work on inclusion together, it’s going to be faster, broader, better, and more thorough than anything we can do on our own.”",
    whatsapp: "#",
    twitter: "#",
    linkedin: "#",
  },
];

const LandingSection = () => {
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const { data: coursesData } = await axios.get("/course/all-courses");
        console.log(coursesData);
        setCoursesData(coursesData);
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoursesData();
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-white  to-blue-300   flex w-screen  py-10 pl-16 sm:p-4 h-auto sm:flex-col md:flex-col sm:gap-8 md:gap-10">
        <div className="text-3xl font-serif h-full w-full  sm:bg-silver sm:bg-opacity-50 sm:p-1 sm:-mb-96 md:-mr-28">
          <h3 className="text-[3.2rem] text-bold mb-3">Studying Made Easier </h3>
          <p>With access to well curated study materials from :</p>
          <ul className="list-disc p-6">
            <li>Videos</li>
            <li>Notes</li>
            <li>Quizzes and even </li>
            <li>A chance to interact with qualified tutors</li>
          </ul>
          <p> Enrol to get access to this and so much more.</p>
          <div className="mt-16  flex gap-20">
            <button className="ml-10 bg-white border-primary text-primary ring-4 ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Try free
            </button>
            <button className="block text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Enroll
            </button>
          </div>

        </div>
          <img src={HomeImage} alt="" className="md:-mt-[80%]     object-right bg-cover mr-0 " />

       
      </div>
      {/* Courses Section */}
      <div className="bg-silver  w-screen">
        <h3 className="text-6xl font-bold text-center mt-3">Get Started</h3>
        <p className="mb-6 text-center">Explore the courses</p>
        <div className="flex p-6 gap-8 w-full overflow-x-scroll">
          {coursesData.map((course, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center max-w-sm mx-auto hover:scale-105 ease-in-out duration-300"
              >
                <div
                  style={{ backgroundImage: `url(${course.courseImage})` }}
                  className="bg-gray-300 h-48 lg:w-56 w-48 rounded-lg shadow-md bg-cover bg-center"
                ></div>
                <div className="w-44  md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                  <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
                    {course.courseTitle}
                  </div>
                  <div className="flex items-center justify-center py-2 px-3 bg-gray-400">
                    <Link to={`courses/${course._id}`}>
                      {/* <Link to={`courses`}> */}
                      <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
                        View the course
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white  w-screen">
        <h3 className="text-5xl font-bold text-center mt-3">Our Team</h3>
        <p className="mb-6 text-center">Meet our lead Tutors</p>
        <div className="flex  px-10 mt-10 sm:flex-col md:flex-col sm:px-4 sm:gap-2 sm:mt-2 ">
          {tutors.map((tutor, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center p-6 mx-auto my-8 "
                key={index}
              >
                <div className="flex ">
                  <img
                    src={tutor.image}
                    alt=""
                    className="h-48 -mr-16 -mt-16 rounded-full shadow-lg md:-mr-4 md:h-24 md:mt-20 sm:-mr-4 sm:h-24 sm:mt-20"
                  />

                  <div className="w-auto shadow-md  pl-24 pr-4 py-4 h-auto flex flex-col sm:p-6">
                    <div>
                      <p className="text-primary text-bold mb-1 text-lg">
                        {tutor.name}
                      </p>
                      <p className="text-bold mb-2 text-md">{tutor.course}</p>
                      <p className="text-xs">{tutor.text}</p>
                    </div>
                    <div className="text-center pt-4 flex gap-3">
                      {/* <a href={tutor.whatsapp}><FaWhatsapp className='h-8 w-8'/> </a> */}
                      <a href={tutor.twitter}>
                        <FaTwitter className="h-8 w-8 text-primary " />
                      </a>
                      <a href={tutor.linkedin}>
                        <FaLinkedin className="h-8 w-8 text-zaffre" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LandingSection;
