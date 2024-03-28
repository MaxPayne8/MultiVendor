import React from 'react'

const Checkout = () => {
  return (
    
        <div className="overflow-x-auto  ">
            <table className="table-auto border-collapse border border-gray-400 w-full ">
                <thead>
                    <tr >
                        <th className="px-4 py-2 w-[30%]  bg-gray-200 border border-gray-400">Name</th>
                        <th className="px-4 py-2 w-[10%] bg-gray-200 border border-gray-400">Age</th>
                        <th className="px-4 py-2 w-[60%] bg-gray-200 border border-gray-400">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border border-gray-400">John Doe</td>
                        <td className="px-4 py-2 border border-gray-400">30</td>
                        <td className="px-4 py-2 border border-gray-400">john@example.com</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-400">Jane Smith</td>
                        <td className="px-4 py-2 border border-gray-400">25</td>
                        <td className="px-4 py-2 border border-gray-400">jane@example.com</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    
  )
}

export default Checkout