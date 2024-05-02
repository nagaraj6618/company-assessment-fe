import React, { useEffect } from 'react'
import { Routes,Route,useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Post from '../Post/Post';

const RoutesComponent = () => {
  const navigate = useNavigate();
  function naviagtionFunction () {
    if(!sessionStorage.getItem('accesstoken')){
    navigate('/login')
    }
  }
  useEffect(() => {
    naviagtionFunction()
  },[])
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
      <Route  path='/login' element ={<Login/>}></Route>
      <Route path='/post' element ={<Post/>}></Route>
    </Routes>
  )
}

export default RoutesComponent;