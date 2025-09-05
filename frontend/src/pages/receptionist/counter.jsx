import React, { useState, useEffect } from 'react';

function Billcounter() {
  const [status, setStatus] = useState('pending');
  const [amounts, setAmounts] = useState({});   
  const [total, setTotal] = useState(0);

  const [patient, setPatient] = useState([]);
  const [sname, setSname] = useState(null);
  const [reception, setReception] = useState([]);

  // Fetch all patients on mount
  useEffect(() => {
    async function Getpatient() {
      try {
        const res = await fetch('https://hospital-management-system-b06p.onrender.com/all-patient', {
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
        const res1 = await fetch('https://hospital-management-system-b06p.onrender.com/s-reception', {
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
      const res = await fetch('https://hospital-management-system-b06p.onrender.com/set-bill', {
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
    <div>
      <p className='text-2xl font-bold text-center'>Bill Counter</p><br />

      <div className='grid grid-flow-col auto-cols-max gap-4 items-center ml-[300px]'>
        <p className='font-bold text-2xl'>SEARCH:</p>
        <select onChange={(e) => setSname(e.target.value)}>
          <option value="">-- Select Patient --</option>
          {patient.map((p, idx) => (
            <option key={idx}>{p.name}</option>
          ))}
        </select>
      </div>

      {reception.map((billData, index) => (
        <div key={index} className="mb-8">
          {/* First table: Doctor and Patient details */}
          <table className="w-[900px] border-collapse shadow-lg rounded-xl overflow-hidden mt-6 mx-auto">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Field</th>
                <th className="px-4 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-green-50">
                <td colSpan="2" className="px-4 py-3 font-semibold">Doctor Details</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Doctor Name</td>
                <td className="px-4 py-3 font-semibold">{billData.doctor || '--'}</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Date</td>
                <td className="px-4 py-3 font-semibold">{billData.date || '--'}</td>
              </tr>

              <tr className="bg-green-50">
                <td colSpan="2" className="px-4 py-3 font-semibold">Patient Details</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Patient Name</td>
                <td className="px-4 py-3 font-semibold">{billData.patient || '--'}</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Gender</td>
                <td className="px-4 py-3">{billData.gender || '--'}</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Age</td>
                <td className="px-4 py-3">{billData.age || '--'}</td>
              </tr>

              <tr className="bg-green-50">
                <td colSpan="2" className="px-4 py-3 font-semibold">Bill Details</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Status</td>
                <td className="px-4 py-3 font-semibold">
                  <select onChange={(e) => setStatus(e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Second table: Medicines with amount input */}
          <table className="w-[900px] border-collapse shadow-lg rounded-xl overflow-hidden mt-2 mx-auto">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className='px-4 py-2 text-left'>Medicine</th>
                <th className='px-4 py-2 text-left'>Dose</th>
                <th className='px-4 py-2 text-left'>Route</th>
                <th className='px-4 py-2 text-left'>Frequency</th>
                <th className='px-4 py-2 text-left'>Duration</th>
                <th className='px-4 py-2 text-left'>Amount</th>
              </tr>
            </thead>
            <tbody>
              {(billData.medicines || []).map((med, medIndex) => (
                <tr key={medIndex}>
                  <td className='px-4 py-2 text-center'>{med.name || '--'}</td>
                  <td className='px-4 py-2 text-center'>{med.dose || '--'}</td>
                  <td className='px-4 py-2 text-center'>{med.route || '--'}</td>
                  <td className='px-4 py-2 text-center'>{med.frequency || '--'}</td>
                  <td className='px-4 py-2 text-center'>{med.duration || '--'}</td>
                  <td className='px-4 py-2'>
                    <div className='flex items-center'>
                      <span className='font-semibold mr-2'>₹</span>
                      <input
                        type="number"
                        onBlur={(e) => updateAmount(medIndex, e.target.value)}
                        placeholder='--'
                        className="shadow h-[30px] w-[80px] border border-gray-300 rounded"
                      />
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="6" className='px-4 py-2 font-bold text-right'>
                  Total: ₹{total}
                </td>
              </tr>
            </tbody>
          </table>

          <br />
          <button
            onClick={(e) => Fetch(e, billData)}
            className='mt-4 ml-[181px] mb-4 w-[350px] rounded-lg h-[40px] bg-green-600 font-bold'
            type="submit"
          >
            Submit
          </button>
          <button
            className='mt-4 ml-10 mb-4 w-[350px] rounded-lg h-[40px] bg-red-600 font-bold'
            type="button"
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}

export default Billcounter;
