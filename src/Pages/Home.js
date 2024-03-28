import React from 'react'
import PopularCardContainer from '../Components/PopularCardContainer'
import LatestCardsConatiner from '../Components/LatestCardsConatiner'
import SellersContainer from '../Components/SellersContainer'
import RatingContainer from '../Components/RatingContainer'
import PopularCategoriesContainer from '../Components/PopularCategoriesContainer'


const Home = () => {
  return (
    <div>
        
        <LatestCardsConatiner/>
        <PopularCategoriesContainer/>
        <PopularCardContainer/>
        <SellersContainer/>
        <RatingContainer/>
        


    </div>
  )
}

export default Home