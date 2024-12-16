import React from 'react'

const HomeCards = () => {
    const homeCards = [
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
    <div className='home-cards grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4'>
        {
            homeCards.map(({id, label, desc, color})=>(
                <div key={id} className='p-4 py-6 w-full text-center bg-white blackShadow shadow-sm  rounded-3xl gap-y-4 '>
                   <h4 className={`text-3xl font-semibold  `} style={{ color:color}}> {label} </h4>
                   <p className='text-xl text-center w-fit mx-auto mt-2'> {desc} </p>
                </div>
            ))

        }

      
    </div>
  )
}

export default HomeCards
