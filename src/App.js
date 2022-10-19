import React from 'react';
import './reset.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Nav from './components/BottomNavigation/BotNav';
import TestPage from './pages/TestPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/test' element={<TestPage />} />

      </Routes>

    </>
  );
}

export default App;
