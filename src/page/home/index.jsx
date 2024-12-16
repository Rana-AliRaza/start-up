import React from 'react';
import HomeCards from '../../components/shared/Cards';
import Earning from './Earning';
import Activity from './Activity';
import Card from '../../components/shared/Cards';



const Home = () => {
  const cardData = [
    {
        id: 1,
        label: 564,
        desc: 'Total Staff',
        color: '#D780FE',
    },
    {
        id: 2,
        label: 104,
        desc: 'Total Doctor',
        color: '#FFB780',
    },
    {
        id: 3,
        label: 453,
        desc: 'Total Patient',
        color: '#79DC8E',
    },
    {
        id: 4,
        label: 43,
        desc: 'Total appointments made',
        color: '#7E81C8',
    },
    {
        id: 5,
        label: 639,
        desc: 'Appointments',
        color: '#D780FE',
    },
    {
        id: 6,
        label: 890,
        desc: 'New Patients',
        color: '#FFB780',
    },
    {
        id: 7,
        label: 340,
        desc: 'Lab tests',
        color: '#79DC8E',
    },
    {
        id: 8,
        label: '$2,543',
        desc: 'Total Earnings',
        color: '#7E81C8',
    },
]
  
  return (
    <section className='home-section p-8'>
      <div className=' home-cards '>
       <Card data={cardData}/>

      </div>
       <Earning/>
       <Activity/>
    </section>
  )
}

export default Home
