import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!(mail.includes('@')) || mail.lastIndexOf('@') > mail.indexOf('.com')) {
    return setErr("*Invalid Mail");
  }

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: mail, password: pass })  
    });

    if (!res.ok) throw new Error("Invalid email or password");

    const data = await res.json();
    const role = data.role;
    localStorage.setItem("mail",data.mail);
    console.log(role);

    if (role === "admin"){
       
      navigate("/Admindash");

    } 
    else if (role === "doctor") navigate("/DoctorDash");
    else if (role === "patient") navigate("/PatientDash");
    else if (role === "receptionist") navigate("/ReceptionDash");
    else alert("Unknown role");
  } catch (err) {
    alert(err.message);
  }
};



  return (
    <div className='parent'>
      <img className='image' src='page.png' alt='' />
      <div className='childish'>
        <form onSubmit={handleSubmit}>
          <p style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>
            <span style={{ color: 'green' }}>HealthCure</span> <span style={{ color: 'darkred' }}>Hospital</span>
          </p>
          <label className='text'> Email</label><br /><br />
          <input onChange={(e) => setMail(e.target.value)} type="text" placeholder='Your Email...' required /><br /><br />
          <label className='text'>Password</label><br /><br />
          <input onChange={(e) => setPass(e.target.value)} type="password" placeholder='Your Password...' required /><br /><br />
          <a href='/' className='link1'>Forgot Password?</a><br />
          <p style={{ marginTop: "20px", textAlign: "center", color: "red" }}>{err}</p><br />
          <button className='button1' type='submit'>Login</button><br />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Don't have an account? <Link className='nav' to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
