import React from 'react'
import { FaStar } from 'react-icons/fa'

const RatingCard = ({review , stars , authorName}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-xl font-semibold'>This is the Review</h1>
        <div className=' flex gap-2 items-center'>
            <div className='flex gap-1 text-yellow-400'> <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/></div>
            <h1>- Author Name</h1>
           
        </div>
    </div>
  )
}

export default RatingCard