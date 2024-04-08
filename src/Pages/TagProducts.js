
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link, useParams } from 'react-router-dom'
import  axios  from 'axios'
import { SERVER_ADDRESS } from '../Constants/Constants'

const ProductTag = () => {

    const {tag,page_num} = useParams();
    const tagL = tag.toLowerCase()
    console.log(tag,page_num)
    const [ tagProd,setTagProd] = useState([]);
    const [count, setcount] = useState(0)

    const fetchAllProd = async(tag)=>{
        try {
            const response = await axios.get(SERVER_ADDRESS+'api/product/'+tag+"/?page="+page_num); 
            console.log(response.data);
            setTagProd(response.data.results)
            setcount(Math.ceil(response.data.count/2))
          } catch (error) {
            console.error('Error fetching data:', error);
          }
          
    }
    useEffect(()=>{fetchAllProd(tag)},[page_num])
    console.log(tagProd);
    
    return (
        <div className='p-10'>
            <div className='flex justify-between items-center px-8'>
            <h1 className='text-left m-4 font-bold font-mono text-2xl'>Products related to <span className='text-red-700'>{tag}</span></h1>
            
            
            </div>
            
            <div className='flex justify-around flex-wrap gap-6'>
            {tagProd.map((prod)=><Card type="product" category={prod.category.title} title={prod.title} price={prod.price} prodId={prod.id} prodDesc={prod?.detail} />)}
            
            
            
            </div>
            <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between my-10">
     <div class="flex items-center">
         <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
             <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                 </path>
             </svg>
         </button>
         {[...Array(count).keys()].map((index) => (
   <Link to={`/product/${tag}/page/${index+1}`}> <button key={index} type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100" >
      {index+1}
    </button> </Link>  ))}
       
         
         <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
             <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                 </path>
             </svg>
         </button>
     </div>
 </div>
            
        </div>
      )
}

export default ProductTag