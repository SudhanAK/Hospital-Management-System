import React from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Admindash from './pages/admin/Admindash.jsx';
import Doctordash from './pages/doctor/Doctordash.jsx';
import Patientdash from './pages/patient/Patientdash.jsx';
import ReceptionDash from './pages/receptionist/Receptiondash.jsx';
import { Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Admindash" element={<Admindash />} />
        <Route path="/DoctorDash" element={<Doctordash />} />
        <Route path="/PatientDash" element={<Patientdash />} />
        <Route path="/ReceptionDash" element={<ReceptionDash />} />
      </Routes>
    </div>
  );
}

export default App;
