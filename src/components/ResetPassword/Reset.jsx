import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ErrorDisplay from '../MessageDisplay/ErrorDisplay';
const Reset = () => {
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(false); 
   const [passwordData,setPasswordData] = useState(
      {
         oldpassword:'',
         newpassword:'',
         confrimnewpassword:''
      }
   )
   const passwordResetHandler = (e) => {
      e.preventDefault();
      console.log(passwordData);

      if(passwordData.newpassword != passwordData.confrimnewpassword){
         setError("Password Not Matched")
      }
      else{

      }
   }
   const inputChangeHandler = (e) => {
      setPasswordData((prev)=> ({...prev,[e.target.id]:e.target.value}))
   }
  return (
    <div className="flex items-center justify-center h-screen">
      <ErrorDisplay error={error} setError={setError}/>
      <form className="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4 dark:bg-slate-800 text-black" onSubmit={passwordResetHandler}>
        <div className="mb-4">
          <label className="block text-sm text-white mb-2" htmlFor="oldpassword">
          Old Password
          </label>
          <input 
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="oldpassword" 
           type="text" 
           required
           placeholder='Old Password'
           onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-6">
          <label className="block  text-sm  text-white mb-2" htmlFor="newpassword">
            New Password
          </label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="newpassword"
          type='text' 
          placeholder="Password"
          required
          onChange={inputChangeHandler}
          />

          
        </div>
        <div className="mb-6">
          <label className="block  text-sm  text-white mb-2" htmlFor="confrimnewpassword">
            Confrim New Password
          </label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confrimnewpassword"
          type='text' 
          placeholder="Password"
          required
          onChange={inputChangeHandler}
          />

          
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
          >
            Reset
          </button>
          
        </div>
        <div className='text-white'>
          Forgot Password? <Link to='/password-forgot' className='text-blue-500 transition hover:text-blue-700'>click</Link>
        </div>
      </form>
    
    </div>
  )
}

export default Reset