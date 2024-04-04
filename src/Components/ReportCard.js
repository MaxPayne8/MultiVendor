import React from 'react'

const ReportCard = ({report}) => {
  return (
    <div className='w-56 h-56 bg-gray-200 flex justify-center flex-col item-center'>
      <h1>{report}</h1> 
      <button className='bg-green-500 text-slate-100 p-1 w-28 mx-auto mt-4 rounded-lg '>View</button>
    </div>
  )
}

export default ReportCard