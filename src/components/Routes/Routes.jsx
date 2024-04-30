import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../Auth/Register';
import Login from '../Auth/Login';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
      <Route path='/login' element ={<Login/>}></Route>
    </Routes>
  )
}

export default RoutesComponent;