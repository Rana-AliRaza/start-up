import React from 'react'

const Cards = ({data}) => {

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 w-full'>
        {
            data.map(({id, label, desc, color})=>(
                <div key={id} className='p-4    py-6 w-full text-center bg-white  shadow-md  rounded-3xl gap-y-4 '>
                   <h4 className={`text-3xl font-semibold  w-fit mx-auto text-shadow `}
                    style={{ 
                        color:color,
                        textShadow: `0 0 2px ${color}, 0 0 2px ${color}`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        }}> {label} </h4>
                   <p className='text-xl text-center  mx-auto mt-2 text-gray-700 w-3/4'> {desc} </p>
                </div>
            ))

        }

      
    </div>
  )
}

export default Cards
