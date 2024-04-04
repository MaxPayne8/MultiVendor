import React from 'react'
import ReportCard from '../Components/ReportCard'
import DashboardSellerSidebar from '../Components/DashboardSellerSidebar'

const Reports = () => {
  const data =["Daily Reports", "Monthly Reports" ,"Yearly Reports"]
  return (
    <div className='flex justify-between p-10 px-20'>
      <DashboardSellerSidebar />
      <div className='flex justify-between gap-6 m-16'>
      {
        data.map(e=><ReportCard report={e}/>)
      }
    </div>
    </div>
    
  )
}

export default Reports