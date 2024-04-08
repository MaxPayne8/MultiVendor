import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
import { SERVER_ADDRESS } from '../Constants/Constants';
import { Link, useParams } from 'react-router-dom';
const AllProducts = () => {
    const[allProd ,setAllProd] = useState([]);
    const[produCount , setProdCount] = useState(0);
    // const[links , setLinks] = useState([]);
    var {id} = useParams();
    console.log(id)
    console.log(typeof(id))

    
    const fetchAllProd = async(prodId)=>{
        try {
            const response = await axios.get(SERVER_ADDRESS+'api/products/?page='+prodId);
            console.log(response.data);
            setAllProd(response.data.results)
            setProdCount(Math.ceil(response.data.count / 3));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
          
    }
    console.log(allProd)
    console.log(produCount)

    useEffect(()=>{fetchAllProd(id)}, [id])
    return (
        <div className='p-10'>
            <div className='flex justify-between items-center px-8'>
            <h1 className='text-left m-4 font-bold font-mono text-2xl'>All Products</h1>
            </div>
            
            <div className='flex justify-around flex-wrap gap-6'>
                {allProd.map((prod)=><Card type="product" title={prod.title} category={prod.category.title} price={prod.price} prodId={prod.id} prodDesc={prod?.detail}/>)}
            </div>

            <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between my-10">
    <div class="flex items-center">
        <Link to={parseInt(id) > 1 ? `/products/page/${parseInt(id) - 1}` : `/products/page/${parseInt(id)}`}>
            <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                </svg>
            </button>
        </Link>
        {[...Array(produCount).keys()].map((index) => (
            <Link to={`/products/page/${index + 1}`}>
                <button key={index} type="button" class={`w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100 ${id == index + 1 ? "text-blue-700 font-semibold" : "text-gray-600"}`}>
                    {index + 1}
                </button>
            </Link>
        ))}
        <Link to={parseInt(id) < produCount ? `/products/page/${parseInt(id) + 1}` : `/products/page/${parseInt(id)}`}>
            <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                </svg>
            </button>
        </Link>
    </div>
</div>


            </div>
      )
}

export default AllProducts

