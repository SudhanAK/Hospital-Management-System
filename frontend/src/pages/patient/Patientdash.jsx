import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './dashboard.jsx';
import Doctorschedule from './doctorschedule.jsx';
import Patientschedule from './patientschedule.jsx';
import Prescription from './prescription.jsx';
import Casestudy from './casestudies.jsx';
import Setting from './settings.jsx';
import Chat from './chat.jsx';
import Bill from './bill.jsx';

function Admindash() {
  const [patient, setPatient] = useState({});
  const [page, setPage] = useState('dashboard');

  useEffect(() => {
    const mail = localStorage.getItem('mail');
    fetch('https://hospital-management-system-b06p.onrender.com/patient-detail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mail }),
    })
      .then((response) => response.json())
      .then((data) => setPatient(data))
      .catch((err) => console.log(err));
  }, []);

  const content = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard patient={patient} />;
      case 'patientschedule':
        return <Patientschedule patient={patient} />;
      case 'doctorschedule':
        return <Doctorschedule patient={patient} />;
      case 'prescription':
        return <Prescription patient={patient} />;
      case 'bill':
        return <Bill patient={patient} />;
      case 'setting':
        return <Setting patient={patient} />;
      case 'chat':
        return <Chat patient={patient} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="relative top-0 left-0">
       <ul className="z-10 absolute top-0 left-[100px]  md:left-0 lg:left-0 border-0 lg:border   overflow-x-auto bg-white w-[300px] sm:w-[300px] md:w-[280px] lg:w-[300px] h-auto p-3 sm:p-4 md:p-5">
        <li className="ml-2  grid grid-cols-[auto_1fr] items-center gap-2 px-1">
          <img
            className="h-[60px] sm:h-[70px] md:h-[80px] w-[80px] sm:w-[90px] md:w-[100px]"
            src="logo.jpg"
            alt=""
          />
          <h3>
            <span className="text-[30px] sm:text-[26px] md:text-[30px] font-bold text-green-700">
              Health
            </span>
            <span className="text-[30px] sm:text-[26px] md:text-[30px] font-bold text-red-700">
              Cure
            </span>
          </h3>
        </li>
        <br />
        <li>
          <button
            className="border-t-2 border-b-2 border-gray text-sm sm:text-md grid grid-cols-[auto_1fr] items-center gap-2 px-5 sm:px-7 md:px-9 py-3 sm:py-4 font-bold"
            type="submit"
          >
            <img
              className="w-[40px] sm:w-[45px] md:w-[50px] h-[40px] sm:h-[45px] md:h-[50px] rounded-full"
              src="pat.png"
              alt=""
            />
            <p>
              <span className="text-lg text-yellow-700">
                Patient
                <br />
              </span>
              {patient.name}-{patient.id}
            </p>
          </button>
        </li>
        <br />
         <li className="hover:scale-105 transition duration-500 ease-in-out">
          <button
            onClick={() => setPage('dashboard')}
            className="grid grid-cols-4 items-center rounded-lg px-4 sm:px-5 md:px-6 lg:px-[20px] py-2 text-lg sm:py-3 bg-white font-bold text-sm   md:text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out"
          >
            <img
              className="w-[30px] sm:w-[28px] md:w-[30px] h-[25px] sm:h-[28px] md:h-[30px]"
              src="dashdark.png"
              alt=""
            />
            Dashboard
          </button>
        </li>
        <br />
        <li className="hover:scale-105 transition duration-500 ease-in-out">
          <button
            onClick={() => setPage('patientschedule')}
            className="active:bg-green-700 grid grid-cols-[auto_1fr] gap-4 items-center rounded-lg px-4 sm:px-5 md:px-6 lg:px-[20px] py-2 sm:py-3 bg-white font-bold text-sm sm:text-md md:text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out"
          >
            <img
              className="w-[25px] sm:w-[28px] md:w-[30px] h-[25px] sm:h-[28px] md:h-[30px]"
              src="appointment.png"
              alt=""
            />
            <p>Patient Schedule</p>
          </button>
        </li>
        <br />
        <li className="hover:scale-105 transition duration-500 ease-in-out">
          <button
            onClick={() => setPage('prescription')}
            className="grid grid-cols-4 items-center rounded-lg px-4 sm:px-5 md:px-6 lg:px-[20px] py-2 sm:py-3 bg-white font-bold text-sm sm:text-md md:text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out"
          >
            <img
              className="w-[25px] sm:w-[28px] md:w-[30px] h-[25px] sm:h-[28px] md:h-[30px]"
              src="approve.png"
              alt=""
            />
            Prescription
          </button>
        </li>
        <br />
        <li className=" text-center hover:scale-105 transition duration-500 ease-in-out">
          <button
            onClick={() => setPage('bill')}
            className=" text-center grid grid-cols-4 items-center rounded-lg px-4 sm:px-5 md:px-6 lg:px-[20px] py-2 sm:py-3 bg-white font-bold text-sm sm:text-md md:text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out"
          >
            <img
              className="w-[25px] sm:w-[28px] md:w-[30px] h-[25px] sm:h-[28px] md:h-[30px]"
              src="bill.png"
              alt=""
            />
            <span className='ml-4'>  Bills  </span> 
          </button>
        </li>
      </ul>

      {/* Top navbar */}
      <div className="absolute top-[440px] lg:top-0 left-[190px] sm:left-[250px] md:left-[280px] lg:left-[300px] bg-white w-[calc(100%-200px)] sm:w-[calc(100%-250px)] md:w-[calc(100%-280px)] lg:w-[1200px] h-[80px]">
        <ul className="border-b-2 border-grey-700 bg-grey-100 w-full h-[80px] grid grid-flow-col justify-end items-center">
          <li className="hover:scale-105 transition duration-500 ease-in-out">
            <button
              onClick={() => setPage('chat')}
