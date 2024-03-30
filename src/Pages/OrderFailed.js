import React from 'react'
import { ImCross } from "react-icons/im";

const OrderFailed = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-16'>
        <h1 className='text-3xl'>Order Not Successfull</h1>
        <ImCross className='text-red-600 text-9xl animate-bounce '/>
    </div>
    
  )
}

export default OrderFailed