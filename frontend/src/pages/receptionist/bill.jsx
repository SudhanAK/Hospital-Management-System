import React, { useState, useEffect } from 'react';

function Bill() {
  const [patient, setPatient] = useState([]);
  const [sname, setSname] = useState("");
  const [bill, setBill] = useState(null);

   useEffect(() => {
    async function GetPatient() {
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
    GetPatient();
  }, []);

   useEffect(() => {
    async function fetchBill() {
      if (!sname) return;
      try {
        const res = await fetch('http://localhost:3000/search-bill', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sname })
        });
        const data = await res.json();
        // if backend sends array, pick first record
        setBill(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error(error);
        setBill(null);
      }
    }
    fetchBill();
  }, [sname]);

  console.log("Bill Data:", bill);
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <p className='text-2xl font-bold text-center'>Bill</p><br />
      <div className='grid grid-flow-col auto-cols-max gap-4 items-center ml-[430px]'>
        <p className='font-bold text-2xl'>SEARCH:</p>
        <select onChange={(e) => setSname(e.target.value)}>
          <option value="">-- Select Patient --</option>
          {patient.map((p, idx) => (
            <option key={idx}>{p.name}</option>
          ))}
        </select>
      </div><br></br>
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #print-section, #print-section * {
              visibility: visible;
            }
            #print-section {
              position: absolute  ;
               
              right:280px;
              top: -25px  ;
              width: 900px  ;
              
              margin: 0  ;
              padding: 0  ;
            }
            #print-section table {
              width: [1000px]  ;
              height:-10px; 
              border: 1px solid black  ;
            }
            #print-section th, #print-section td {
              border: 0 solid black  ;
              padding: 5px  ;
            }
            .no-print {
              display: none  ;
            }
          }
        `}
      </style>

      

       <div className="text-center no-print">
        <button
          onClick={handlePrint}
          className="bg-yellow-600 text-white font-semibold  px-4 py-2 rounded-lg shadow hover:bg-green-800 transition"
        >
          Print Bill
        </button>
      </div><br></br>
      <div id='print-section' className='border-4 rounded-lg h-auto w-[1100px]'>  <br></br>
      <div className='ml-[170px] grid grid-cols-5'>
        <img className= 'w-[80px] h-[80px]  ' src='logo.jpg'></img>
        <div>
        <p className='text-2xl font-bold w-[300px]'><span className='text-green-800'>Health</span><span className='text-red-700'> Cure</span> Hospital</p>
        <p className='w-[500px]'>Thirumangalam,Madurai-625502</p>
        <p className='w-[500px]'>📞-987654321</p>

        </div>
        <img className= 'w-[80px] h-[80px] ml-[180px] ' src='cert.png'></img>
      </div>  
      {!bill ? (
        <p className='text-center mt-6 text-red-600 font-semibold'>
          {sname ? "No bill found for this patient." : "Please select a patient."}
        </p>
      ) : (
        <table className="w-[800px] border-collapse shadow-lg rounded-xl overflow-hidden mt-6 mx-auto">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Field</th>
              <th className="px-4 py-2 text-left">Details</th>
              <th></th><th></th><th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">

            

             <tr className="bg-green-50">
              <td className="px-4 py-3 font-semibold" colSpan="2">Patient Details</td>
              <td></td><td></td><td></td>
            </tr>
            <tr>
              <td className="px-4 py-3">Patient Name</td>
              <td className="px-4 py-3 font-semibold">{bill.patient || "N/A"}</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Gender</td>
              <td className="px-4 py-3">{bill.gender || "N/A"}</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Age</td>
              <td className="px-4 py-3">{bill.age || "N/A"}</td>
            </tr>
             <tr className="bg-green-50">
              <td className="px-4 py-3 font-semibold" colSpan="2">Doctor Details</td>
              <td></td><td></td><td></td>
            </tr>
            <tr>
              <td className="px-4 py-3">Doctor Name</td>
              <td className="px-4 py-3 font-semibold">{bill.doctor || "N/A"}</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Date</td>
              <td className="px-4 py-3">{bill.date || "N/A"}</td>
            </tr>

             <tr className="bg-green-50">
              <td className="px-4 py-3 font-semibold" colSpan="2">Bill Details</td>
              <td></td><td></td><td></td>
            </tr>
            <tr>
              <td className="px-4 py-3">Status</td>
              <td className="px-4 py-3 font-semibold text-yellow-700">{bill.status || "N/A"}</td>
            </tr>

             <tr className="bg-green-50">
              <td className="px-4 py-3 font-semibold" colSpan="2">Medicine Details</td>
              <td></td><td></td><td></td>
            </tr>
            <tr>
              <td colSpan="5">
                <table className='mx-auto px-4 py-3 gap-4'>
                  <thead>
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
                    {bill.medname?.map((med, idx) => (
                      <tr key={idx}>
                        <td className='px-4 py-2'>{med}</td>
                        <td className='px-4 py-2'>{bill.dose?.[idx] || ""}</td>
                        <td className='px-4 py-2'>{bill.route?.[idx] || ""}</td>
                        <td className='px-4 py-2'>{bill.frequency?.[idx] || ""}</td>
                        <td className='px-4 py-2'>{bill.duration?.[idx] || ""}</td>
                        <td className='px-4 py-2'>₹{bill.amount?.[idx] || 0}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className='px-4 py-2 font-bold' colSpan={6}>
                        Total: ₹{bill.total || 0}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

          </tbody>
        </table>
      )}
    </div>
    </div>  
  );
}

export default Bill;
