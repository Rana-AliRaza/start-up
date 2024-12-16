import React from 'react'
import SettingsTabs from './Tabs'
import Heading  from '../../components/shared/heading'


const Setting = () => {
  return (
    <section className="access-sec px-8">
      <Heading title='Settings '/>
      <div className="">
        <SettingsTabs/>
      </div>
      </section>
  )
}

export default Setting
