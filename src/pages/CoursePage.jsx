import React from "react";
import { Link } from "react-router-dom";
import { Chapter, CourseHeading, SubNav } from "../components";
import cardImage from "../assets/course-display.png";

const CoursePage = () => {
  return (
    <div className="w-full h-screen">
      <main className="flex flex-row gap-5 w-full h-full border-2 border-primary  py-5">
        <article className="w-1/4 h-full py-1 flex flex-col gap-5 items-center rounded-lg m-2 justify-start shadow-lg shadow-primary  bg-secondary ">
          <div className="w-full p-4 box-border ">
            <div className="w-full h-[200px]">
              <img className="w-full" src={cardImage} alt="" />
            </div>
          </div>
          <div className="w-full courseName">
            <h1 className="text-center font-bold text-lg mb-2 capitalize">
              Discrete Mathematics
            </h1>
          </div>
          <div className="w-full summary flex flex-row justify-around px-8 items-center gap-8">
            <div className="videos  w-1/3 debug h-full flex flex-col items-center justify-evenly">
              <span className="capitalize text-black  font-normal text-xs">
                Videos
              </span>
              <span className="capitalize text-black font-extrabold text-lg">
                30
              </span>
              <span className="capitalize text-black  font-normal text-xs">
                9 Units
              </span>
            </div>
            <div className="duration w-1/3 debug h-full flex flex-col items-center justify-evenly">
              <span className="capitalize text-black  font-normal text-xs">
                Duration
              </span>
              <span className="capitalize text-black font-bold text-lg">
                30
              </span>
              <span className="capitalize text-black text-xs">Hours</span>
            </div>
            <div className="language w-1/3 debug h-full flex flex-col items-center justify-evenly">
              <span className="capitalize text-black font-normal  text-xs">
                Language
              </span>
              <span className="uppercase text-black font-bold text-lg">En</span>
              <span className="capitalize text-black text-xs">English</span>
            </div>
          </div>
          <Link to="/pricing">
            <button className="px-10 py-2 my-5 bg-primary  text-white capitalize">
              <span>Enroll</span>
            </button>
          </Link>
          
          <div className="w-full text-center description px-2">
            <p className="w-full truncate">
              Discrete mathematics is the study of mathematical structures that
              are countable or discrete in nature.
            </p>
          </div>
        </article>
        <article className="w-3/4 flex px-2 flex-col  m-2 rounded-lg">
          <CourseHeading />
          <SubNav />
          <div className="chaptersList w-full flex flex-col gap-3 mt-4 p-4 shadow-md shadow-primary    overflow-y-auto rounded-md">
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
          </div>
        </article>
      </main>
      ;
    </div>
  );
};

export default CoursePage;
