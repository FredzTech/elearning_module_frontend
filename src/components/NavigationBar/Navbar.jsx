// import { Link, useLocation } from "react-router-dom";
// import { Link, useLocation } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
// import LogInForm from "../Logins-Registration/Adme";
import { StudentRegistrationForm, LogInForm } from "../../components";
import {
  UserContext,
  LogoutContext,
} from "../../Authentication/AuthContextProvider";
import { UserdataContext } from "../../Authentication/AuthContextProvider";
import { FaUser, FaUserPlus } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Tutor", href: "tutor", current: false },
  { name: "Admin", href: "admin", current: false },
  { name: "Subscription", href: "pricing", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  // This is the value we inject into state as an object with background prop when we navigate elsewhere
  // Similar everywhere it is called.
  const location = useLocation();
  const userData = useContext(UserdataContext);
  const isAuthenticated = useContext(UserContext);
  const logout = useContext(LogoutContext);

  return (
    <Disclosure as="nav" className="bg-white text-black ">
      {({ open }) => (
        <div className="items-center">
          <div className="mx-auto w-screen sm:max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0  items-center hidden sm:block">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center sm:ml-16">
                  <h3 className="text-4xl sm:text-2xl text-primary">
                    E-Module
                  </h3>
                </div>

                <div className=" sm:ml-6 ml-8 sm:hidden">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-white text-black"
                            : "text-black hover:bg-gray-700 hover:text-white ",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute float-right  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!isAuthenticated ? (
                  <>
                    <Link to="/log-in" state={{ background: location }}>
                      {/* This is where the magic happens where we assign state. */}
                      <FaUser />
                      Login
                    </Link>
                  </>
                ) : (
                  <div>Welcome</div>
                )}
                {/* Profile dropdown */}
                {!isAuthenticated ? (
                  <Link to="/register" state={{ background: location }}>
                    <FaUser />
                    Register
                  </Link>
                ) : (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <UserIcon className="h-8 w-8 rounded-full" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-grey py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <div className="px-4  text-sm text-black">
                            {userData.name}
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="px-4 py-2 text-xs text-black">
                            {userData.role}
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="px-4 py-2 text-sm text-black">
                            <a href="#" onClick={logout}>
                              Sign out
                            </a>
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="hidden sm:block items-center mr-4">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-black"
                      : "text-gray-300 hover:bg-gray-700 hover:text-black",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
