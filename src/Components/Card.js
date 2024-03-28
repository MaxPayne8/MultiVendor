import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


//category?.length ? <div>{category}</div> :
const Card = ({imgUrl , title, price,category="", type,sellerName}) => {

  return (
    <div>
      {type=="product" &&<Link to="/product/react/1"  state= {{title:title , price:price , category:category }} >
      <div className='w-56 h-[260px] shadow-lg m-2 hover:shadow-black duration-150  '>
      <img src="https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg" className='p-2' alt="card-pic"/>
      <h1 className='text-left font-semibold px-2 py-1'>Title : {title}</h1>
      <h1  className='text-left font-semibold px-2 py-1'>Price : {price}</h1>
      <h1  className='text-left font-semibold px-2 py-1 truncate'>Category : {category}</h1>
      <div className='flex justify-end gap-4 items-center p-2 bg-gray-100'>
      <FaCartPlus className='text-blue-600 text-xl hover:text-blue-700'/>
      <FaHeart className='text-red-600 text-xl hover:text-red-700'/>
      </div> </div></Link>}
      {type=="category" &&<Link to="/categories/js/1">
      <div className='w-56 h-56 shadow-lg m-2 hover:shadow-black duration-150'>
      <img src="https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg" className='p-2' alt="card-pic"/>
      <h1 className='text-center font-semibold px-2 py-1'>{category}</h1>
      
      <div className='flex justify-center gap-4 items-center p-2 bg-gray-100'>
     <span className='text-green-700 font-semibold'>Downloads</span>1000
      </div> </div>
      </Link> }
      {type=="seller" && <div className='w-56 h-56 shadow-lg m-2 hover:shadow-black duration-150'>
      <img src="https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg" className='p-2' alt="card-pic"/>
      <h1 className='text-center font-semibold px-2 py-1'>{sellerName}</h1>
      <h1 className='text-center font-semibold px-2 py-1'>Categories: {category}</h1>
      </div>}

    </div>
      
      
      
      
      
      
      
  )
}

export default Card