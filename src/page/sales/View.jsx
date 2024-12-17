import React from 'react'
import Heading from '../../components/shared/heading'
const View = () => {
  return (
    <section className='view-section'>
       <div className="view-heading">
         <Heading title='Invoice Detail' path='/view' backArrow={true}/>

       </div>
      
    </section>
  )
}

export default View
