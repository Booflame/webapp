import React from 'react';
import './reset.css';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import TestPage from './pages/TestPage';
import DatePage from './pages/DatePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/date' element={<DatePage />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
