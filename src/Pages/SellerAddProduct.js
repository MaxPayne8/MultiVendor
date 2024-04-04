import React, { useState } from 'react'
import DashboardSellerSidebar from '../Components/DashboardSellerSidebar'

const SellerAddProduct = () => {
  const [image, setImage] = useState(null);
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      setImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    // Send image to backend
    fetch('your-django-backend-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Image uploaded successfully:', data);
        // Handle response from backend as needed
      })
      .catch(error => {
        console.error('Error uploading image:', error);
        // Handle error
      });
  };



  return (
    <div className='flex p-10 justify-between'>
      <DashboardSellerSidebar/>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Add Product
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
              <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Category
                  </label>
                  <div className="mt-2">
                   
                  <select
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                         value={selectedOption}
                        onChange={handleChange}>
                     
                      <option>Java Script</option>
                      <option>Python</option>
                      <option>Node JS</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />
                  </div>
                </div>
    
                <div>
                  
                    <label htmlFor="password" className="block text-left text-sm font-medium leading-6 text-gray-900">
                      Select Images
                    </label>
                   
                 
                  <div className="mt-2">
                  
                     
                    <input type="file" accept="image/*" onChange={handleImageChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"/>
                    
                    </div>
                  
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSubmit}
                  >
                    Add Product
                  </button>
                </div>
              </form>
    
              
            </div>
          </div>
    </div>
  )
}

export default SellerAddProduct