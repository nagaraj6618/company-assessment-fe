import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BE_URL } from '../../Info/info'
import axios from 'axios'
import SuccessDisplay from '../MessageDisplay/SuccessDisplay'
import ErrorDisplay from '../MessageDisplay/ErrorDisplay'

const Login = () => {
  const [formData,setFormData] = useState({
    emailorusername:'',
    password:'',
  })
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); 
  const siginSubmitHandler = async(e) => {
    e.preventDefault()
    console.log(formData)
    try{
      // axios.defaults.withCredentials = true;
       const response = await axios.post(`${BE_URL}/auth/login`,formData ,{withCredentials:true})
        console.log(response.data)
        localStorage.setItem('name',response.data.data.name);
        localStorage.setItem('username',response.data.data.userName)
        sessionStorage.setItem('loginTime',Date.now());
        sessionStorage.setItem('accesstoken',response.data.token);
        setSuccess(true);
        setTimeout(()=> {
          setSuccess(false);
          window.location.href='/post'
        },1500)
        setTimeout(()=>{
          sessionStorage.clear();
          localStorage.clear();
        },10*60*1000)
        
    }
    catch(error){
      console.log(error);
      if(!error.response){
        setError(error.message);
      }
      else {
      setError(error.response.data.message);
      }
    }
    
  
    
  }
  
  const inputChangeHandler = (e) => {
    setFormData((prev) => ({...prev,[e.target.id]:e.target.value}))

  }


  return (
    <div className="flex items-center justify-center h-screen">
      <ErrorDisplay error={error} setError={setError}/>
      <SuccessDisplay success={success} message='Login Successfull!'/>
      <form className="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4 dark:bg-slate-800 text-black" onSubmit={siginSubmitHandler}>
        <div className="mb-4">
          <label className="block text-sm text-white mb-2" htmlFor="emailorusername">
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
