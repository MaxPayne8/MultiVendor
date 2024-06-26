import React from 'react'

const OrdersRow = ({orderNum,prodImg,prodName,price,status,action,type="dashboard",type1="customer",seller_orders = false }) => {

  return (
    <tr>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <div class="flex items-center">
                                    {orderNum}
                                </div>
                            </td>
                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <div class="flex flex-col items-center justify-center">
                                  { prodImg!==false && <div >
                                        <a href="#" >
                                            <img alt="profil" src={prodImg} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>}
                                    <div class="ml-3">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {prodName}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                   {price}
                                </p>
                            </td>
                           {type=="dashboard" && <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {status}
                                </p>
                            </td>}
                            {type=="dashboard" && type1=="customer" && seller_orders==false && <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                    </span>
                                    <span class="relative">
                                        {action}
                                    </span>
                                </span>
                            </td>}
                            {type=="dashboard" && type1=="customer" && seller_orders==true && 
                            
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <select className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 mx-1" defaultValue="">
           {action.map((e, index) => (
            <option key={index}>{e}</option>
        ))}
    </select>
</td>}
                            {type=="dashboard" && type1=="seller" && seller_orders==false && <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                               {action.map(e=> <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 mx-1">
                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                    </span>
                                    <span class="relative">
                                        {e}
                                    </span>
                                </span>) }
                            </td>}
                        </tr>
  )
}

export default OrdersRow