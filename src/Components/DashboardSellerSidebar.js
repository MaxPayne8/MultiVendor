import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSellerSidebar = () => {
  return (
    <div className='w-56'>
    <ul className='flex flex-col gap-5'>
        <li className='bg-blue-700 text-white font-bold p-2 rounded-lg'>DashBoard</li>
       <Link to= "/seller-orders"> <li  className='bg-gray-200 p-2 rounded-lg hover:scale-110 duration-150 cursor-pointer' >Products</li></Link>   
        <li  className='bg-gray-200 p-2 rounded-lg hover:scale-110 duration-150 cursor-pointer' >Orders</li>   
        <li  className='bg-gray-200 p-2 rounded-lg hover:scale-110 duration-150 cursor-pointer' >Add Order </li>   
        <li  className='bg-gray-200 p-2 rounded-lg hover:scale-110 duration-150 cursor-pointer'>Customers</li>
        <li  className='bg-gray-200 p-2 rounded-lg hover:scale-110 duration-150 cursor-pointer' >Reports</li>
        <li  className='bg-gray-200 p-2 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer'>Logout</li>
    </ul>
</div>
  )
}

export default DashboardSellerSidebar