import React from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import DashboardCard from '../Components/DashboardCard';

const DashBoard = () => {
    const data = [
        {"name": "Total Orders", "number": 100},
        {"name": "Total Wishlist", "number": 20},
        {"name": "Total Addresses", "number": 10}
      ];
      
  return (

<div className='flex justify-between p-10'>
   <DashboardSidebar/>
   {data.map(e=><DashboardCard name={e.name} number={e.number}/>)}
  
</div>


  )
}

export default DashBoard