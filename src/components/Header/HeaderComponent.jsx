import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import { IoCloseSharp } from "react-icons/io5";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEvent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='bg-slate-800 text-white flex justify-between items-center p-2'>
        <div className='hidden md:flex space-x-4 pt-2'>
          <Link to='/' className='pl-5 hover:text-gray-300 transition duration-300'>Home</Link>
          <Link to='/post' className='pl-5 hover:text-gray-300 transition duration-300'>Post</Link>
          <Link to='/login' className='pl-5 hover:text-gray-300 transition duration-300'>Login</Link>
          <Link to='/signup' className='pl-5 hover:text-gray-300 transition duration-300'>SignUp</Link>
        </div>
        <div className='md:hidden'>
          {!isOpen ? <IoMdMenu onClick={toggleEvent} className='text-xl cursor-pointer pt-1 hover:text-gray-300 transition duration-300' /> : <IoCloseSharp onClick={toggleEvent} className='text-xl cursor-pointer hover:text-gray-300 transition duration-300' />}
        </div>
      </div>
      <div className={`bg-slate-800 text-white p-2 transition-all duration-300 ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
        <Link to='/' className='block pl-5 py-2 hover:text-gray-300 transition duration-300'>Home</Link>
        <Link to='/post' className='block pl-5 py-2 hover:text-gray-300 transition duration-300'>Post</Link>
        <Link to='/login' className='block pl-5 py-2 hover:text-gray-300 transition duration-300'>Login</Link>
        <Link to='/signup' className='block pl-5 py-2 hover:text-gray-300 transition duration-300'>SignUp</Link>
      </div>
    </>
  );
};

export default HeaderComponent;
