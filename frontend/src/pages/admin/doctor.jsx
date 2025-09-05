import React, { useState ,useEffect} from 'react'
 function doctor() {
       const [ add, setAdd]=useState(false);
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
      const [search,setSearch]=useState('');
      const [alldoctor,setAlldoctor]=useState([])
      const [doctor,setDoctor]=useState('');
      const [sname,setSname]=useState(null)
      useEffect(()=>{
     async function  data1(){
    const result= await fetch('https://hospital-management-system-b06p.onrender.com/all-doctor',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({})
    })
     
    .catch((err)=>console.log(err))
     const data1=await result.json()
     setAlldoctor(Array.isArray(data1) ? data1 : []);}
     
     data1()


  },[])
  console.log(alldoctor)
  useEffect(()=>{
     async function  data(){
    const res= await fetch('https://hospital-management-system-b06p.onrender.com/show-doctor',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name:sname})
    })
     
    .catch((err)=>console.log(err))
     const data=await res.json()
    setDoctor(data || {});}
    data()


  },[sname])
  const [doctorname,setDoctorName]=useState('')
  const [doctorpass,setDoctorPass]=useState('')
  const [doctorqual,setDoctorQual]=useState('')
  const [doctorspecial,setDoctorSpecial]=useState('')
  const [doctorexp,setDoctorExp]=useState('')
   const [doctormail,setDoctorMail]=useState('')
  const [doctormobile,setDoctorMobile]=useState('')
  const [doctordob,setDoctorDob]=useState('')
  const [doctorgender,setDoctorGender]=useState('')
   const [doctoraddress,setDoctorAddress]=useState('')
  const [doctorstate,setDoctorState]=useState('')
  const [doctorcity,setDoctorCity]=useState('')
  const [doctorpin,setDoctorPin]=useState('')
  useEffect(()=>{
     
    setDoctorName(doctor.name)
    setDoctorPass(doctor.password)
    setDoctorQual(doctor.qualification)
    setDoctorSpecial(doctor.specialization)
    setDoctorExp(doctor.experience)
    setDoctorMail(doctor.mail)
    setDoctorMobile(doctor.mobile)
    setDoctorDob(doctor.dob)
    setDoctorGender(doctor.gender)
    setDoctorAddress(doctor.address)
    setDoctorState(doctor.state)
    setDoctorCity(doctor.city)
    setDoctorPin(doctor.pin)
     
  },[doctor])


   

  function Fetch(e){
    e.preventDefault();
    if(name.length==''){
       return setErr("Fill the Name")
    }
    if(!pass){
          return setErr("password is empty")
        } 
        if(pass.length<=4){
          return setErr("password should atleast 5 characters")
        }
        if(!cpass){
          return setErr(" confirm password is empty")
        } 
        
        if(pass!=cpass) {
          return setErr("password and confirm password are different");
        }
    if(qual.length==''){
        return setErr("Fill the qualification")
    } 
    if(exp.length==''){
        return setErr("Fill the Experience")
    }
    if(mail.length==''){
        return setErr("Fill the Mail")
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
  
    if(pin.length!=6){
      return setErr("*Invalid PinCode")
    }
    if(new Date(dob)>(new Date())){
      return setErr("*Invalid DOB")
    }
    fetch('https://hospital-management-system-b06p.onrender.com/add-doctor',
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,qual,pass,special,exp,mail,num,dob,gen,addr,state,city,pin})
      }
    )
    .then((response)=>response.text())
    .then((data)=>alert("submitted"))
    .then((err)=>alert(err))
  }
  function Update(e){
      e.preventDefault();
      const doctorid=doctor.id;
      if(!doctorid){return alert("Delete form empty")}
      fetch('https://hospital-management-system-b06p.onrender.com/update-doctor',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({doctorid,doctorname,doctorpass,doctorspecial,doctorqual,doctorexp,doctormail,doctormobile,doctorgender,doctoraddress,doctorstate,doctorcity,doctorpin})
           
        })
      .then((response)=>response.json())  
      .then((data)=>alert("Updated...")) 
      .catch((err)=>console.log(err)) 
    }
    function Delete(e){
      e.preventDefault();
      const doctorid=doctor.id;
      if(!doctorid){return alert("Delete form empty")}
      fetch('https://hospital-management-system-b06p.onrender.com/delete-doctor',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({doctorid})
           
        })
      .then((response)=>response.json())  
      .then((data)=>alert("Deleted...")) 
      .catch((err)=>console.log(err)) 
    }

  return (
    <div className='relative top-0 left-0 '>
       
      <div className='grid grid-flow-col auto-cols-max gap-4 items-center ' >
            <button onClick={()=>setAdd(true)} className=' grid grid-cols-[auto_1fr] gap-4 items-center  rounded-lg px-[20px] py-3 bg-green-600 font-bold  text-lg hover:bg-green-800 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='medical-assistance.png'alt=''></img><p>Add Doctor</p>
            </button>
             <p className='font-bold text-2xl'>SEARCH:</p>
            <select className='w-[200px] h-[30px] border-2 rounded-lg text-xl' onChange={(e)=>setSname(e.target.value)}>
            {alldoctor.map((d,index)=>(<option key={index} value={d.name}>{d.name}-{d.id}</option>))}
            </select>
            

            
            
      </div> 
      <div>
        <br></br>
        <p className='text-2xl font-semibold'>Doctor List</p>
        <table className="w-[900px] h-auto border-collapse shadow-lg rounded-xl overflow-hidden mt-4">
  <thead className="bg-green-700 text-white h-[50px]">
    <tr>
      <th className="px-4 py-2 ">Field</th>
      <th className="px-4 py-2">Data</th>
       
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor id</td>
        <td className="px-4 py-3  " ><p>{doctor.id}</p></td>
    </tr>   
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Name</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorName(e.target.value)}  value={doctorname} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Password</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorPass(e.target.value)}  value={doctorpass} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Qualification</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorQual(e.target.value)}  value={doctorqual} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Specialization</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorSpecial(e.target.value)}  value={doctorspecial} type="text"></input></td>
    </tr>
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Experience</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorExp(e.target.value)}  value={doctorexp} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3  font-semibold">Doctor Mail</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorMail(e.target.value)}  value={doctormail} type="text"></input></td>
    </tr>
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Mobile</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorMobile(e.target.value)}  value={doctormobile} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Dob</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorDob(e.target.value)}  value={doctordob} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Gender</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorGender(e.target.value)}  value={doctorgender} type="text"></input></td>
    </tr> 
     
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Address</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorAddress(e.target.value)}  value={doctoraddress} type="text"></input></td>
    </tr>  
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor State</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorState(e.target.value)}  value={doctorstate} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor City</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorCity(e.target.value)}  value={doctorcity} type="text"></input></td>
    </tr>
    <tr>
        <td className="px-4 py-3   font-semibold">Doctor Pin</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setDoctorPin(e.target.value)}  value={doctorpin} type="text"></input></td>
    </tr>
    <tr>
        <td><button   type="submit" onClick={Update} className='bg-yellow-400 w-[300px] h-[40px] rounded-xl'>Update</button></td>
        <td><button onClick={Delete} className='bg-red-500 w-[300px] h-[40px] rounded-lg'>Delete</button></td>
    </tr>                         
         
       
    
  </tbody>
</table>

      </div>
      {add&&(<div className='absolute top-[20px] left-[90px] w-[900px] h-[500px] bg-gray-100 rounded-2xl overflow-x-auto'>
  <div>
    <p className='text-2xl font-bold text-center mt-[10px] text-green-700'>Doctor <span className='text-red-700'>Details</span></p>
    
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
        <label>Password</label>
        <br /><br />
        <input onChange={(e)=>setPass(e.target.value)} type="password" placeholder='Password...' required />
      </div>
      <div className='mt-4 ml-8'>
        <label>Confirm Password</label>
        <br /><br />
        <input onChange={(e)=>setCpass(e.target.value)} type="password" placeholder='Confirm Password...' required />
      </div>
      <div className='mt-4 ml-8  '> 
        <label>Specialization</label>
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
  <button onClick={Fetch} className='mt-6 ml-8 mb-4 w-[350px]  rounded-lg h-[40px]   bg-green-600 font-bold' type="submit">Submit</button> 
  <button  onClick={()=>{setAdd(false)}} className='mt-4 ml-[90px] mb-4 w-[350px]  rounded-lg h-[40px]   bg-red-600 font-bold' type="submit">Cancel</button> 
</div>)}


     </div>
  )
}

export default doctor
