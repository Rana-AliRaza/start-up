import React from 'react';
import profile from '/images/profile.png';
import Input from '../../components/shared/input';
import ChangePassword from './ChangePassword';



const Content = () => {
  return (
    <div className=' py-2  mt-4'>
        <div className="dp pl-8 flex items-center gap-x-4">
            <div className=" size-28">
                <img src={profile} className='rounded-full size-30' alt="dp" />
            </div>
            <div>
             <h4 className='font-semibold text-xl'> Tom Cruise </h4>
             <p className='text-sm'> Admin </p>
            </div>
        </div> 

        <div className="pl-8 py-4 grid grid-cols-2 gap-x-8 gap-y-4 w-2/3 mt-4 text-gray-600">
            <Input label={'Name'} placeholder={'Name'}  />
            <Input label={'Role'} placeholder={'Role'}  />

            <Input label={'Email'} placeholder={'Email'} type='email'  />
            <Input label={'Phone No.'} type='number' placeholder={'Name'}  />
        </div>

          <div className='w-full grid grid-cols-3 gap-x-4 pl-8 items-center '>
            <Input label={'Status'} placeholder={'status'}  />
            <Input label={'Password'} placeholder={'Password'}  type={'password'} icon={true} />
            <ChangePassword/>

        </div>


        <div className="pl-4 py-4 flex gap-x-8 mt-4">
            <button className='px-12 py-2 text-xs border  text-red-600' style={{ border:'2px solid #c43c3c'}}> Close </button>
            <button className='px-12 py-2 text-xs border  text-white bg-blue-600'> Save and Changes </button>
        </div>
      
    </div>
  )
}

export default Content
