import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <MainLayout>
            <div className=' py-16 w-full text-center'>
                <h1 className='my-8 text-7xl '>404 ERROR</h1>
                <h2 className='text-2xl'>page doesn't exist</h2>
                <NavLink to="/" >
                    <button className="bg-blue-600 text-white p-3  m-5 rounded-lg "> Go Back to Home</button>
                </NavLink>
            </div>
        </MainLayout>
    )
}

export default ErrorPage