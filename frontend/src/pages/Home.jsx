import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from '../layouts/MainLayout';
import Tasks from '../components/Tasks';

const Home = () => {
  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;
  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);


  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className='bg-blue-300 text-white h-[40vh] py-16 text-center'>
            <h1 className='text-3xl'> Welcome to Task Management Application</h1>
            <Link to="/login" className='mt-10 text-xl block space-x-2 hover:space-x-4'>
              <span className='transition-[margin]'>Log in to manage your tasks</span>
              <span className='relative ml-4 text-base transition-[margin]'><i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </div>
        ) : (
          <>
            <h1 className='text-2xl text-center content-center mt-8 mx-8 border-b border-b-gray-300 font-bold'>Welcome <span className='text-blue-600 uppercase '>{authState.user.name}</span> </h1>
            <Tasks />
          </>
        )}
      </MainLayout>
    </>
  )
}

export default Home