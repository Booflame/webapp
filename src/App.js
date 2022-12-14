import React from 'react';
import './reset.css';
import './style.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ParameterPage from './pages/ParameterPage';
import TestPage from './pages/TestPage';
import DatePage from './pages/DatePage';
import ErrorPage from './pages/ErrorPage';
import SearchPage from './pages/SearchPage';
import OpretPage from './pages/OpretPage';
import DateItemPage from './pages/DateItemPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/parameter' element={<ParameterPage />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/date' element={<DatePage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/opret' element={<OpretPage />} />
        <Route path="/home/:ItemId" element={<DateItemPage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
