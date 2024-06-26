import React from 'react'
import OrdersRow from '../Components/OrdersRow'
import DashboardSidebar from '../Components/DashboardSidebar'

const Checkout = () => {
    const data = [{"orderNum":1 ,"prodImg":"https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg","prodName":"One Plus 12R", "price":20000,"status":"Completed","action":"active"}];

    // Calculate total
    const total = data.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className=''>
            <div class="container max-w-3xl px-4 mx-auto sm:px-8">
                <div class="py-8">
                    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">#</th>
                                        <th scope="col" class="px-36 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Product</th>
                                        <th scope="col" class="px-36 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((e, index) => (
                                        <OrdersRow key={index} orderNum={e.orderNum} prodImg={e.prodImg} prodName={e.prodName} price={e.price} status={e.status} action={e.action} type="cart"/>
                                    ))}
                                  
                                </tbody>
                            </table>
                            <div className='flex justify-center  m-2 rounded-lg '>
                            <h1 className='w-44 py-2 rounded-2xl  bg-blue-700 text-white'> Total: {total}</h1>  
                            </div>
                            <div className='flex justify-end gap-4 mt-8 '>
                                <button className='p-2 bg-slate-700 text-slate-100 rounded-lg'>
                                    Proceed to Payment
                                </button>
                                <button className='p-2 bg-slate-700 text-slate-100 rounded-lg'>
                                    Continue Shopping
                                </button>
                            </div>
                            
                            
                            <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                       <div class="flex items-center">
                           <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                               <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                   </path>
                               </svg>
                           </button>
                           <button type="button" class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                               1
                           </button>
                           <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                               2
                           </button>
                           <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                               3
                           </button>
                           <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                               4
                           </button>
                           <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                               <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                   </path>
                               </svg>
                           </button>
                       </div>
                   </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




export default Checkout