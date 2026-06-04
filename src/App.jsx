
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import MyAppointments from './pages/MyAppointments';
import Auth from './components/Auth';

function App() {

  return (

    <Router>

      <Navbar /> 

      <div className="container">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route path='/doctors/:specialty' element={<Doctors />} />

          <Route path="/my-appointments" element={<MyAppointments />} />

          <Route path='/doctor/:id' element={<DoctorProfile />} />

          <Route path='/my-appointments' element={<MyAppointments />} />

          <Route path="" element={<Navigate to="/" />} />

          <Route path='/login' element={<Auth />} />

        </Routes>

      </div>
      
    </Router>
  );
}

export default App;