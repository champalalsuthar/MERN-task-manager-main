import React from 'react'
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className=' h-screen w-screen relative bg-gray-50 overflow-x-hidden'>
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default MainLayout;