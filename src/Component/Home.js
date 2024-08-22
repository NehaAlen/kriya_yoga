
import React from 'react'
import Banner from './Banner'
import Carousel from './Carousel'
import Carousel2 from './Carousel2'



const Home = () => {
  return (
    <div >
    <div className=''>
      {<Banner/>}
      </div>
      <div className='md:m-10 m-1'>
      {<Carousel />}
      </div>
      <div className='md:m-10'>
      {<Carousel2 />}
      </div>
      
    
      </div>
     
    
  )
}

export default Home
