import React from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import AddressCard from '../Components/AddressCard'
import { Link } from 'react-router-dom'

const Address = () => {
    const addrArr = ['Bakers Street ,197 , London', ' Jungle Paraside Society,989','Groove Street, Los Angeles ']
  return (
    <div className='flex flex-col '>
         <div className='flex justify-between p-20'>
        <DashboardSidebar/>
        <div className=' flex gap-2 justify-between '>
        { addrArr.map(e=><AddressCard address={e}/>)}
        </div>
        
       
        </div>
        <Link to="/add-address"><button className='p-2 bg-slate-900 text-slate-200 w-32 mx-auto rounded-lg'>Add address</button></Link>
  
    </div>)
   
}

export default Address