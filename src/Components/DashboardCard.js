import React from 'react'

const DashboardCard = ({name, number}) => {
  return (
    <div className='bg-gray-200 rounded-xl border-2 border-gray-600 flex flex-col item-center justify-center h-48 w-72 hover:shadow-2xl hover:shadow-blue-800'>
        <h1 className='text-3xl'>{name}</h1>
        <h1 className='text-xl mt-4'>{number}</h1>
    </div>
  )
}

export default DashboardCard