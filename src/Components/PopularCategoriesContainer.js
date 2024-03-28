import React from 'react'
import Card from './Card'
import { FaLongArrowAltRight } from "react-icons/fa";


const PopularCategoriesContainer = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-between items-center px-8'>
            <h1 className='text-left m-4 font-bold font-mono text-2xl'>Popular Categories </h1>
            <h1 className='text-left m-4 rounded-lg flex items-center justify-center gap-2 bg-slate-900 text-slate-100 p-1'>View all Categories <FaLongArrowAltRight /></h1>
            
            </div>
            
            <div className='flex justify-around flex-wrap gap-6'>
            
            <Card type="category" category="ReactJs"/>
            <Card type="category" category="JavaScript"/>
            <Card type="category" category="Python"/>
            <Card type="category" category="Django"/>
           
            
            
            </div>
            
        </div>
      )
}

export default PopularCategoriesContainer