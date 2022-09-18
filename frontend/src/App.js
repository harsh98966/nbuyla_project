import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';

import Login from './components/Login'
import Register from './components/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forget_password' element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App