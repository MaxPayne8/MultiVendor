
import React from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'


const Categories = () => {
    const categories = ["Javascript" , "Python"]
  return (
    <div className='flex justify-evenly gap-4 p-10'>
        {categories.map((cat)=><Card category={cat} type="category"/>)}
    </div>
  )
}

export default Categories