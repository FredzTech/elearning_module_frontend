import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../Authentication/AuthContextProvider";
import { UserdataContext } from "../../Authentication/AuthContextProvider";

import Dashboard from "../../assets/dashboard.png";
import Users from "../../assets/Students.png";
import Students from "../../assets/Students.png";
import Tutors from "../../assets/Tutors.png";
import Courses from "../../assets/Courses.jpeg";
import Settings from "../../assets/settings.png";
import LogoutBtn from "../../assets/Logout.png";

const lists = [
  { name: "Dashboard", link: "dashboard", icon: Dashboard },
  { name: "Users", link: "users", icon: Users },
  { name: "Students", link: "#", icon: Students },
  { name: "Tutors", link: "#", icon: Tutors },
  { name: "Courses", link: "#", icon: Courses },
  { name: "Logout", link: "#", icon: LogoutBtn },
  { name: "Settings", link: "#", icon: Settings },
];

export const Sidebar = () => {
  const userData = useContext(UserdataContext);
  return (
    <div className="h-full ml-0 p-3 space-y-2 w-full dark:bg-gray-900 dark:text-gray-100 sm:w-full sm:text-center">
      <div className="flex flex-col items-center p-2 space-x-4">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-[250px] h-[250px] rounded-full dark:bg-gray-500"
        />
        {/* <div>
            <h2 className="text-md font-semibold">{userData.name}</h2>
            <h2 className="text-xs">{userData.role}</h2>
          </div> */}
        <div className="name capitalize mt-4 font-bold text-5xl">
          John Mwangi
        </div>
        <div className="role capitalize m-4 text-center text-white bg-primary px-5 py-1 rounded-3xl font-bold text-lg">
          Admin
        </div>
      </div>
      <div className="divide-y divide-gray-700 ">
        <ul className="pt-2 pb-4 space-y-1 text-sm sm:flex gap-2 sm:flex-wrap sm:text-xs">
          {lists.map((list, index) => {
            return (
              <li className="dark:bg-gray-800 dark:text-gray-50">
                <Link
                  rel="noopener noreferrer"
                  to={list.link}
                  key={index}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img
                    src={list.icon}
                    alt={list.name}
                    key={index}
                    className="h-6 w-6 border rounded-lg sm:hidden"
                  />
                  <span key={index}>{list.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
