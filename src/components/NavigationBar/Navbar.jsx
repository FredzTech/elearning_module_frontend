import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon , UserIcon } from '@heroicons/react/24/outline'

import NavBtn from './NavBtn'
import {UserContext , Logout} from "../../Authentication/AuthContextProvider";
import CourseNav from "./CourseNav";
import Subscription from '../../assets/subscription.png' 
import Search from "./Search";
import { ModalContext } from "../modals/ModalProvider";
import { UserdataContext } from "../../Authentication/AuthContextProvider";



const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Courses', href: 'courses', current: false },
  { name: 'Units', href: 'units', current: false },
  { name: 'Users', href: 'admin/users', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = ({content}) => {
  // const openModal = useContext(ModalContext);
  // const openModal = openModal()
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const userData = useContext(UserdataContext)
  const isAuthenticated  = useContext(UserContext);
  const logout = Logout();
  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto w-screen sm:max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center hidden sm:block">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                 <h3 className="text-2xl text-white">E-Module</h3>
                  
                </div>
                {/* <Search/> */}
                <div className=" sm:ml-6 ml-8 sm:hidden">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {!isAuthenticated? <Link className="text-white text-1xl p-2 radius-md hover:bg-grey"  to="register"> Register</Link> :
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                  
                </button>
               }
                {/* Profile dropdown */}
                {!isAuthenticated?  <Link className="text-white text-1xl p-2 radius-md hover:bg-grey"  to="login">Login</Link>  :
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <UserIcon
                        className="h-8 w-8 rounded-full"
                       
                      />
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
                    <Menu.Items className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-grey py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      
                      <Menu.Item>
                        <div className="px-4  text-sm text-white">{userData.name}</div>
                      </Menu.Item>
                      <Menu.Item>
                        <div className="px-4 py-2 text-xs text-white">{userData.role}</div>
                      </Menu.Item>
                      <Menu.Item>
                        <div className="px-4 py-2 text-sm text-white"> <a href="#" onClick={logout}>Sign out</a> </div>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="hidden sm:block mr-4">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
