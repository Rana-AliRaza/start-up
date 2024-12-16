import React from 'react'
import Input from '../../components/shared/input'
import Button from '../../components/shared/button'
import { useNavigate } from 'react-router-dom'


const General = () => {
    const navigate = useNavigate();
  return (
    <div className='general ' >
       <div className="generaLayout-inputs grid grid-cols-3 gap-x-8 gap-y-4 text-gray-600 text-sm ">
         <Input label={'System Name'} placeholder={'Name'} />
         <Input label={'Default Language'} placeholder={'Language'} />
         <Input label={'Currency'} placeholder={'USD'} />
         <Input label={'System Email'} type={'email'} placeholder={'Email'} />
         <Input label={'Logo Upload'} placeholder={'Upload'} />
         <Input label={'Enable Maintenance'} placeholder={'Enable'} />
       </div>

       <div className="btns flex justify-center items-center py-4 w-1/3 mx-auto gap-x-4 mt-4">
          <Button text={'Close'} className={'text-red-500 font-medium text-sm w-1/2 px-12 py-2 border border-red-600 border-solid shadow-lg'} />
          <Button text={'Save and Changes'} className={'text-white text-nowrap bg-primary  font-medium text-sm w-1/2 px-12 py-2 border  border-solid shadow-lg'} onClick={()=>navigate('/inventory')} />
       </div>

    </div>
  )
}

export default General
