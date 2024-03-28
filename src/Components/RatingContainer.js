import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import RatingCard from './RatingCard';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const RatingContainer = () => {

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
          <div className="text-xl text-gray-600 left-0 z-10 absolute top-[40%] hover:scale-110 duration-150 hover:cursor-pointer hover:text-gray-900" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
      
      const NextArrow = (props) => {
        const { onClick } = props;
        return (
          <div className="text-xl text-gray-600 right-0 absolute z-10 top-[40%] hover:scale-110 duration-150 hover:cursor-pointer hover:text-gray-900 " onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

    //    cssEase: "linear"
 
}
      
    
    return (
        <div className=' px-10 py-6   bg-gray-200'>
            <Slider {...settings}>
         <RatingCard/>
         <RatingCard/>
         <RatingCard/>
         <RatingCard/>
         <RatingCard/>
        </Slider>
        </div>
      )

        
      };
    
  


export default RatingContainer