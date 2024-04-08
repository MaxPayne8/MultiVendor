
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link,useParams } from 'react-router-dom'
import { SERVER_ADDRESS } from '../Constants/Constants'
import  axios  from 'axios'



const Categories = () => {

  const[allCat ,setAllCat] = useState([]);
  const[catCount , setCatCount] = useState(0);
 
  const {id} = useParams();
  console.log(id)
  console.log(allCat)     

  
  const fetchAllCat = async(catId)=>{
      try {
          const response = await axios.get(SERVER_ADDRESS+'api/categories/?page='+catId);
          console.log(response.data);
          setAllCat(response.data.results)
          setCatCount(Math.ceil(response.data.count / 2));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        
  }


  useEffect(()=>{fetchAllCat(id)}, [id])



  return (
    <div>
      <div className='flex justify-evenly gap-4 p-10'>
        
        {allCat.map((cat)=> <Card category={cat.title} catId={cat.id} type="category"/>)}

       
    </div>
     <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between my-10">
     <div class="flex items-center">
         <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
             <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                 </path>
             </svg>
         </button>
         {[...Array(catCount).keys()].map((index) => (
   <Link to={`/categories/${index+1}`}> <button key={index} type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100" >
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

export default Categories