import React from 'react'
import { useState, useEffect } from 'react'

function prescription() {


 
  return (
    <div>
      <p className='text-2xl font-bold text-center'>Doctor Prescription</p><br></br>
      
      <div className='grid grid-flow-col auto-cols-max gap-4 items-center ml-[300px] ' >
             
             

            
            
      </div> 
  <table className="w-[800px] border-collapse shadow-lg rounded-xl overflow-hidden mt-6 mx-auto">
  <thead className="bg-green-700 text-white">
    <tr>
      <th className="px-4 py-2 text-left">Field</th>
      <th className="px-4 py-2 text-left">Details</th>
      <th></th>
      <th></th>
      <th>  </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">

     <tr className="bg-green-50">
      <td className="px-4 py-3 font-semibold" colSpan="2">Doctor Details</td>
      <td></td><td></td><td></td>
    </tr>
    <tr>
      <td className="px-4 py-3">Doctor Name & Qualification</td>
      <td className="px-4 py-3 font-semibold">Dr. Nagaraj (MD, Cardiology)</td>
    </tr>
    <tr>
      <td className="px-4 py-3">Date</td>
      <td className="px-4 py-3">12/08/2025</td>
    </tr>

     <tr className="bg-green-50">
      <td className="px-4 py-3 font-semibold" colSpan="2">Patient Details</td>
      <td></td><td></td><td></td>
    </tr>
    <tr>
      <td className="px-4 py-3">Patient Name</td>
      <td className="px-4 py-3 font-semibold">Sudhan AK</td>
    </tr>
    <tr>
      <td className="px-4 py-3">Patient Id</td>
      <td className="px-4 py-3 font-semibold">10</td>
    </tr>
    <tr>
      <td className="px-4 py-3">Gender</td>
      <td className="px-4 py-3">Female</td>
    </tr>
    <tr>
      <td className="px-4 py-3">Age</td>
      <td className="px-4 py-3">35</td>
    </tr>

     <tr className="bg-green-50">
      <td className="px-4 py-3 font-semibold" colSpan="2">Medicine Details</td>
      <td></td><td></td><td></td>
    </tr>
     <tr>
      <table className='mx-auto px-4 py-3 gap-4'>
        <thead className='px-4 py-3'>
          <tr>
          <th className='px-4 py-2 text-left'>Medicine Name</th>
          <th className='px-4 py-2 text-left'>Dose</th>
          <th className='px-4 py-2 text-left'>Route</th>
          <th className='px-4 py-2 text-left'>Frequency</th>
          <th className='px-4 py-2 text-left'>Duration</th>
        </tr> 
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-2 text-left font-semibold'>
              Paracetomol
            </td >
            <td className='px-4 py-2 text-left'>
              2
            </td>
            <td className='px-4 py-2 text-left'>
              Oral
            </td>
            <td className='px-4 py-2 text-left'>
              2
            </td>
            <td className='px-4 py-2 text-left'>
              2
            </td>
          </tr>
        </tbody>
        
      </table>
     </tr>

  </tbody>
</table>
 
    </div>
  )
}

export default prescription
