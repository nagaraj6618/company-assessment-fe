import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import ErrorDisplay from '../MessageDisplay/ErrorDisplay';
import SuccessDisplay from '../MessageDisplay/SuccessDisplay';
import axios from 'axios'
import { BE_URL } from '../../Info/info';

const Register = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email:'',
    password:'',
    username:'',
    name:'',
    confirmpassword:''
  })
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); 

  const siginSubmitHandler = async(e) => {
    e.preventDefault()
    console.log(formData)
    try{
      if(formData.password === formData.confirmpassword){
        console.log("Password Matched");
        const response = await axios.post(`${BE_URL}/auth/signup`,formData)
        console.log(response);
        setSuccess(true);
        setTimeout(()=> {
          setSuccess(false)
          navigate('/login')
        },1500);
      }
      else{
        console.log("Password Not Matched");
        setError("Password Not Matched");
      }
    }
    catch(error){
      console.log(error)
      
      if(error.response){
        setError(error.response.data.message)
      }
      else{
        setError(error.message)
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
          <label className="block text-sm text-white mb-2" htmlFor="name">
            Name
          </label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="name" 
           type="text" 
           required
          placeholder='Name'
          
          onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-white mb-2" htmlFor="email">
            Email
          </label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="email" 
           type="text" 
           value={formData.email}
           required
          placeholder='Email'
          
          onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-white mb-2" htmlFor="username">
            Username
          </label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="username" 
           type="text" 
           value={formData.username}
          placeholder='Username'
          required
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
          required
          onChange={inputChangeHandler}
          />

        </div>
        <div className="mb-6">
          <label className="block  text-sm  text-white mb-2" htmlFor="confirmpassword">
            Confrim Password
          </label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmpassword"
          type="password" 
          placeholder="Password"
          required
          onChange={inputChangeHandler}
          />

        </div>
        <div>
         <input type='checkbox'
         required
         id="checbox"
        onChange={inputChangeHandler}

         ></input> <span className='text-white'>I accept the Terms and Conditions</span>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
          >
            Sign Up
          </button>
          
        </div>
        <div className='text-white'>
          Already registered ? <Link to='/login' className='text-blue-500 transition hover:text-blue-700'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Register