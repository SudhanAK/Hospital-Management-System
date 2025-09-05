import React, { use } from 'react'
import { useState ,useEffect} from 'react'
function doctorschedule() {

   
  const [docname, setDocname]=useState('');
  const [id,setId]=useState(0) 
  const [week,setWeek]=useState('');
  const [duty, setDuty]=useState('');
  const [date,setDate]=useState('');
  const [timeslot,setTimeslot]=useState(''); 
  const [err,setErr]=useState('');
  const [alldoctor,setAlldoctor]=useState([]);
  const [sname,setSname]=useState(null);
  const [doctor,setDoctor]=useState([]);
   useEffect(()=>{
     async function  data1(){
    const result= await fetch('https://hospital-management-system-b06p.onrender.com/all-doctor',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({})
    })
     
    .catch((err)=>console.log(err))
     const data1=await result.json()
     setAlldoctor(Array.isArray(data1) ? data1 : []);}
     
     data1()


  },[])
  useEffect(()=>{
     async function  data(){
    const res= await fetch('https://hospital-management-system-b06p.onrender.com/doctor-schedule',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name:sname})
    })
     
    .catch((err)=>console.log(err))
     const data=await res.json()
    setDoctor(Array.isArray(data) ? data : []);}
    data()


  },[sname])
   function Fetch(e){
    e.preventDefault(e);
     
    if(docname.length==''){
      return setErr("*Fill doctor name")

    }
    if(duty.length==''){
      return setErr("*Fill Duty")

    }
    if(week.length==''){
      return setErr("*Fill Duty")

    }
    if(date.length==''){
      return setErr("*Fill Duty")

    }
    if(timeslot.length==''){
      return setErr("*Fill Duty")

    }
     
    const alreadyBooked = doctor.some((doc) => 
      doc.nameid === docname && 
      doc.duty === duty && 
     doc.week === week && 
     doc.date === date && 
      doc.time === timeslot
      );
      if (alreadyBooked) {
          alert("Already booked for that time");
           return;  }
      
     
    fetch('https://hospital-management-system-b06p.onrender.com/add-doctor-schedule',
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({docname,duty,week,date,timeslot})
      }
    )
    .then((response)=>response.text())
    .then((data)=>console.log("Schedule Added!"))
    .then((err)=>alert(err))
     

  }
  function Delete(nameid, week, duty, date, timeslot) {
  fetch('https://hospital-management-system-b06p.onrender.com/delete', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ docname: nameid, week, duty, date, timeslot })
  })
  .then(res => res.json())
  .then(data => {
    alert("deleted!");
     
     
  })
  .catch(err => console.error(err));
}

  return (
    <div>
      <p className='text-xl font-bold '>Doctor Schedule</p><br></br>
       
      <div className='grid grid-flow-col auto-cols-max gap-4 items-center ml-[300px] ' >
             
             <p className='font-bold text-2xl'>SEARCH:</p>
             <select className='w-[200px] h-[30px] border-2 rounded-lg text-xl' onChange={(e)=>setSname(e.target.value)}>
            {alldoctor.map((d,index)=>(<option key={index} value={d.name}>{d.name}-{d.id}</option>))}
            </select>
            

            
            
      </div> 
      <div>
        <br></br>
        <p className='text-2xl font-semibold'>Doctor Schedule List</p>
        <table className="w-[1100px] border-collapse shadow-lg rounded-xl overflow-hidden mt-4">
  <thead className="bg-green-700 text-white h-[50px]">
    <tr>
      <th className="px-4 py-2">Name</th>
      <th className="px-4 py-2">Week</th>
      <th className="px-4 py-2">Duty</th>
      <th className="px-4 py-2">Date</th>
      <th className="px-4 py-2">Time Slot</th>
      <th className="px-4 py-2">Action</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    {doctor.map((doc) => (
      <tr  className="hover:bg-green-50 transition-colors">
        
        <td className="px-4 py-3">{doc.nameid}</td>
        <td className="px-4 py-3">{doc.week}</td>
        <td className="px-4 py-3">{doc.duty}</td>
        <td className="px-4 py-3">{doc.date}</td>
         <td className="px-4 py-3">{doc.time}</td>
        <td className="px-4 py-3 flex justify-center gap-2">
          
          <button 
              type="button" 
              onClick={() => Delete(doc.nameid, doc.week, doc.duty, doc.date, doc.time)} 
              className="p-2 border text-right border-gray-300 rounded-lg hover:bg-red-100 transition">
              <img className="w-5 h-5" src="bin.png" alt="Delete" />
              </button>

        </td>
      </tr>
    ))}
  </tbody>
</table>


      </div>
    </div>
  )
}

export default doctorschedule
