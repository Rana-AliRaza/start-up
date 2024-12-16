import React from 'react'
import Input from '../../components/shared/input'
import Button from '../../components/shared/button'
import { useNavigate } from 'react-router-dom'


const Notification = () => {
    const navigate = useNavigate();
  return (
    <div className='general ' >
       <div className="notificationLayout-inputs grid grid-cols-3 gap-x-8 gap-y-4 text-gray-600 text-sm ">
         <Input label={'Email Notification'} placeholder={'on/off'} />
         <Input label={'SMS Notification'} placeholder={'on/off'} />
         <Input label={'Payment Alerts'} placeholder={'on/off'} />
       </div>

       <div className="btns flex justify-center items-center py-4 w-1/3 mx-auto gap-x-4 mt-8">
          <Button text={'Close'} className={'text-red-500 font-medium text-sm w-1/2 px-12 py-2 border border-red-600 border-solid shadow-lg'} />
          <Button text={'Save and Changes'} className={'text-white text-nowrap bg-primary  font-medium text-sm w-1/2 px-12 py-2 border  border-solid shadow-lg'} onClick={()=>navigate('/inventory')} />
       </div>
       
    </div>
  )
}

export default Notification
