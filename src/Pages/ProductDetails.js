import React from 'react'
import { FaAngleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../Components/Card';
import { FaRupeeSign } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const ProductDetails = () => {
    const location = useLocation()
    console.log(location  );
    const {category, title , price} = location.state;

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
          <div className="text-xl text-gray-600 -left-10 z-10 absolute top-[40%] hover:scale-110 duration-150 hover:cursor-pointer hover:text-gray-900" onClick={onClick}>
            <FaAngleLeft />
          </div>
        );
      };
      
      const NextArrow1 = (props) => {
        const { onClick } = props;
        return (
          <div className="text-xl text-gray-600 -right-10 absolute z-10 top-[40%] hover:scale-110 duration-150 hover:cursor-pointer hover:text-gray-900 " onClick={onClick}>
            <FaAngleRight />
          </div>
        );
      };
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

    //    cssEase: "linear"
 
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
    prevArrow: <PrevArrow1 />

    //    cssEase: "linear"
 
}
   

    // console.log(title , price , category);
//   console.log(title , price , category);
    return (
        <div>
            <div className='flex justify-between px-10'>
                <div className='w-[25%]  mx-10'>
                <Slider {...settings1} className='px-10'   >
                <div><Card type="product"/></div>
                <Card type="product"/>
                <Card type="product"/>
                </Slider>
                </div>
    <div className=' flex flex-col justify-start w-[65%] px-10 bg-slate-300 '>
            <h1 className='text-left font-semibold text-3xl px-2 py-1'> {title}</h1>
            <h1  className='text-left font-semibold px-2 py-1 text-xl'><FaRupeeSign className='inline-block text-green-500' /> {price}</h1>
            <h1  className='text-left font-semibold px-2 py-1 truncate'>Category : {category}</h1>
            <h1  className='text-left font-semibold px-2 py-1 inline-block'>Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</h1>
    </div>
    </div>
    <h1 className='text-center text-2xl font-semibold m-5'>Related products</h1>
    <Slider {...settings} className=' pl-10 w-[90%] mx-auto my-10' >
                <div><Card type="product"/></div> 
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
                <Card type="product"/>
    </Slider>
        </div>
                 
                
            
            )
          }
            
            
     
   
   
            
            
    
    
   
        

export default ProductDetails