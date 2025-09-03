import React, { useState, useEffect } from 'react';

function PatientSchedule({ patient }) {
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
  const [allpatient, setAllpatient] = useState([]);
  const [pname, setPname] = useState('');
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState(patient.name);

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
    if (pname) setPatname(pname);
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

  function Delete(nameid, date, time, purpose, doctor, status) {
    fetch('http://localhost:3000/patient-delete', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nameid, date, time, purpose, doctor, status })
    })
      .then(res => res.json())
      .then(() => {
        alert("Deleted patient schedule!!");
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <p className='text-xl sm:text-2xl font-bold'>Patient Schedule</p><br />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center border-4 bg-gray-200 rounded-md px-2 sm:px-4 md:px-6 py-6 sm:py-8'>
        
        <select
          value={pname}
          className='lg:w-[150px] sm:w-[200px] h-[30px] border-2 rounded-lg text-base sm:text-xl'
          onChange={(e) => setPname(e.target.value)}
        >
          <option value="">Select Patient</option>
          {patient?.name && (
            <option value={patient.name}>
              {patient.name} - {patient.id}
            </option>
          )}
        </select>

        <div>
          <label className='text-base sm:text-xl'>Date :</label>
          <input 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='w-full sm:w-[110px] shadow h-[30px] border-2 border-black'
            type="date" 
          />
        </div>

        <div>
          <label className='text-base sm:text-xl'>Time : </label>
          <select 
            value={start} 
            onChange={(e) => { setStart(e.target.value); setTime(e.target.value); }}
            className='text-base sm:text-xl border-2 w-full sm:w-[115px] border-gray-600 rounded-md'
          >
            <option value="">Select</option>
            <option>08:00 AM – 12:00 PM</option>
            <option>12:00 PM – 04:00 PM</option>
            <option>04:00 PM – 08:00 PM</option>
            <option>08:00 PM – 12:00 AM</option>
            <option>12:00 AM – 04:00 AM</option>
            <option>04:00 AM – 08:00 AM</option>
          </select>
        </div>

        <div>
          <label className='text-base sm:text-xl'>Purpose : </label>
          <select 
            value={purpose} 
            onChange={(e) => setPurpose(e.target.value)}
            className='text-base sm:text-xl border-2 w-full sm:w-[115px] border-gray-600 rounded-md'
          >
            <option value="">Select</option>
            <option value="opd">OPD</option>
            <option value="test">Test</option>
            <option value="follow-up">Follow-up</option>
          </select>
        </div>

        <select
          value={sname || ''} 
          className='lg:w-[150px] sm:w-[200px] h-[30px] border-2 rounded-lg text-base sm:text-xl'
          onChange={(e) => {
            setSname(e.target.value);
            setDocname(e.target.value);
          }}
        >
          <option value="">Select Doctor</option>
          {alldoctor.map((d, index) => (
            <option key={index} value={d.name}>{d.name}</option>
          ))}
        </select>

        <div>
          <label className='text-base sm:text-xl'>Status :</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            className='text-base sm:text-xl border-2 w-full sm:w-[120px] border-gray-600 rounded-md'
          >
            <option value="">Select</option>
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <p className='text-center font-semibold text-base sm:text-lg text-red-500 mt-4'>{err}</p>
      <button onClick={handleSubmit}
        className='mt-4 mb-4 w-full sm:w-[350px] rounded-lg h-[40px] bg-green-600 font-bold'>
        Submit
      </button>
      <button
        className='mt-4 mb-4 w-full lg:ml-16 sm:w-[350px] rounded-lg h-[40px] bg-red-600 font-bold'>
        Cancel
      </button>

      <p className='mt-5 text-xl sm:text-2xl font-semibold'>Patient Schedule List</p>      
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse shadow-lg rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-green-700 text-white text-base sm:text-lg">
              <th className="px-4 sm:px-6 py-2 text-left">Name</th> 
              <th className="px-4 sm:px-6 py-2 text-left">Date</th> 
              <th className="px-4 sm:px-6 py-2 text-left">Time</th> 
              <th className="px-4 sm:px-6 py-2 text-left">Purpose</th> 
              <th className="px-4 sm:px-6 py-2 text-left">Doctor</th> 
              <th className="px-4 sm:px-6 py-2 text-left">Status</th> 
              <th className="px-4 sm:px-6 py-2 text-left">Action</th> 
            </tr> 
          </thead> 
          <tbody> 
            {details.map((d, index) => (
              <tr key={index} className="text-base sm:text-lg">
                <td className="px-2 sm:px-4">{d.nameid}</td>
                <td className="px-2 sm:px-4">{d.date}</td>
                <td className="px-2 sm:px-4">{d.time}</td>
                <td className="px-2 sm:px-4">{d.purpose}</td>
                <td className="px-2 sm:px-4">{d.doctor}</td>
                <td className="px-2 sm:px-4">{d.status}</td>
                <td className="px-2 sm:px-4 flex justify-center gap-2">
                  <button 
                    type="button" 
                    onClick={() => Delete(d.nameid, d.date, d.time, d.purpose, d.doctor, d.status)} 
                    className="p-2 border text-right border-gray-300 rounded-lg hover:bg-red-100 transition"
                  >
                    <img className="w-4 h-4 sm:w-5 sm:h-5" src="bin.png" alt="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientSchedule;
