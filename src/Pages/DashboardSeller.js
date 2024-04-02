import React from 'react'
import DashboardSellerSidebar from '../Components/DashboardSellerSidebar';
import DashboardCard from '../Components/DashboardCard';

const DashboardSeller = () => {
    const data = [
        {"name": "Total Products ", "number": 100},
        {"name": "Total Orders", "number": 20},
        {"name": "Total Customers", "number": 10}
      ];
      
  return (

<div className='flex justify-between p-10'>
   <DashboardSellerSidebar/>
   {data.map(e=><DashboardCard name={e.name} number={e.number}/>)}
  
</div>


  )
}

export default DashboardSeller