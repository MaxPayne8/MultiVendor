import React from 'react'
import Card from './Card'
import { FaLongArrowAltRight } from 'react-icons/fa'

const SellersContainer = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-between items-center px-8'>
            <h1 className='text-left m-4 font-bold font-mono text-2xl'>Popular Sellers </h1>
            <h1 className='text-left m-4 rounded-lg flex items-center justify-center gap-2 bg-slate-900 text-slate-100 p-1'>View all Sellers <FaLongArrowAltRight /></h1>
            
            </div>
            
            <div className='flex justify-around flex-wrap gap-6'>
            
            <Card type="seller" sellerName="Zatin"/>
            <Card type="seller" sellerName="Kristen"/>
            <Card type="seller" sellerName="Luffy"/>
            <Card type="seller" sellerName="Pranjal"/>
            <Card type="seller" sellerName="Ranbir"/>
            <Card type="seller" sellerName="Gopal"/>
            <Card type="seller" sellerName="Shinchan"/>
            <Card type="seller" sellerName="Zoro"/>
           
            
            
            </div>
            
        </div>
      )
}

export default SellersContainer