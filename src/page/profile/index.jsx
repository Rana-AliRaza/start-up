import React from 'react'
import Content from './Content'
import Heading from '../../components/shared/heading'

const Profile = () => {
  return (
    <section className='profile-sec py-4 px-2 mt-4'>
        <Heading heading='Profile'/>
        <Content />
      
    </section>
  )
}

export default Profile
