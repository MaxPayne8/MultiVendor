import React from 'react'
import { FaCheck } from "react-icons/fa";

const OrderSuccessfull = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-8'>
        <h1 className='text-3xl'>Order Placed Successfully</h1>
        <FaCheck className='text-green-600 text-9xl animate-bounce '/>
    </div>
    
  )
}

export default OrderSuccessfull