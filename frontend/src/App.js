import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';

import Login from './components/Login'
import Profile from './components/Profile';
import Register from './components/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* login / register */}
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forget_password' element={<ForgetPassword />} />

        {/* profile page */}
        <Route path='/profile' element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App