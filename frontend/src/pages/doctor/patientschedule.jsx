import React, { useState, useEffect } from 'react';

function PatientSchedule() {
  const [time, setTime] = useState('');
  const [patname, setPatname] = useState('');
  const [date, setDate] = useState('');
  const [purpose, setPurpose] = useState('');
  const [start, setStart] = useState('');
  const [docname, setDocname] = useState('');
  const [status, setStatus] = useState('');
  const [err, setErr] = useState('');
  const [alldoctor, setAlldoctor] = useState([]);
  const [doctor, setDoctor] = useState({});
  const [sname, setSname] = useState('');
  const [patient, setPatient] = useState({});
  const [allpatient, setAllpatient] = useState([]);
  const [pname, setPname] = useState('');
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function Details() {
      try {
        const result = await fetch('http://localhost:3000/details', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ search })
        });
        const data1 = await result.json();
        setDetails(Array.isArray(data1) ? data1 : []);
      } catch (error) {
        console.error(error);
      }
    }
    Details();
  }, [search]);

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

  async function handleSubmit(e) {
    e.preventDefault();
    if (!patname) return setErr("*Fill patient name");
    if (!date) return setErr("*Fill Date");
    if (!purpose) return setErr("*Fill purpose");
    if (!start) return setErr("*Fill Time");
    if (!docname) return setErr("*Fill Doctor");
    if (!status) return setErr("*Fill Status");

    try {
      const res = await fetch('http://localhost:3000/add-patient-schedule', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patname, date, time: start, purpose, start, docname, status })
      });
      const result = await res.text();
      alert(result);
    } catch (err) {
      alert("Error while submitting schedule");
    }
  }
  function Delete( nameid,  date, time, purpose,  doctor, status) {
  fetch('http://localhost:3000/patient-delete', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nameid,  date, time, purpose,  doctor, status})
  })
  .then(res => res.json())
  .then(data => {
    alert("deleted patient schedule!!");
     
     
  })
  .catch(err => console.error(err));
}

  return (
    <div>
      <p className='text-xl font-bold'>Patient Schedule</p><br />
       

      {/* Search */}
      <div className='grid grid-cols-6 ml-[400px]'>
        <p className='font-bold text-2xl'>SEARCH:</p>
        <select 
          value={search}
          className='w-[200px] h-[30px] border-2 rounded-lg text-xl text-center' 
          onChange={(e)=> setSearch(e.target.value)}
        >
          <option value="">Select Patient</option>
          {allpatient.map((d,index)=>(
            <option key={index} value={d.name}>{d.name}-{d.id}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <p className='mt-[20px] text-2xl font-semibold'>Patinet Schedule List</p>      
      <table className="w-[1100px] h-auto border-collapse shadow-lg rounded-xl overflow-hidden mt-4">
        <thead>
          <tr className="bg-green-700 text-white text-lg">
            <th className="px-6 py-3 text-left">Name</th> 
            <th className="px-6 py-3 text-left">Date</th> 
            <th className="px-6 py-3 text-left">Time</th> 
            <th className="px-6 py-3 text-left">Purpose</th> 
            <th className="px-6 py-3 text-left">Doctor</th> 
            <th className="px-6 py-3 text-left">Status</th> 
            <th className="px-6 py-3 text-left">Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          { details.map((d,index)=>(
            <tr key={index}>
              <td>{d.nameid}</td>
              <td>{d.date}</td>
              <td>{d.time}</td>
              <td>{d.purpose}</td>
              <td>{d.doctor}</td>
              <td>{d.status}</td>
              <td className="px-4 py-3 flex justify-center gap-2">
          
          <button 
              type="button" 
              onClick={() => Delete(d.nameid, d.date, d.time, d.purpose, d.doctor,d.status)} 
              className="p-2 border text-right border-gray-300 rounded-lg hover:bg-red-100 transition">
              <img className="w-5 h-5" src="bin.png" alt="Delete" />
              </button>

        </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientSchedule;
