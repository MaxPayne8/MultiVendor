import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaArrowLeft, FaArrowRight, FaCartPlus, FaDemocrat, FaHeart, FaShoppingBag } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../Components/Card';
import { FaRupeeSign } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { SERVER_ADDRESS } from '../Constants/Constants';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'

const ProductDetails = () => {

  const {product_name , product_id} = useParams();
  console.log(product_name , product_id)
  const [prodDet , setProdDet] = useState({});
  const[prodImages, setProdImages] = useState([])
  const[prodTags, setProdTags] = useState([])
  const [relProd , setRelProd] = useState([])

  const fetchProdDet = async(prod_id)=>{
    try {
        const response = await axios.get(SERVER_ADDRESS+'api/product/'+prod_id);
        setProdDet(response.data)
          setProdImages(response.data.product_images)
          setProdTags(response.data.tag_list)
        console.log(response.data);
       } catch (error) {
        console.error('Error fetching data:', error);
      }
      
}


  const fetchProdRelated = async(prod_id)=>{
      try {
          const response = await axios.get(SERVER_ADDRESS+'api/related-products/'+prod_id);
          console.log(response.data);
          setRelProd(response.data)
          
         } catch (error) {
          console.error('Error fetching data:', error);
        }
        
  }
  useEffect(()=>{fetchProdDet(product_id);fetchProdRelated(product_id)},[product_id])

  console.log(prodDet,prodDet.title);


    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
          <div className="text-xl text-gray-600 -left-10 z-10 absolute top-[40%] hover:scale-110 duration-150 hover:cursor-pointer hover:text-gray-900" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
      
      const NextArrow = (props) => {
        const { onClick } = props;
        return (
          <div className="text-xl text-gray-600 -right-10 absolute z-10 top-[40%] hover:scale-110 duration-150 hover:cursor-pointer hover:text-gray-900 " onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow1 = (props) => {
        const { onClick } = props;
        return (
          <div className="text-xl text-white  z-10 absolute top-[40%] hover:scale-125 duration-150 hover:cursor-pointer hover:text-gray-900" onClick={onClick}>
            <FaAngleLeft />
          </div>
        );
      };
      
      const NextArrow1 = (props) => {
        const { onClick } = props;
        return (
          <div className="text-xl text-white right-0 absolute z-10 top-[40%] hover:scale-125 duration-150 hover:cursor-pointer hover:text-gray-900 " onClick={onClick}>
            <FaAngleRight />
          </div>
        );
      };
    var settings = {
        // dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 10000,
      nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

     
 
}
    var settings1 = {
        // dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
     

    //    cssEase: "linear"
 
}
   

    // console.log(title , price , category);
//   console.log(title , price , category);
    return (
        <div>
            <div className='flex flex-col items-center gap-8 md:flex-row justify-between  p-10'>
                <div className='w-[80%] md:w-[25%]  border-2 border-black'>
                <Slider {...settings1} className=''>
               {prodImages?.map((pImg)=><img src={pImg.image} className=' h-56' alt="prod-img"/>)}
                </Slider>
                </div>
               {prodDet.title? <div className='flex justify-start flex-col items-start gap-2 px-4 bg-gray-200'><h1 className='font-semibold text-xl'>{prodDet?.title}</h1><h1>{prodDet?.price}</h1><h1>{prodDet?.category.title}</h1><h1 className='text-left'>{prodDet?.detail}</h1> <div className='flex gap-2'>
                 <Link to={prodDet.demo}><div className='flex items-center rounded-lg gap-1 bg-blue-400 p-1'><button>Demo</button><FaDemocrat /></div></Link>   
                 <div className='flex items-center rounded-lg gap-1 bg-yellow-300 p-1'><button>Add to Cart</button><FaCartPlus /></div>
                 <div className='flex items-center rounded-lg gap-1 bg-green-400 p-1'><button>Buy Now</button><FaShoppingBag /></div>
                 <div className='flex items-center rounded-lg gap-1 bg-red-500 p-1'><button>Wishlist</button><FaHeart /></div>
                </div>
                <div className='flex gap-3 my-2'><h1>Tags: </h1><div className='flex gap-2'>{prodTags.map(tag=><Link to={`/product/${tag}/page/1`}><button className=' rounded-lg gap-1 bg-gray-800 text-sky-50 px-1'>{tag}</button></Link>)}</div></div>
                
                </div>:<div className='text-3xl'>Loading......</div>}
              
                
               
                

    
    </div>
    <h1 className='text-center text-2xl font-semibold m-5'>Related products</h1>
    <Slider {...settings} className='  w-[60%] h-72  mx-auto my-10' >
                
                {relProd.map(prod => <Card carousel={true} type="product" category={prod.category.title} title={prod.title} prodId={prod.id} price={prod.price}/>)} 
                
    </Slider>
        </div>
                 
                
            
            )
          }
            
            
     
   
   
            
            
    
    
   
        

export default ProductDetails