import React from 'react'
import SettingsTabs from './Tabs'

const Setting = () => {
  return (
    <section className="access-sec p-8 mt-4 ">
      <div className="heading py-2 ">
        <h4 className="text-gray-600 text-xl font-medium main-heading">
          Settings
        </h4>
      </div>
      <div className="py-4">
        <SettingsTabs/>
      </div>
      </section>
  )
}

export default Setting
