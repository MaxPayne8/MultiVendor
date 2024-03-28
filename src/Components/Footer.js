import React from 'react'
import { FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import { FaSquareTwitter } from "react-icons/fa6";

import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
 
    <div className='flex justify-between p-5'>
        <div className='flex items-center gap-1 font-semibold text-gray-500'>
        <h1>MultiVendor Ecom</h1> <span className='inline-block'> <MdCopyright/></span><h1>2024 Company,Inc</h1>
        </div>
        
        <div className='flex gap-2 text-2xl'>
        <FaInstagram className='text-pink-700' />
        <FaFacebookSquare className='text-blue-800' />
        <FaSquareTwitter className='text-blue-600' />

        </div>
    </div>
  )
}

export default Footer