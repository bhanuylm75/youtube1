import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
//import Videocontainer from './Videocontainer';
//import Categories from './Categories';
import Head from './head';

const Body = () => {
  return (
    <div className="flex flex-row">
      <div>
      <Sidebar />
      </div>
      <div className='flex flex-col w-full'>
        <div className=''>
          <Head/>
          </div>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default Body;