import React from 'react';
import { useState, useEffect } from 'react';

function Settings({ patient }) {
  const [add, setAdd] = useState(false);
  const [name, setName] = useState(patient.name);
  const [mail, setMail] = useState(patient.mail);
  const [pass, setPass] = useState(patient.password);
  const [cpass, setCpass] = useState(patient.password);
  const [num, setNum] = useState(patient.mobile);
  const [dob, setDob] = useState(patient.dob);
  const [gen, setGen] = useState(patient.gender);
  const [bg, setBg] = useState(patient.bloodgroup);
  const [addr, setAddr] = useState(patient.address);
  const [state, setState] = useState(patient.state);
  const [city, setCity] = useState(patient.city);
  const [pin, setPin] = useState(patient.pin);
  const [err, setErr] = useState('');
  const [search, setSearch] = useState('');

  const [patientname, setPatientName] = useState('');
  const [patientpass, setPatientPass] = useState('');
  const [patientmail, setPatientMail] = useState('');
  const [patientmobile, setPatientMobile] = useState('');
  const [patientdob, setPatientDob] = useState('');
  const [patientgender, setPatientGender] = useState('');
  const [patientbloodgroup, setPatientBloodgroup] = useState('');
  const [patientaddress, setPatientAddress] = useState('');
  const [patientstate, setPatientState] = useState('');
  const [patientcity, setPatientCity] = useState('');
  const [patientpin, setPatientPin] = useState('');

  useEffect(() => {
    setPatientName(patient.name);
    setPatientPass(patient.password);
    setPatientMail(patient.mail);
    setPatientMobile(patient.mobile);
    setPatientDob(patient.dob);
    setPatientGender(patient.gender);
    setPatientBloodgroup(patient.bloodgroup);
    setPatientAddress(patient.address);
    setPatientState(patient.state);
    setPatientCity(patient.city);
    setPatientPin(patient.pin);
  }, [patient]);

  function Fetch(e) {
    e.preventDefault();
    if (!name) return setErr("*Fill the name");
    if (name.length <= 3) return setErr("*Name Is Too Short");
    if (!pass) return setErr("password is empty");
    if (pass.length <= 4) return setErr("password should atleast 5 characters");
    if (!cpass) return setErr(" confirm password is empty");
    if (pass !== cpass) return setErr("password and confirm password are different");
    if (!mail) return setErr("*Fill the mail");
    if (!num) return setErr("*Fill the mobile number");
    if (!dob) return setErr("*Fill the date of birth");
    if (!gen) return setErr("*Fill the gender");
    if (!bg) return setErr("*Fill the blood group");
    if (!addr) return setErr("*Fill the address");
    if (!state) return setErr("*Fill the State");
    if (!city) return setErr("*Fill the City");
    if (!pin) return setErr("*Fill the PinCode");
    if (num.length > 10) return setErr("* Invalid Mobile Number");
    if (pin.length !== 6) return setErr("*Invalid PinCode");
    if (new Date(dob) > new Date()) return setErr("*Date Should not be greater than current ");
    if (!mail.includes('@') || mail.lastIndexOf('@') > mail.indexOf('.com')) return setErr("*Invalid Mail");
    if (patient) return alert("Already Have An Account!! ");
  }

  function Update(e) {
    e.preventDefault();
    const patientid = patient.id;
    if (!patientid) return alert("Update form empty");

    fetch('https://hospital-management-system-b06p.onrender.com/update-patient', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientid,
        patientname: name,
        patientpass: pass,
        patientmail: mail,
        patientmobile: num,
        patientdob: dob,
        patientgender: gen,
        patientbloodgroup: bg,
        patientaddress: addr,
        patientstate: state,
        patientcity: city,
        patientpin: pin
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Update response:", data);
        alert("Updated successfully!");
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <p className="  lg:ml-[-140px] text-2xl sm:text-3xl font-bold text-center">Profile</p><br />
      <div className="flex justify-center">
        <img className=" lg:ml-[340px] w-40 h-40 sm:w-52 sm:h-52 border-2 rounded-full" src="pat.png" alt="Patient" />
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="mx-auto w-full sm:w-[300px]">
          <tbody>
            <tr><td className="font-semibold p-2">Id</td><td>{patient.id}</td></tr>
            <tr><td className="font-semibold p-2">Name</td><td>{patient.name}</td></tr>
            <tr><td className="font-semibold p-2">Mail</td><td>{patient.mail}</td></tr>
            <tr><td className="font-semibold p-2">Mobile</td><td>{patient.mobile}</td></tr>
            <tr><td className="font-semibold p-2">DOB</td><td>{patient.dob}</td></tr>
            <tr><td className="font-semibold p-2">Gender</td><td>{patient.gender}</td></tr>
            <tr><td className="font-semibold p-2">Address</td><td>{patient.address}</td></tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="flex justify-center gap-4">
        <button onClick={() => setAdd(true)} className="lg:ml-[290px] w-full sm:w-[300px] h-9 bg-yellow-400 rounded-lg">Update</button>
      </div>
      <br /><br />

      {add && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-full sm:w-[900px] max-h-[90vh] overflow-y-auto bg-gray-100 rounded-2xl p-4">
          <p className="text-2xl sm:text-3xl font-bold text-center text-green-700">
            Patient <span className="text-red-700">Details</span>
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold mt-4">
            <div className="flex flex-col">
              <label>Patient Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Patient Name..." required className="p-2 rounded border" />
            </div>
            <div className="flex flex-col">
              <label>Patient Mail</label>
              <input value={mail} onChange={(e) => setMail(e.target.value)} type="email" placeholder="Patient Mail..." required className="p-2 rounded border" />
            </div>
            <div className="flex flex-col">
              <label>Change Password</label>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password..." required className="p-2 rounded border" />
            </div>
            <div className="flex flex-col">
              <label>Confirm Password</label>
              <input value={cpass} onChange={(e) => setCpass(e.target.value)} type="password" placeholder="Confirm Password..." required className="p-2 rounded border" />
            </div>

            <div className="flex flex-col">
              <label>Phone Number</label>
              <input value={num} onChange={(e) => setNum(e.target.value)} type="number" placeholder="Patient Number..." required className="p-2 rounded border" />
            </div>
            <div className="flex flex-col">
              <label>Date Of Birth</label>
              <input value={dob} onChange={(e) => setDob(e.target.value)} type="date" required className="p-2 rounded border" />
            </div>

            <div className='mt-4 ml-8'>
  <label>Gender</label>
  <br /><br />
  <div className='flex'>
    <input
      value="male"
      checked={gen === "male"}
      onChange={(e) => setGen(e.target.value)}
      className='gender'
      type="radio"
      id='male'
      name="genders"
      required
    />
    <label htmlFor='male'>Male</label>
  </div>

  <div className='flex'>
    <input
      value="female"
      checked={gen === "female"}
      onChange={(e) => setGen(e.target.value)}
      className='gender'
      type="radio"
      id='female'
      name="genders"
      required
    />
    <label htmlFor='female'>Female</label>
  </div>

  <div className='flex'>
    <input
      value="others"
      checked={gen === "others"}
      onChange={(e) => setGen(e.target.value)}
      className='gender'
      type="radio"
      id='others'
      name="genders"
      required
    />
    <label htmlFor='others'>Others</label>
  </div>
</div>


            <div className="flex flex-col">
              <label>Blood Group</label>
              <select value={bg} onChange={(e) => setBg(e.target.value)} className="h-12 w-full sm:w-[350px] rounded-2xl shadow-lg text-red-500">
                <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>Address</label>
              <input value={addr} onChange={(e) => setAddr(e.target.value)} type="text" placeholder="Patient Address..." required className="p-2 rounded border" />
            </div>

            <div className="flex flex-col">
              <label>State</label><br></br>
              <input value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder="Patient State..." required className="p-2 rounded border" />
            </div>

            <div className="flex flex-col">
              <label>City</label><br></br>
              <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Patient City..." required className="p-2 rounded border" />
            </div>

            <div className="flex flex-col">
              <label>Pincode</label>
              <input value={pin} onChange={(e) => setPin(e.target.value)} type="number" placeholder="Patient Pincode..." required className="p-2 rounded border" />
            </div>
          </form>

          <p className="mt-4 text-center text-red-600">{err}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <button onClick={Update} className="w-full sm:w-[350px] h-10 bg-green-600 rounded-lg font-bold">Update</button> 
            <button onClick={() => setAdd(false)} className="lg:ml-[86px] mt-4 w-full sm:w-[350px] h-10 bg-red-600 rounded-lg font-bold">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
