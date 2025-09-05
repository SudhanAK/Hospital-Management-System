import React, { useState, useEffect } from 'react';

function Bill({ patient }) {
  const [sname, setSname] = useState(patient.name);
  const [bill, setBill] = useState(null);

  useEffect(() => {
    async function fetchBill() {
      if (!sname) return;
      try {
        const res = await fetch('https://hospital-management-system-b06p.onrender.com/search-bill', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sname })
        });
        const data = await res.json();
        setBill(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error(error);
        setBill(null);
      }
    }
    fetchBill();
  }, [sname]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
       
      <style>
        {`
          @media print {
            body * { visibility: hidden; }
            #print-section, #print-section * { visibility: visible; }
            #print-section {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              margin: 0;
              padding: 0;
            }
            #print-section table { width: 100%; border: 1px solid black; }
            #print-section th, #print-section td { border: 0 solid black; padding: 5px; }
            .no-print { display: none; }
          }
        `}
      </style>

      <p className="text-2xl sm:text-3xl font-bold text-center">Bill</p><br />

      <div id="print-section" className="overflow-x-auto">
        {!bill ? (
          <p className="text-center mt-6 text-red-600 font-semibold">
            {sname ? "No bill found for this patient." : "Please select a patient."}
          </p>
        ) : (
          <table className="min-w-full sm:w-[800px] border-collapse shadow-lg rounded-xl overflow-hidden mt-6 mx-auto">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-2 sm:px-4 py-2 text-left">Field</th>
                <th className="px-2 sm:px-4 py-2 text-left">Details</th>
                <th></th><th></th><th></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              
               <tr className="bg-green-50">
                <td className="px-2 sm:px-4 py-3 font-semibold" colSpan="2">Doctor Details</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td className="px-2 sm:px-4 py-3">Doctor Name</td>
                <td className="px-2 sm:px-4 py-3 font-semibold">{bill.doctor || "N/A"}</td>
              </tr>
              <tr>
                <td className="px-2 sm:px-4 py-3">Date</td>
                <td className="px-2 sm:px-4 py-3">{bill.date || "N/A"}</td>
              </tr>

               <tr className="bg-green-50">
                <td className="px-2 sm:px-4 py-3 font-semibold" colSpan="2">Patient Details</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td className="px-2 sm:px-4 py-3">Patient Name</td>
                <td className="px-2 sm:px-4 py-3 font-semibold">{bill.patient || "N/A"}</td>
              </tr>
              <tr>
                <td className="px-2 sm:px-4 py-3">Gender</td>
                <td className="px-2 sm:px-4 py-3">{bill.gender || "N/A"}</td>
              </tr>
              <tr>
                <td className="px-2 sm:px-4 py-3">Age</td>
                <td className="px-2 sm:px-4 py-3">{bill.age || "N/A"}</td>
              </tr>

               <tr className="bg-green-50">
                <td className="px-2 sm:px-4 py-3 font-semibold" colSpan="2">Bill Details</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td className="px-2 sm:px-4 py-3">Status</td>
                <td className="px-2 sm:px-4 py-3 font-semibold text-yellow-700">{bill.status || "N/A"}</td>
              </tr>

               <tr className="bg-green-50">
                <td className="px-2 sm:px-4 py-3 font-semibold" colSpan="2">Medicine Details</td>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td colSpan="5">
                  <div className="overflow-x-auto">
                    <table className="min-w-full sm:w-auto mx-auto px-2 sm:px-4 py-2 gap-4">
                      <thead>
                        <tr>
                          <th className="px-2 sm:px-4 py-2 text-left">Medicine</th>
                          <th className="px-2 sm:px-4 py-2 text-left">Dose</th>
                          <th className="px-2 sm:px-4 py-2 text-left">Route</th>
                          <th className="px-2 sm:px-4 py-2 text-left">Frequency</th>
                          <th className="px-2 sm:px-4 py-2 text-left">Duration</th>
                          <th className="px-2 sm:px-4 py-2 text-left">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bill.medname?.map((med, idx) => (
                          <tr key={idx}>
                            <td className="px-2 sm:px-4 py-2">{med}</td>
                            <td className="px-2 sm:px-4 py-2">{bill.dose?.[idx] || ""}</td>
                            <td className="px-2 sm:px-4 py-2">{bill.route?.[idx] || ""}</td>
                            <td className="px-2 sm:px-4 py-2">{bill.frequency?.[idx] || ""}</td>
                            <td className="px-2 sm:px-4 py-2">{bill.duration?.[idx] || ""}</td>
                            <td className="px-2 sm:px-4 py-2">₹{bill.amount?.[idx] || 0}</td>
                          </tr>
                        ))}
                        <tr>
                          <td className="px-2 sm:px-4 py-2 font-bold" colSpan={6}>
                            Total: ₹{bill.total || 0}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
