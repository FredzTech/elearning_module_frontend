import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import { Logout } from "../../Authentication/AuthContextProvider";
// import { UserdataContext } from "../../Authentication/AuthContextProvider";

import Dashboard from "../../assets/dashboard.png";

import Students from "../../assets/Students.png";
import Tutors from "../../assets/Tutors.png";
import Courses from "../../assets/Courses.jpeg";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

const lists = [
  { name: "Dashboard", link: "/admin/dashboard", icon: Dashboard },
  { name: "Students", link: "/admin/students", icon: Students },
  { name: "Tutors", link: "/admin/tutors", icon: Tutors },
  { name: "Courses", link: "/admin/courses", icon: Courses },
];

export const Sidebar = () => {
  // const userData = useContext(UserdataContext);
  return (
    <div className="h-full rounded-lg  p-3 space-y-2 w-full bg-slate-200 sm:w-full sm:text-center">
      <div className="flex flex-col items-center p-2 space-x-4">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-[170px] h-[170px] rounded-full dark:bg-gray-500"
        />
        <div className="name capitalize mt-4 font-bold text-3xl">
          John Mwangi
        </div>
        <div className="role capitalize m-4 text-center text-white bg-primary px-5 py-1 rounded-3xl font-bold text-lg">
          Admin
        </div>
      </div>
      <ul className="pt-2 pb-4 space-y-1 text-sm sm:flex gap-2 sm:flex-wrap sm:text-xs">
        {lists.map((list, index) => {
          return (
            <li className=" hover:bg-primary hover:text-white text-dark border-2 border-primaryLight rounded-lg">
              <Link
                to={list.link}
                key={index}
                className="flex items-center justify-between p-2 space-x-3 rounded-md"
              >
                <div className="flex flex-row-centered gap-5">
                  <img
                    src={list.icon}
                    alt={list.name}
                    key={index}
                    className="h-6 w-6 border rounded-lg sm:hidden"
                  />
                  <span key={index}>{list.name}</span>
                </div>
                <span className="text-xl ml-auto">
                  <BsChevronRight />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
