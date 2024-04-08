import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const NavBar = () => {
  const [acc, setAcc] = useState(false);
  const[sellerAcc , setSellerAcc] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAcc(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setSellerAcc(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex justify-between items-center px-10 py-2 bg-gray-900 text-white w-full  '>
      <Link to="/"><h1 className='text-xl'>MultiVendor Ecommerce</h1></Link>
      <ul className='flex gap-4'>
        <Link to="/"><li className='hover:scale-110 duration-150'>Home</li></Link>
        <Link to="/categories/1"><li>Categories</li></Link>
        <li onClick={() => setAcc(!acc)} className="relative hover:cursor-pointer" ref={dropdownRef}>
          My Account { !acc ? <FaAngleDown className='inline-block'/> : <FaAngleUp className='inline-block'/>}
          {acc && (
            <ul className="absolute bg-gray-700 shadow-md rounded-b-lg mt-[10px] ">
              <Link to="/register"><li className='p-2 px-6  hover:bg-gray-900'>Register</li></Link> 
              <Link to="/login"><li className='p-2 px-6  hover:bg-gray-900'>Login</li></Link> 
              <Link to="/dashboard"><li className='p-2 px-6  hover:bg-gray-900'>DashBoard</li></Link>
              <li className='p-2 px-6  hover:bg-gray-900'>Hello</li>
            </ul>
          )}
        </li>
        <li onClick={() => setSellerAcc(!sellerAcc)} className="relative hover:cursor-pointer" ref={dropdownRef1} >
          Seller Account { !sellerAcc ? <FaAngleDown className='inline-block'/> : <FaAngleUp className='inline-block'/>}
          {sellerAcc && (
            <ul className="absolute bg-gray-700 shadow-md rounded-b-lg mt-[10px] ">
              <Link to="/seller-register"><li className='p-2 px-6  hover:bg-gray-900'>Register</li></Link> 
              <Link to="/seller-login"><li className='p-2 px-6  hover:bg-gray-900'>Login</li></Link> 
              <Link to="/dashboard-seller"><li className='p-2 px-6  hover:bg-gray-900'>DashBoard</li></Link>
              <li className='p-2 px-6  hover:bg-gray-900'>Hello</li>
            </ul>
          )}
        </li>
        <Link to="/checkout"><li className='hover:scale-110 duration-150'>Cart(3)</li></Link>
      </ul>
    </div>
  );
};

export default NavBar;
