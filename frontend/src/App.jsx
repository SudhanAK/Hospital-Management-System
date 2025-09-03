import React from 'react'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Admindash from './pages/admin/Admindash.jsx'
import Doctordash from './pages/doctor/Doctordash.jsx'
import Admindashboard from "./pages/admin/dashboard.jsx"
import Patientdash  from "./pages/patient/Patientdash.jsx" 
import ReceptionDash from "./pages/receptionist/Receptiondash.jsx"
 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';  

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/Admindash" element={<Admindash/>}></Route>
            <Route path="/DoctorDash" element={<Doctordash/>}></Route>
            <Route path="/PatientDash" element={<Patientdash/>}></Route>
            <Route path="/ReceptionDash" element={<ReceptionDash/>}></Route>
             
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
