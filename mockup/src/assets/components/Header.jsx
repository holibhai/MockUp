import React from 'react'
import { Search, MessageCircle, Users, User, Bell } from "lucide-react";
import { useState } from "react";


const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className=" bg-gray-50 p-8">
      {/* Header */}
      <header className="bg-white">
        <div className="">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-gray-600">Kodecolor</h1>
            </div>

            {/* Search Bar */}
            <div className="mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5  text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-[300px]  pl-10 pr-3 py-4 border border-gray-300 rounded-sm leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium flex items-center"
              >
                Find People
              </a>
              <div className="flex items-center relative">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium flex items-center"
                >
                  Messages
                </a>
                <span className="bg-blue-100 w-[30px] h-[30px] flex items-center justify-center text-blue-600 font-bold">
                    4
                </span>
              </div>

              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-md font-medium flex items-center"
              >
                My Contact
              </a>
            </div>

            {/* User Avatar & Notification */}
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="sr-only">View notifications</span>
              </button>

            <div className="ml-4 relative">
  <div>
    <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <img
        className="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User avatar"
      />
    </button>
  </div>

  {/* ✅ Notification Badge */}
  <div className="absolute top-0 -right-1   translate-y-1 border-2 border-white rounded-full">
    <span className="bg-green-500 text-white text-xs w-2 h-2 flex items-center justify-center rounded-full font-bold shadow">
      
    </span>
  </div>
</div>

            </div>
          </div>
        </div>
      </header>

      {/* Main content would go here */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* User detail content would be placed here */}
      </main>
    </div>
  )
}

export default Header