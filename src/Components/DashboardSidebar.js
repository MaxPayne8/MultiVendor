import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <div className='w-56'>
        <ul className='flex flex-col gap-5'>
            <li className='bg-blue-700 text-white font-bold p-2 rounded-lg'>DashBoard</li>
        <Link to="/orders"><li  className='bg-gray-200 p-2 rounded-lg hover:scale-110 duration-150 cursor-pointer' >Orders</li></Link>    
            <li  className='bg-gray-200 p-2 rounded-lg hover:scale-110 duration-150 cursor-pointer' >Wislist</li>
            <li  className='bg-gray-200 p-2 rounded-lg hover:scale-110 duration-150 cursor-pointer'>Profile</li>
            <Link to="/all-address"> <li  className='bg-gray-200 p-2 rounded-lg hover:scale-110 duration-150 cursor-pointer' >Adresses</li></Link>  
            <li  className='bg-gray-200 p-2 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer'>Logout</li>
        </ul>
    </div>
  )
}

export default DashboardSidebar