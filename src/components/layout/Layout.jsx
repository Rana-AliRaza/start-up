import React from 'react';
import './layout.scss';
import Sidebar from './sidebarr/sidebar';
import Navbar from './navbar';

const Layout = ({children}) => {
  return (
    <section className='layout-sec rounded-3xl   '>
        <div className="  flex ">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="content ml-[260px] w-full">
            <div className="navbar  h-14 py-5 px-4 ">
                <Navbar/>
            </div>
                {children}

            </div>

        </div>

    </section>
  )
}

export default Layout