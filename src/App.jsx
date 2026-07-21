
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import { HashRouter  as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import MyAppointments from './pages/MyAppointments';
import Auth from './components/Auth';


function App() {

  return (

    <Router>

      <Toaster 
      position="top-center"
  toastOptions={{
    // استایل کلی برای همه توست‌ها
    style: {
      fontFamily: 'Vazir',
      borderRadius: '15px',
      background: '#333',
      color: '#fff',
    },
    // استایل اختصاصی برای توست‌های موفقیت
    success: {
      duration: 3000,
      theme: {
        primary: '#0a58ca',
      },
      style: {
        background: '#e7f3ff',
        color: '#0a58ca',
        border: '1px solid #0a58ca'
      }
    },
    // استایل اختصاصی برای توست‌های خطا
    error: {
      style: {
        background: '#fff5f5',
        color: '#e53e3e',
        border: '1px solid #e53e3e'
      }
    }
  }}/>

      <Navbar /> 

      <div className="container">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route path='/doctors/:specialty' element={<Doctors />} />

          <Route path="/my-appointments" element={<MyAppointments />} />

          <Route path='/doctor/:id' element={<DoctorProfile />} />

          <Route path="" element={<Navigate to="/" />} />

          <Route path='/login' element={<Auth />} />

        </Routes>

      </div>
      
    </Router>
  );
}

export default App;