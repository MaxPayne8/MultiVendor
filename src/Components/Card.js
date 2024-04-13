import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


//category?.length ? <div>{category}</div> :
const Card = ({imgUrl , title, price,category="", type,sellerName ,catId,prodId,prodDesc,carousel=false}) => {

  return (
    <div>
      {type=="product" &&<Link to={`/product/${title}/${prodId}`}  >
      <div className={`${carousel? "w-auto h-auto" : "w-64 h-[320px]" }  shadow-lg m-5 hover:shadow-black duration-150 `}>
      <img src="https://i.guim.co.uk/img/media/e3b3608c26228616ce1f29bd521933f65d5a386e/0_490_7360_4417/master/7360.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ea7d193ee42825ae3c63db31095f1d6a" className='p-2' alt="card-pic"/>
      <h1 className='text-left font-semibold px-2 py-1 truncate'>Title : {title}</h1>
      <h1  className='text-left font-semibold px-2 py-1'>Price : {price}</h1>
      <h1  className='text-left font-semibold px-2 py-1 truncate'>Category : {category}</h1>
      <div  className='flex justify-end gap-4  items-center  p-2 bg-gray-200'>
      <FaCartPlus className='text-blue-600 text-xl hover:text-blue-700'/>
      <FaHeart className='text-red-600 text-xl hover:text-red-700'/>
      </div> </div></Link>}
      
      
      {type=="category" &&<Link to={`/categories/${category}/${catId}/page/1`}>
      <div className='w-56 h-56 shadow-lg m-2 group hover:shadow-black duration-150'>
      <img src="https://i.guim.co.uk/img/media/e3b3608c26228616ce1f29bd521933f65d5a386e/0_490_7360_4417/master/7360.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ea7d193ee42825ae3c63db31095f1d6a" className='p-2' alt="card-pic"/>
      <h1 className='text-center font-semibold px-2 text-2xl py-1 group-hover:animate-bounce'>{category}</h1>
     
      
      <div className='flex justify-center gap-4 items-center p-2 bg-gray-100'>
     <span className='text-green-700 font-semibold'>Downloads</span>1000
      </div> </div>
      </Link> }
     
     
      {type=="seller" && <div className='w-56 h-64 shadow-lg m-2 hover:shadow-black duration-150'>
      <img src="https://i.guim.co.uk/img/media/e3b3608c26228616ce1f29bd521933f65d5a386e/0_490_7360_4417/master/7360.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ea7d193ee42825ae3c63db31095f1d6a" className='p-2' alt="card-pic"/>
      <h1 className='text-center font-semibold px-2 py-1'>{sellerName}</h1>
      <h1 className='text-center font-semibold px-2 py-1'>Categories: {category}</h1>
      </div>}

    </div>
      
      
      
      
      
      
      
  )
}

export default Card