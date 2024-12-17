import React from 'react'
import Heading from '../../components/shared/heading'
import Input from '../../components/shared/input'
import Button from '../../components/shared/button'
Button

const View = () => {
  return (
    <section className='view-section px-8'>
       <div className="view-heading pb-8">
         <Heading heading='Invoice Detail' path='/sales' backArrow={true}/>
       </div>

       <div className="view-content bg-white p-6 rounded-xl shadow-md ">
       <div className=" grid grid-cols-3 gap-x-8 gap-y-4 text-gray-600 text-sm ">
         <Input label={'Patient Name'} placeholder={'Type here...'} />
         <Input label={'Service/Item Sold'} placeholder={'Type here...'} />
         <Input label={'Category'} placeholder={'Type here...'} />
         <Input label={'Service Date'} type={'date'} placeholder={'Type here...'} />
         <Input label={'Amount'} placeholder={'Type here...'} />
         <Input label={'Payment Status'} placeholder={'Type here...'} />
         <Input label={'Payment Method'}  placeholder={'Type here...'} />
         <Input label={'Transaction ID'} placeholder={'Type here...'} />
         <Input label={'Billing Address'} placeholder={'Type here...'} />
       </div>
       <Button text={'Close'} className={'text-red-600 font-medium text-sm mt-8   w-fit mx-auto px-16 py-2 border hover:bg-gray-100 hover:text-red-700 border-red-600 border-solid shadow-lg'} />

       </div>
      
    </section>
  )
}

export default View
