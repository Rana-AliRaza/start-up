import React from 'react'

const Activity = () => {
    const history = [
        {
            id: 1,
            desc: 'John Doe booked an appointment with Dr. Sophia Thompson at 10:00 AM today.',
        },
        {
            id: 2,
            desc: 'Dr. Sophia Thompson submitted a medical report for Mark Ryan, 5 minutes ago.',
        },
        {
            id: 3,
            desc: 'Nurse Lisa marked 200 units of Paracetamol as received from MedCo, 2 hours ago.',
        },
        {
            id: 4,
            desc: 'Dr. Sophia Thompson assigned Nurse Anna Jenkins to follow up with John Doe on his test results',
        },
    ]
  return (
    <div className='p-4 rounded-3xl '>
       <h4 className='text-gray-700 text-2xl text-semibold'>Recent Activity </h4>


       <ul className='mt-8 pl-8 list-disc text-primary grid gap-y-4'> 
        {
            history.map((item)=>(
                <li className='text-gray-600  pl-4'  key={item.id}>  {item.desc} </li>
   
            ))

        }
       </ul>
    </div>
  )
}

export default Activity
