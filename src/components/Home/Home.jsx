import React, { useEffect, useState } from 'react'
import ErrorDisplay from '../MessageDisplay/ErrorDisplay'
import { Link } from 'react-router-dom';
const Home = () => {
  const [userData, setUserData] = useState(
    {
      userName: '',
      name: ''
    }
  );
  const [error, setError] = useState(null);
  useEffect(() => {

    setUserData({
      userName: localStorage.getItem('username'),
      name: localStorage.getItem('name'),
    })

    setError('Please Login!')
  }, [])

  const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/'
  }
  return (
    <div>
      {userData.userName && userData.name && (
        <div className='flex h-screen justify-center items-center text-white'>
          <div className='dark:bg-slate-800 p-10 rounded shadow'>
            <div className='p-2'>
              <p className='text-lg font-semibold'>Name: <span className='text-blue-500'>{userData.name}</span></p>
            </div>
            <div className='p-2'>
              <p className='text-lg font-semibold'>Username: <span className='text-blue-500'>{userData.userName}</span></p>
            </div>
            <div className='p-2'>
            
            <button className='block bg-white text-slate-800 px-2 py-1 rounded cursor-pointer hover:text-slate-800 transition duration-300  ' onClick={logoutHandler}>
              Logout
            </button>
          </div >
          <div className='align-middle'>
            <Link to='password-reset' className='bg-white align-middle text-slate-800 px-2 py-1 rounded'> Reset Password</Link>
          </div>
          </div>
          
        </div>
      )}
      {
        !userData.name && !userData.userName && (
          <div>
            <ErrorDisplay error={error} setError={setError}></ErrorDisplay>
            <p>Please Login <Link to='/login' className='text-blue-500'>Click here.</Link></p>
          </div>)
      }
    </div>
  )
}

export default Home