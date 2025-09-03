import React from 'react'
import { useState } from 'react';
function settings() {
  const [name,setName]=useState('');
      const [pass,setPass]=useState('');
      const [cpass,setCpass]=useState('');
      const [qual,setQual]=useState('');
      const [mail,setMail]=useState('');
      const [special,setSpecial]=useState('');
      const [exp,setExp]=useState('');
      const [num,setNum]=useState('');
      const [dob,setDob]=useState('');             
      const [gen,setGen]=useState('');
      const [bg,setBg]=useState('');
      const [addr,setAddr]=useState('');
      const [state,setState]=useState('');
      const [city,setCity]=useState('');
      const [pin,setPin]=useState('');
      const [err,setErr]=useState('');
  function Fetch(e){
    e.preventDefault();
    if(name.length==''){
       return setErr("Fill the Name")
    }
    if(qual.length==''){
        return setErr("Fill the qualification")
    } 
    if(exp.length==''){
        return setErr("Fill the Experience")
    }
    if(pass.length==''){
        return setErr("Fill the password")
    }
    if(pass.length<=4){
      return setErr("Password length should be 5 characters")
    }
    if(pass!=cpass){
      return setErr("password and confirm password are different")
    }
    if(mail.length==''){
        return setErr("Fill the Mail")
    }
    if(mail.includes('@') && mail.lastIndexOf('@')>mail.indexOf('.com')){
      return setErr("invalid mail")
    }
    if(dob.length==''){
        return setErr("Fill the Date Of Birth")
    }
    if(gen.length==''){
        return setErr("Fill the Gender")
    }
    if(addr.length==''){
        return setErr("Fill the Address")
    }
    if(state.length==''){
        return setErr("Fill the State")
    }
    if(city.length==''){
        return setErr("Fill the City")
    }
    if(name.length<3 ){
      return setErr("*Name is Short")

    }
    if(special==''){
      return setErr("*Choose the Specialization")
    }
    if(   mail.lastIndexOf('@') > mail.indexOf('.com')){
      return setErr("*Invalid Mail")
    }
    if(   !mail.includes('@')){
      return setErr("*Invalid Mail")
    }
    if(num.length!=10){
      return setErr("*Invalid Mobile Number")
    }
    if(pin.length!=6){
      return setErr("*Invalid PinCode")
    }
    if(new Date(dob)>(new Date())){
      return setErr("*Invalid DOB")
    }
    fetch('http://localhost:3000/',
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,qual,special,exp,mail,num,dob,gen,addr,state,city,pin})
      }
    )
    .then((response)=>response.text())
    .then((data)=>alert("submitted"))
    .then((err)=>alert(err))
  }
  return (
    <div >
      <p className=' grid gap-4 text-2xl font-bold ml-300'>Settings</p><br></br>
      
      <img className=' ml-[400px] w-[200px] h-[200px] border-2 rounded-[100px] ' src="doc.jpg"></img> <br></br>
            <p className='text-xl text-yellow-700 font-bold text-center ml-[-130px]' >Doctor: <span className='text-black'>Sudhan</span></p>

      <div className='absolute top-[350px] left-[90px] w-[900px] h-[500px] bg-gray-100 rounded-2xl overflow-x-auto'>
  <div>
    <p className='text-2xl font-bold text-center mt-[10px] text-green-700'><span className='text-black '>Edit </span>Doctor <span className='text-red-700'>Details</span></p>
    
    <form className='font-semibold grid grid-cols-2'>
      
      <div className='mt-4 ml-8'>
        <label>Doctor Name</label>
        <br /><br />
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Doctor Name...' required />
      </div>
            <div className='mt-4 ml-8'>
        <label>Doctor Qualification</label>
        <br /><br />
        <input onChange={(e)=>setQual(e.target.value)} type="text" placeholder='Doctor Qualification...' required />
      </div>
      <div className='mt-4 ml-8'>
        <label>Change Password</label>
        <br /><br />
        <input onChange={(e)=>setPass(e.target.value)} type="text" placeholder='Password...' required />
      </div>
      <div className='mt-4 ml-8'>
        <label>Confirm Password</label>
        <br /><br />
        <input onChange={(e)=>setCpass(e.target.value)} type="text" placeholder='Password...' required />
      </div>
      <div className='mt-4 ml-8  '> 
        <label>Specalization</label>
        <br /><br />
        <select onChange={(e)=>setSpecial(e.target.value)} className='h-[50px] w-[350px] rounded-2xl shadow-lg text-red-500' required>
          <option>- - -</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Orthopedics</option>
          <option>Pediatrics</option>
          <option>Dermatology</option>
          <option>Ophthalmology</option>
          <option>Urology </option>
          <option>Pulmonology </option>
        </select>
      </div>
      <div className='mt-4 ml-8'>
        <label>Experience </label>
        <br /><br />
        <input onChange={(e)=>setExp(e.target.value)} type="number" placeholder='Years Of Experience...' required />
      </div>  
      <div className='mt-4 ml-8'>
        <label>Doctor Mail</label>
        <br /><br />
        <input onChange={(e)=>setMail(e.target.value)} type="email" placeholder='Doctor Mail...' required />
      </div>

      <div className='mt-4 ml-8'>
        <label>Phone Number</label>
        <br /><br />
        <input onChange={(e)=>setNum(e.target.value)} type="tel" placeholder='Doctor Number...' required />
      </div>

      <div className='mt-4 ml-8'>
        <label>Date Of Birth</label>
        <br /><br />
        <input onChange={(e)=>setDob(e.target.value)}type="date" required />
      </div> 

      <div className='mt-4 ml-8'>
        <label>Gender</label>
        <br /><br />
        <div className='flex'> 
          <input onChange={(e)=>setGen(e.target.value)} className='gender' type="radio" id='male' name="genders" value="male" required />
          <label htmlFor='male'>Male</label>
        </div>
        <div className='flex'>
          <input onChange={(e)=>setGen(e.target.value)} className='gender' type="radio" id='female' name="genders" value="female" required />
          <label htmlFor='female'>Female</label>
        </div>
        <div className='flex'>
          <input onChange={(e)=>setGen(e.target.value)} className='gender' type="radio" id='others' name="genders" value="other" required />
          <label htmlFor='others'>Others</label>
        </div>
      </div>

      

      <div className='mt-4 ml-8'>
        <label>Address</label>
        <br /><br />
        <input onChange={(e)=>setAddr(e.target.value)} type="text" placeholder='Patient Address...' required />
      </div>

      <div className='mt-4 ml-8'>
        <label>State</label>
        <br /><br />
        <input onChange={(e)=>setState(e.target.value)} type="text" placeholder='Patient State...' required />
      </div> 

      <div className=' mt-4 ml-8'>
        <label>City</label>
        <br /><br />
        <input onChange={(e)=>setCity(e.target.value)} type="text" placeholder='Patient City...' required />
      </div>   

      <div className=' mt-4 ml-8'>
        <label>Pincode</label>
        <br /><br />
        <input onChange={(e)=>setPin(e.target.value)} type="number" placeholder='Patient Pincode...' required />
      </div>  
       
      

    </form>
    
  </div>
  <p className='text-center font-semibold text-lg text-red-500 mt-4'>{err}</p>
  <button onClick={Fetch}   className='mt-6 ml-8 mb-4 w-[350px]  rounded-lg h-[40px]   bg-green-600 font-bold' type="submit">Submit</button> 
  <button   className='mt-4 ml-[90px] mb-4 w-[350px]  rounded-lg h-[40px]   bg-red-600 font-bold' type="submit">Cancel</button> 
</div>
 
    </div>
  )
}

export default settings
