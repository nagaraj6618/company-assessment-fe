import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BE_URL } from '../../Info/info'
import axios from 'axios'

const Login = () => {
  const [formData,setFormData] = useState({
    emailorusername:'',
    password:'',
  })

  const siginSubmitHandler = async(e) => {
    e.preventDefault()
    console.log(formData)
    try{
      // axios.defaults.withCredentials = true;
       axios.post(`${BE_URL}/auth/login`,formData ,{withCredentials:true})
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('loginTime', Date.now());
        localStorage.setItem('name',response.data.data.name);
        localStorage.setItem('username',response.data.data.userName)
        sessionStorage.setItem('name',response.data.data.name);
      })

      
    }
    catch(error){
      console.log(error)
    }
    
  
    
  }
  
  const inputChangeHandler = (e) => {
    setFormData((prev) => ({...prev,[e.target.id]:e.target.value}))

  }

  useEffect(()=> {
    
  })
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4 dark:bg-slate-800 text-black" onSubmit={siginSubmitHandler}>
        <div className="mb-4">
          <label className="block text-sm text-white mb-2" htmlFor="email">
            Email/Username
          </label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="emailorusername" 
           type="text" 
           value={formData.email}
          placeholder='Email/Username'
          
          onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-6">
          <label className="block  text-sm  text-white mb-2" htmlFor="password">
            Password
          </label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password" 
          placeholder="Password"
          onChange={inputChangeHandler}
          />

        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
          >
            Sign In
          </button>
          
        </div>
        <div className='text-white'>
          New User ? <Link to='/signup' className='text-blue-500 transition hover:text-blue-700'>signup</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
