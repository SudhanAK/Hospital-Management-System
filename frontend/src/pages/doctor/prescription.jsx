import React, { useState,useEffect } from "react";

 

function Prescription() {

  

  const [med, setMed]=useState(1); 
  const [boxes,setBoxes]=useState('') ;
  const [docname,setDocname]=useState('');
  const [date,setDate]=useState('');
  const [patname,setPatname]=useState('');
   const [patprob,setPatprob]=useState(''); 
  const [patgen,setPatgen]=useState(''); 
  const [patage,setPatage]=useState(''); 
  const [bp,setBp]=useState('');
  const [sugar,setSugar]=useState('');
  const [temp,setTemp]=useState('');
  const [weight,setWeight]=useState('');
  const [height,setHeight]=useState('');
  const [oxygen,setOxygen]=useState('');
  const [medname,setMedname]=useState(''); 
  const [meddose,setMeddose]=useState(''); 
  const [medfreq,setMedfreq]=useState(''); 
  const [meddur,setMeddur]=useState(''); 
  const [medroute,setMedroute]=useState(''); 
  const [err,setErr]=useState('')

const [doctor, setDoctor] = useState({});
const [alldoctor ,setAlldoctor]=useState({})
  const [sname, setSname] = useState('');
  const [patient, setPatient] = useState({});
  const [allpatient, setAllpatient] = useState([]);
  const [pname, setPname] = useState('');
  useEffect(() => {
    async function fetchDoctors() {
      try {
        const result = await fetch('http://localhost:3000/all-doctor', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        const data1 = await result.json();
        setAlldoctor(Array.isArray(data1) ? data1 : []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDoctors();
  }, []);

  useEffect(() => {
    async function fetchDoctor() {
      if (!sname) return;
      try {
        const res = await fetch('http://localhost:3000/show-doctor', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: sname })
        });
        const data = await res.json();
        setDoctor(data || {});
      } catch (error) {
        console.error(error);
      }
    }
    fetchDoctor();
  }, [sname]);

  useEffect(() => {
    async function fetchPatients() {
      try {
        const result = await fetch('http://localhost:3000/all-patient', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        const data1 = await result.json();
        setAllpatient(Array.isArray(data1) ? data1 : []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPatients();
  }, []);

  useEffect(() => {
    async function fetchPatient() {
      if (!pname) return;
      try {
        const res = await fetch('http://localhost:3000/show-patient', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: pname })
        });
        const data = await res.json();
        setPatient(data || {});
        setPatname(pname); 
      } catch (error) {
        console.error(error);
      }
    }
    fetchPatient();
  }, [pname]);



   function Fetch(e){
    e.preventDefault();
    if(!docname){
      return setErr('*Doctor name is epmty')
    }
    if(!date){
      return setErr('*Date is epmty')
    }
     
    if(!patname){
      return setErr('*Patient name is empty')
    }
    if(!patprob){
      return setErr('*patient problem is epmty')
    }
    if(!patgen){
      return setErr('*patient gender is epmty')
    }
    if(!patage){
      return setErr('*patient age is epmty')
    }
    if(!bp){
      return setErr('*patient blood pressure is empty')
    }
    if(!sugar){
      return setErr('*patient sugar is empty')
    }
    if(!weight){
      return setErr('*patient weight is empty')
    }
    if(!height){
      return setErr('*patient height is empty')
    }
    if(!oxygen){
      return setErr('*patient oxygen is empty')
    }
    if(!temp){
      return setErr('*patient temperature is empty')
    }
    
    if(!medname){
      return setErr('*medicine name is epmty')
    }
    if(!meddose){
      return setErr('*medicine dose is epmty')
    }
    if(!medfreq){
      return setErr('*medicine freqency is epmty')
    }
    if(!meddur){
      return setErr('*medicine duration is epmty')
    }
    if(!medroute){
      return setErr('*medicine route is empty')
    }
    
    fetch('http://localhost:3000/add-prescription',
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({docname,date,patname,patprob,patgen,patage,bp,sugar,oxygen,weight,height,temp,medname,meddose,medfreq,meddur,medroute})
      }
    )
    .then((response)=>response.text()) 
    .then(()=>alert("Submitted")) 
    
    .catch((err)=>alert(err))
  }
  

  const name=[];
  const dose=[];
  const route=[];
  const frequency=[];
  const duration=[];
  function display(e){
    e.preventDefault();
    let i=0;
    const box=[]
    for(i=0;i<med;i++){
      box.push(
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <p className="text-xl font-semibold mb-4 text-green-700">Medicine Details</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Medicine Name</label>
            <input
              type="text"
              onBlur={(e)=>{name.push(e.target.value);setMedname(name)}}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Dose</label>
            <input
              type="text"
              onBlur={(e)=>{dose.push(e.target.value);setMeddose(dose)}}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Route</label>
            <input
              type="text"
              onBlur={(e)=>{route.push(e.target.value);setMedroute(route)}}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Frequency</label>
            <input
              type="text"
              onBlur={(e)=>{frequency.push(e.target.value);setMedfreq(frequency)}}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <input
              type="text"
              onBlur={(e)=>{duration.push(e.target.value);setMeddur(duration)}}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>
      </div>
      );
      setBoxes(box);

    }

  }    



  return (
    <div className="p-6">
       <p className="text-3xl font-bold text-center mb-6">Doctor Prescription</p>

       <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <p className="text-xl font-semibold mb-4 text-green-700">Doctor Details</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <select
          value={sname || ''} 
          className='w-[200px] h-[30px] border-2 rounded-lg text-xl'
          onChange={(e) => {
            setSname(e.target.value);
            setDocname(e.target.value);
          }}
        >
          <option value="">Select Doctor</option>
          {Array.isArray(alldoctor) && alldoctor.map((d, index) => (
  <option key={index} value={d.name}>{d.name}-{d.id}</option>
))}
        </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              onChange={(e)=>setDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <form>
          <label className="block text-sm font-medium mb-1">Name & Id:</label>
          <select
          value={pname}
          className='w-[200px] h-[30px] border-2 rounded-lg text-xl'
          onChange={(e) =>{setPatname(e.target.value) ;setPname(e.target.value)}}
        >
          <option value="">Select Patient</option>
          {allpatient.map((p, index) => (
            <option key={index} value={p.name}>{p.name} - {p.id}</option>
          ))}
        </select>

        </form>

        <div>
            <label className="block text-sm font-medium mb-1">Patient Gender</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-1">
                <input onChange={(e)=>setPatgen(e.target.value)} className="h-[10px] w-[10px] shadow bg-green" type="radio" name="gender" value="Male" /> Male
              </label>
              <label className="flex items-center gap-1">
                <input onChange={(e)=>setPatgen(e.target.value)} className="h-[10px] w-[10px] shadow bg-green" type="radio" name="gender" value="Female" /> Female
              </label>
              <label className="flex items-center gap-1">
                <input onChange={(e)=>setPatgen(e.target.value)} className="h-[10px] w-[10px] shadow bg-green" type="radio" name="gender" value="Others" /> Others
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Patient Problem Description</label>
            <input
              type="text"
              onChange={(e)=>setPatprob(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          
          <div> 
            <label className="block text-sm font-medium mb-1">Blood Pressure</label>
            <input
              type="text"
              onChange={(e)=>setBp(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sugar</label>
            <input
              type="text"
              onChange={(e)=>setSugar(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Weight</label>
            <input
              type="text"
              onChange={(e)=>setWeight(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Height</label>
            <input
              type="text"
              onChange={(e)=>setHeight(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Oxygen</label>
            <input
              type="text"
              onChange={(e)=>setOxygen(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Temperature</label>
            <input
              type="text"
              onChange={(e)=>setTemp(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Patient Age</label>
            <input
              type="number"
              onChange={(e)=>setPatage(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>
      </div>
      <div>
        <form>
          <label className="font-semibold">no of medicines: </label>
          <input type='number' className=" shadow-sm w-16 h-10 focus:outline-none focus:ring-2 focus:ring-green-400" onChange={(e)=>setMed(Number(e.target.value))}></input>
          <button type="button" onClick={display} className='ml-2 border bg-yellow-700 w-16 h-10 rounded-lg f'>Add</button>
        </form>
      </div>
       <br></br>
      <div>{boxes}</div>

      <p style={{marginTop:"20px",textAlign:"center",  color:"red" }}>{err}</p>

      <div className="flex justify-center gap-6">
        <button
          type="submit"
          onClick={Fetch}
          className="w-40 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        > 
          Submit
        </button>
        <button
          type="button"
          
          className=" ml-2 w-40 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Prescription;
