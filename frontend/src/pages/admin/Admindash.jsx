import React from 'react'
import {Link} from 'react-router-dom'
import Dashboard from "./dashboard.jsx" 
import Doctor from "./doctor.jsx"
import Patient from "./Patient.jsx"
import Doctorschedule from "./doctorschedule.jsx"
import Patientschedule from "./patientschedule.jsx"
import Prescription from "./prescription.jsx"
import Casestudy from "./casestudies.jsx"
import Setting from "./settings.jsx"
import Chat from "./chat.jsx"
import Bill from "./bill.jsx"
import Reception from "./reception.jsx"
  import {useState} from 'react'
function Admindash() {


const [page, setPage]=useState('dashboard');
const content=()=>{
  switch(page){
    case "dashboard":
      return <Dashboard/>;
    case "patient":
      return <Patient/>; 
    case "patientschedule":
      return <Patientschedule/>;
    case "doctor":
      return <Doctor/>;
    case "doctorschedule":
      return <Doctorschedule/>;
    case "prescription":
      return <Prescription/>;
    case "bill":
      return <Bill/>;
    case "setting":
      return <Setting/>
    case "chat":
      return <Chat/>  
    case "reception":
      return <Reception/>
    default:
      return <Dashboard/>;           
  }
}




  return (
    <div  className='relative top-0 left-0'>
       <ul className=' absolute top-0 left-0 border overflow-x-auto bg-white-500  w-[300px] h-[100vh]   p-5' >
          <li className='grid grid-cols-[auto_1fr] items-center gap-2 px-1 '><img  className=' h-[80px] w-[100px] 'src='logo.jpg' alt=''></img><h3><span className='text-[30px] font-bold text-green-700'>Health</span><span className='text-[30px] font-bold text-red-700'>Cure</span></h3></li>
           
          <li className='mt-2'>
            <button  className=' border-t-2 border-b-2 border-gray  text-md grid grid-cols-[auto_1fr] items-center gap-2   px-9 py-4 font-bold 'type='submit'>
            <img className='w-[50px] h-[50px] rounded-full' src='admin.jpg' alt=''></img><p><span className='text-xl text-yellow-700'>Admin </span>Sudhan</p> </button>
          </li>
           
          <li className=' mt-2 hover:scale-105 transition duration-500 ease-in-out'>
            <button onClick={()=>setPage("dashboard")} className=' grid grid-cols-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='dashdark.png'alt=''></img>Dashboard
            </button>
          </li> 
           
          <li className=' mt-2 hover:scale-105 transition duration-500 ease-in-out'>
            <button onClick={()=>setPage("doctor")} className=' grid grid-cols-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='medical-assistance.png'alt=''></img>Doctor
            </button>
          </li> 
           
          <li className=' mt-2 hover:scale-105 transition duration-500 ease-in-out'>
            <button onClick={()=>setPage("patient")}className=' grid grid-cols-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='patient.png'alt=''></img>Patient
            </button>
          </li> 

          <li className=' mt-2 hover:scale-105 transition duration-500 ease-in-out'>
            <button onClick={()=>setPage("reception")}className=' grid grid-cols-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='patient.png'alt=''></img>Reception
            </button>
          </li> 
           
          <li className='mt-2 hover:scale-105 transition duration-500 ease-in-out'>
            <button onClick={()=>setPage("doctorschedule")} className=' grid grid-cols-[auto_1fr] gap-4 items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='schedule.png'alt=''></img><p>Doctor Schedule</p>
            </button>
          </li> 
           
          <li className='mt-2 hover:scale-105 transition duration-500 ease-in-out'>
            <button onClick={()=>setPage("patientschedule")} className='active:bg-green-700 grid grid-cols-[auto_1fr] gap-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='appointment.png'alt=''></img><p>Patient Schedule</p>
            </button>
          </li>
           
          <li className='mt-2 hover:scale-105 transition duration-500 ease-in-out'>
            <button onClick={()=>setPage("prescription")} className=' grid grid-cols-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='approve.png'alt=''></img>Prescription
            </button>
          </li> 
           
          <li className='mt-2 hover:scale-105 transition duration-500 ease-in-out'>
            <button onClick={()=>setPage("bill")} className='w-[230px] active:bg-green-700 grid grid-cols-[auto_1fr] gap-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-center text-lg hover:bg-green-700 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='appointment.png'alt=''></img><p className='ml-[-100px]'>Bill  </p>
            </button>
          </li>
           
           
            
          

       </ul>
       <div className='absolute top-[0] left-[280px] bg-white-500 w-[400px] h-[120px]'>
           
          <ul className=' border-b-2 border-grey-700 bg-grey-100 w-[79.6vw] h-[80px] grid grid-flow-col  justify-end items-center '>
             
            <li className='hover:scale-105 transition duration-500 ease-in-out'>
              <button onClick={()=>setPage("chat")} className=' py-3 px-1 grid grid-cols-[auto_1fr] gap-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-md hover:bg-gray-300 hover:text-gray-700 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='bubble-chat.png'alt=''></img>Chat With Us
              </button>
            </li>
            <li className='hover:scale-105 transition duration-500 ease-in-out'>
              <button onClick={()=>setPage("setting")} className=' py-3 grid grid-cols-[auto_1fr] gap-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-md hover:bg-gray-300 hover:text-gray-700 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='settings.png'alt=''></img>Settings
              </button>
            </li>
            <li className='hover:scale-105 transition duration-500 ease-in-out'>
              <Link  to="/"className='py-3 grid grid-cols-[auto_1fr] gap-4  items-center  rounded-lg px-[20px] py-3 bg-white-700 font-bold  text-md hover:bg-red-700 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='logout.png'alt='' ></img>Log Out
              </Link>
            </li>
            </ul> 
               
       </div>
       <div className='absolute border-0 top-[100px] left-[355px]  h-[600px] w-[1160px]  overflow-y-auto'>{content()}</div>
       <div className='absolute border-0 top-[700px] left-[700px] text-center font-semibold'>Copyright © 2025 HealthCure Hospital. All rights reserved.

</div>
    </div>
  )
}

export default Admindash
    