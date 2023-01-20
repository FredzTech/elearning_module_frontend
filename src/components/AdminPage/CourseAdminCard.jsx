import React from "react";

const CourseAdminCard = ({ courseImage, courseTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto hover:scale-105 ease-in-out duration-300">
      <div
        style={{ backgroundImage: `url(${courseImage})` }}
        className="bg-gray-300 h-48 lg:w-56 w-48 rounded-lg shadow-md bg-cover bg-center"
      ></div>
      <div className="w-44  md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
        <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
          {courseTitle}
        </div>
        <div className="flex items-center justify-center py-2 px-3 bg-gray-400">
          <Link to="courses">
            <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 w-full">
              View the course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseAdminCard;
