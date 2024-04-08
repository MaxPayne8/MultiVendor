import React from 'react'
import Card from './Card'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LatestCardsConatiner = () => {
  return (
    <div className='p-10'>
        <div className='flex justify-between items-center px-8'>
        <h1 className='text-left m-4 font-bold font-mono text-2xl'>Latest Products</h1>
        <Link to={"/products/page/"+1}><h1 className='text-left m-4 rounded-lg flex items-center justify-center gap-2 bg-slate-900 text-slate-100 p-1'>View all Products <FaLongArrowAltRight /></h1></Link>
        
        </div>
        
        <div className='flex justify-around flex-wrap gap-6'>
        
        <Card type="product"/>
        <Card type="product"/>
        <Card type="product"/>
        <Card type="product"/>
        <Card type="product"/>
        <Card type="product"/>
        <Card type="product"/>
        <Card type="product"/>
       
        
        </div>
        
    </div>
  )
}

export default LatestCardsConatiner