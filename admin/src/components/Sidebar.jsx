import React from 'react'
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 border-r shadow-lg'>
      <div className='flex flex-col gap-5 pt-8 pl-[15%] text-[15px]'>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-l-full transition-all duration-300 
            ${isActive ? "bg-pink-300 shadow-md" : "hover:bg-pink-200"}`
          }
        >
          <MdDashboard className="w-5 h-5 text-gray-700" />
          <p className='hidden md:block font-medium text-gray-700'>Dashboard</p>
        </NavLink>


        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-l-full transition-all duration-300
              ${isActive ? "bg-pink-300 shadow-md" : "hover:bg-pink-200 hover:shadow-md"}`
          }
        >
          <img className='w-5 h-5' src={assets.add_icon} alt="add_icon" />
          <p className='hidden md:block font-medium text-gray-700'>Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-l-full transition-all duration-300
             ${isActive ? "bg-pink-300 shadow-md" : "hover:bg-pink-200 hover:shadow-md"}`
          }
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="list_icon" />
          <p className='hidden md:block font-medium text-gray-700'>List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-l-full transition-all duration-300
              ${isActive ? "bg-pink-300 shadow-md" : "hover:bg-pink-200 hover:shadow-md"}`
          }
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="orders_icon" />
          <p className='hidden md:block font-medium text-gray-700'>Orders</p>
        </NavLink>
      </div>



    </div>
  )
}

export default Sidebar