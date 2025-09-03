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
       <div className='grid grid-cols-3 px-2 gap-4'>
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Department</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="department.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>8</p>
        </div>   
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500  h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Doctor</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="doctor.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>23</p>
        </div>   
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Patient</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="examination.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>1152</p>
        </div>   
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Patient Appointment</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="appointment1.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>421</p>
        </div>   
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Patient Case Studies</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="notepad.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>6581</p>
        </div>
        <div className='hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 h-[70px]  rounded-lg w-[300px] bg-gray-400  ' >
            <p className='mt-[3px] ml-[5px] text-white font-bold'>Prescription</p>
            <img className="mt-[-27px] ml-[220px] h-[60px] w-[60px]"src="prescription.png" alt=""></img> 
            <p className='text-xl ml-[15px] mt-[-30px] text-white font-bold'>8</p>
        </div>     
       </div>
       
      <div className="  p-4 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
      
      <div className=" hover:scale-[1.02] transition duration-500 ease-in-out   p-4 rounded-lg shadow">
        <h2 className="text-xl text-white font-bold mb-4 text-black">Monthly Patient Count </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart className='text-md font-bold' data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="user" />
          </BarChart>
        </ResponsiveContainer>
      </div>


      <div className="hover:scale-[1.02] transition duration-500 ease-in-out   px-4 w-[500px] h-[250px] rounded-lg shadow">
        <h2 className="text-lg text-black font-semibold  mt-2 ">Monthly Earning</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl text-black font-bold"> This Month: $29.5</p>
            <CircularProgressbar className='w-[100px] h-[100px] text-red-500' value={29.5} text="29.5%" />
            <p className="text-red-700 text-lg text">-31.08% From Previous Month</p>
          </div>
        </div>
      </div>
      </div>
      

       
      
    </div>
  )
}

export default dashboard
