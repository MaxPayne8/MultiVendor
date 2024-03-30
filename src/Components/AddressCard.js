import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div className='   w-56 h-56 border-2 border-gray-600 flex justify-center items-center '>
        <h1 className='font-semibold'>{address}</h1>
    </div>
  )
}

export default AddressCard