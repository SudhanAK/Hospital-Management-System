import React, { useState, useEffect } from 'react';

function Prescription({patient}) {
  const [status, setStatus] = useState('pending');
  const [amounts, setAmounts] = useState({});  // medicineIndex → amount
  const [total, setTotal] = useState(0);

  const [sname, setSname] = useState(patient.name);
  const [reception, setReception] = useState([]);

  useEffect(() => {
    async function Getpatient() {
      try {
        const res = await fetch('http://localhost:3000/all-patient', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        const data = await res.json();
        setPatient(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setPatient([]);
      }
    }
    Getpatient();
  }, []);

  useEffect(() => {
    if (!sname) return;
    async function Getreception() {
      try {
        const res1 = await fetch('http://localhost:3000/s-reception', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sname })
        });
        const data1 = await res1.json();

        const normalized = (Array.isArray(data1) ? data1 : []).map(item => {
          const medicines = (item.medname || []).map((name, idx) => ({
            name,
            dose: (item.dose && item.dose[idx]) || '--',
            route: (item.route && item.route[idx]) || '--',
            frequency: (item.frequency && item.frequency[idx]) || '--',
            duration: (item.duration && item.duration[idx]) || '--',
          }));
          return { ...item, medicines };
        });

        setReception(normalized);
      } catch (err) {
        console.error(err);
        setReception([]);
      }
    }
    Getreception();
  }, [sname]);

  function updateAmount(index, value) {
    const val = Number(value) || 0;
    setAmounts(prev => {
      const updated = { ...prev, [index]: val };
      const sum = Object.values(updated).reduce((a, b) => a + b, 0);
      setTotal(sum);
      return updated;
    });
  }

  async function Fetch(e, billData) {
    e.preventDefault();

    const amountArr = billData.medicines.map((_, idx) => amounts[idx] || 0);

    const pres = {
      docname: billData.doctor,
      date: billData.date,
      patname: billData.patient,
      patprob: billData.problem,
      patgen: billData.gender,
      patage: billData.age,
      bp: billData.bloodpressure,
      sugar: billData.sugar,
      oxygen: billData.oxygen,
      weight: billData.weight,
      height: billData.height,
      temp: billData.temperature,
      medname: billData.medicines.map(m => m.name),
      meddose: billData.medicines.map(m => m.dose),
      medfreq: billData.medicines.map(m => m.frequency),
      meddur: billData.medicines.map(m => m.duration),
      medroute: billData.medicines.map(m => m.route),
      status,
      amount: amountArr,
      total
    };

    try {
      const res = await fetch('http://localhost:3000/set-bill', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pres)
      });
      const result = await res.text();
      alert(result || "Bill submitted");
    } catch (err) {
      console.error(err);
      alert("Error submitting bill");
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <p className='text-2xl sm:text-3xl font-bold text-center'>Prescription</p><br />

      {reception.map((billData, index) => (
        <div key={index} className="mb-8">
           <div className="overflow-x-auto">
            <table className="min-w-full sm:w-[900px] border-collapse shadow-lg rounded-xl overflow-hidden mt-6 mx-auto">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="px-2 sm:px-4 py-2 text-left">Field</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-green-50">
                  <td colSpan="2" className="px-2 sm:px-4 py-2 font-semibold">Doctor Details</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Doctor Name</td>
                  <td className="px-2 sm:px-4 py-2 font-semibold">{billData.doctor || '--'}</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Date</td>
                  <td className="px-2 sm:px-4 py-2 font-semibold">{billData.date || '--'}</td>
                </tr>

                <tr className="bg-green-50">
                  <td colSpan="2" className="px-2 sm:px-4 py-2 font-semibold">Patient Details</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Patient Name</td>
                  <td className="px-2 sm:px-4 py-2 font-semibold">{billData.patient || '--'}</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Gender</td>
                  <td className="px-2 sm:px-4 py-2">{billData.gender || '--'}</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Age</td>
                  <td className="px-2 sm:px-4 py-2">{billData.age || '--'}</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Blood Pressure</td>
                  <td className="px-2 sm:px-4 py-2">{billData.bloodpressure || '--'}</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Sugar</td>
                  <td className="px-2 sm:px-4 py-2">{billData.sugar || '--'}</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Oxygen</td>
                  <td className="px-2 sm:px-4 py-2">{billData.oxygen || '--'}</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Weight</td>
                  <td className="px-2 sm:px-4 py-2">{billData.weight || '--'}</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Height</td>
                  <td className="px-2 sm:px-4 py-2">{billData.height || '--'}</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2">Temperature</td>
                  <td className="px-2 sm:px-4 py-2">{billData.temperature || '--'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full sm:w-[900px] border-collapse shadow-lg rounded-xl overflow-hidden mt-2 mx-auto">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className='px-2 sm:px-4 py-2 text-left'>Medicine</th>
                  <th className='px-2 sm:px-4 py-2 text-left'>Dose</th>
                  <th className='px-2 sm:px-4 py-2 text-left'>Route</th>
                  <th className='px-2 sm:px-4 py-2 text-left'>Frequency</th>
                  <th className='px-2 sm:px-4 py-2 text-left'>Duration</th>
                </tr>
              </thead>
              <tbody>
                {(billData.medicines || []).map((med, medIndex) => (
                  <tr key={medIndex}>
                    <td className='px-2 sm:px-4 py-2 text-center'>{med.name || '--'}</td>
                    <td className='px-2 sm:px-4 py-2 text-center'>{med.dose || '--'}</td>
                    <td className='px-2 sm:px-4 py-2 text-center'>{med.route || '--'}</td>
                    <td className='px-2 sm:px-4 py-2 text-center'>{med.frequency || '--'}</td>
                    <td className='px-2 sm:px-4 py-2 text-center'>{med.duration || '--'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <br />
           
        </div>
      ))}
    </div>
  );
}

export default Prescription;
