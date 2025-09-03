import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function dashboard() {

const data = [
  { name: 'Jan', user: 60, fill: '#60a5fa' },
  { name: 'Feb', user: 75, fill: '#22c55e' },
  { name: 'Mar', user: 61, fill: '#ef4444' },
  { name: 'Apr', user: 84, fill: '#facc15' },
  { name: 'May', user: 69, fill: '#60a5fa' },
  { name: 'Jun', user: 78, fill: '#22c55e' },
  { name: 'Jul', user: 57, fill: '#ef4444' },
  { name: 'Aug', user: 70, fill: '#facc15' },
  { name: 'Sep', user: 42, fill: '#60a5fa' },
  { name: 'Oct', user: 5, fill: '#22c55e' },
  { name: 'Nov', user: 5, fill: '#ef4444' },
  { name: 'Dec', user: 5, fill: '#facc15' }
];
  return (
    <div>
       <p className='text-[45px] font-bold'>Dashboard</p><br></br>
       <div className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-10 px-6 rounded-2xl shadow-lg mb-8">
      <h1 className="text-5xl font-extrabold text-center drop-shadow-lg">
        "Your Health, Our Priority"
      </h1>
      <p className="text-lg text-center mt-4 opacity-90">
        Access your records, appointments, and care with ease.
      </p>
    </div>
       <div className='grid grid-cols-3 px-2 gap-4'>
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Department</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="department.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>8</p>
        </div>   
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Doctor</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="doctor.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>8</p>
        </div>   
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Patient</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="examination.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>8</p>
        </div>   
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Patient Appointment</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="appointment1.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>8</p>
        </div>   
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Patient Case Studies</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="notepad.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>8</p>
        </div>
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Prescription</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="prescription.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>8</p>
        </div>     
       </div>
       
      <div className="  p-4 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
      
       
      </div>
      

       
      
    </div>
  )
}

export default dashboard
