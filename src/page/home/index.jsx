import React from 'react';
import HomeCards from './Cards';
import Earning from './Earning';
import Activity from './Activity';
Activity

const Home = () => {
  return (
    <section className='home-section p-2 mt-4'>
       <HomeCards/>
       <Earning/>
       <Activity/>
    </section>
  )
}

export default Home