className="   h-[50px] w-[170px] py-2 px-3 grid grid-cols-[auto_1fr] gap-4 items-center rounded-lg bg-white font-bold text-sm sm:text-md hover:bg-gray-300 hover:text-gray-700 text-[16px] md:ml-[140px] "
            >
              <img
                className=" invisible md:visible w-[30px] h-[30px] sm:w-[35px] md:w-[30px]"
                src="bubble-chat.png"
                alt=""
              />
              Chat With Us
            </button>
          </li>
          <li className="hover:scale-105 transition duration-500 ease-in-out">
            <button
              onClick={() => setPage('setting')}
              className="  mr-4 h-[50px] w-[130px]  py-2 px-3 grid grid-cols-[auto_1fr] gap-4 items-center rounded-lg bg-white font-bold text-sm sm:text-md hover:bg-gray-300 hover:text-gray-700 text-[16px]"
            >
              <img
                className=" invisible md:visible w-[30px] h-[30px] sm:w-[28px] md:w-[30px]"
                src="settings.png"
                alt=""
              />
              Settings
            </button>
          </li>
          <li className="hover:scale-105 transition duration-500 ease-in-out">
            <Link
              to="/"
              className="   h-[50px] py-2 px-3 grid grid-cols-[auto_1fr] gap-4 items-center rounded-lg bg-white font-bold text-sm sm:text-md hover:bg-red-700 hover:text-gray-100 text-[16px]"
            >
              <img
                className="invisible md:visible w-[30px] h-[30px] sm:w-[28px] md:w-[30px]"
                src="logout.png"
                alt=""
              />
              Log Out
            </Link>
          </li>
        </ul>
      </div>

      {/* Content */}
<div
  className="
    absolute border-0 
    top-[550px] sm:top-[350px] md:top-[90px] lg:top-[90px]
    left-0 sm:left-[260px] md:left-[300px] lg:left-[355px]
    right-0 
    h-[calc(100vh-350px)] sm:h-[calc(100vh-350px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-90px)]
    
    lg:w-[1100px]
  "
>
  {content()}
</div>



      {/* Footer */}
      <div className="absolute border-0 bottom-2 w-full text-center font-semibold text-xs sm:text-sm md:text-base">
        Copyright © 2025 HealthCure Hospital. All rights reserved.
      </div>
    </div>
  );
}

export default Admindash;
