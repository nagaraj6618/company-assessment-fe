import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
   return (
      <div>
         <Link to='/' className='pl-5'>Home</Link>
         <Link to='/post' className='pl-5'>Post</Link>
         <Link to='/login' className='pl-5'>Login</Link>
         <Link to='/signup' className='pl-5'>SignUp</Link>
      </div>
   )
}

export default NavBar