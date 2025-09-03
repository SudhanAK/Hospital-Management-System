import React, { useState,useEffect } from 'react'
 
function reception() {
  const [ add, setAdd]=useState(false)
  const [name,setName]=useState('');
    const [mail,setMail]=useState('');
    const [pass,setPass]=useState('') ;
        const [cpass,setCpass]=useState('') 

    const [num,setNum]=useState('');
    const [dob,setDob]=useState('');             
    const [gen,setGen]=useState('');
     const [addr,setAddr]=useState('');
    const [state,setState]=useState('');
    const [city,setCity]=useState('');
    const [pin,setPin]=useState('');
    const [err,setErr]=useState('');
    const [search,setSearch]=useState('');
    const[reception,setReception]=useState('')
    const[allreception,setAllreception]=useState([])
    const [sname,setSname]=useState(null)
    console.log(sname)
    useEffect(()=>{
     async function  data1(){
    const result= await fetch('http://localhost:3000/all-reception',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({})
    })
     
    .catch((err)=>console.log(err))
     const data1=await result.json()
     setAllreception(Array.isArray(data1) ? data1 : []);}
     
     data1()


  },[])
  console.log(allreception)
  useEffect(()=>{
     async function  data(){
    const res= await fetch('http://localhost:3000/show-reception',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name:sname})
    })
     
    .catch((err)=>console.log(err))
     const data=await res.json()
    setReception(data || {});}
    data()


  },[sname])
   
  const [receptionname,setReceptionName]=useState('')
  const [receptionpass,setReceptionPass]=useState('')
   const [receptionmail,setReceptionMail]=useState('')
  const [receptionmobile,setReceptionMobile]=useState('')
  const [receptiondob,setReceptionDob]=useState('')
  const [receptiongender,setReceptionGender]=useState('')
  
  const [receptionaddress,setReceptionAddress]=useState('')
  const [receptionstate,setReceptionState]=useState('')
  const [receptioncity,setReceptionCity]=useState('')
  const [receptionpin,setReceptionPin]=useState('')
  useEffect(()=>{
     
    setReceptionName(reception.name)
    setReceptionPass(reception.password)
    setReceptionMail(reception.mail)
    setReceptionMobile(reception.mobile)
    setReceptionDob(reception.dob)
    setReceptionGender(reception.gender)
    
    setReceptionAddress(reception.address)
    setReceptionState(reception.state)
    setReceptionCity(reception.city)
    setReceptionPin(reception.pin)
     
  },[reception])
 
    function Fetch(e){
        e.preventDefault();
        
         if(name.length==''){
            return setErr("*Fill the name")
        }
        if(name.length<=3 ){
           return setErr("*Name Is Too Short")
            
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
        if(mail.length==''){
            return setErr("*Fill the mail")
        }
        if(num.length==''){
            return setErr("*Fill the mobile number")
        }
        if(dob.length==''){
            return setErr("*Fill the date of birth")
        } 
         if(gen.length==''){
            return setErr("*Fill the gender")
        }  
        if(bg.length==''){
            return setErr("*Fill the blood group")
        } 
        if(addr.length==''){
            return setErr("*Fill the address")
        } 
        if(state.length==''){
            return setErr("*Fill the State")
        }
        if(city.length==''){
            return setErr("*Fill the City")
        }
        if(pin.length==''){
            return setErr("*Fill the PinCode")
        }
         
        
         
         
        if(num.length>10){
            return setErr("* Invalid Mobile Number")
        }
        if(pin.length!=6){
             return setErr("*Invalid PinCode")
        }
        if( (new Date(dob))>(new Date())){
            return setErr("*Date Should not be greater than current ")
        }
        if(!(mail.includes('@')) || mail.lastIndexOf('@') > mail.indexOf('.com')){
            return setErr("*Invalid Mail")

        }
        

        fetch('http://localhost:3000/add-reception',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,pass,mail,num,dob,gen,addr,state,city,pin})
           
        })
        .then((response)=>response.text())
        .then((data)=>alert("submitted"))
        .then((err)=>console.log(err))
    }
    function Update(e){
      e.preventDefault();
      const receptionid=reception.id;
      if(!receptionid){return alert("Update form empty")}
      fetch('http://localhost:3000/update-reception',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({receptionid,receptionname,receptionpass,receptionmail,receptionmobile,receptiondob,receptiongender,receptionaddress,receptionstate,receptioncity,receptionpin})
           
        })
      .then((response)=>response.json())  
      .then((data)=>alert("Updated...")) 
      .catch((err)=>console.log(err)) 
    }
    function Delete(e){
      e.preventDefault();
      const receptionid=reception.id;
      if(!receptionid){return alert("Update form empty")}
      fetch('http://localhost:3000/delete-reception',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({receptionid})
           
        })
      .then((response)=>response.json())  
      .then((data)=>alert("Deleted...")) 
      .catch((err)=>console.log(err)) 
    }

   return (
    <div className='relative top-0 left-0 '>
       
      <div className='grid grid-flow-col auto-cols-max gap-4 items-center ' >
            <button onClick={()=>setAdd(true)} className=' grid grid-cols-[auto_1fr] gap-4 items-center  rounded-lg px-[20px] py-3 bg-green-600 font-bold  text-lg hover:bg-green-800 hover:text-gray-100 transition duration-200 ease-in-out'>
              <img className='w-[30px] h-[30px]' src='patient.png'alt=''></img><p>Add Reception</p>
            </button>
             <p className='font-bold text-2xl'>Search</p>
            <select className='w-[200px] h-[30px] border-2 rounded-lg text-xl' onChange={(e)=>setSname(e.target.value)}>
            {allreception.map((r,index)=>(<option key={index} value={r.name}>{r.name}-{r.id}</option>))}
            </select>
            

            
            
      </div> 
      <div>
        <br></br>
        <p className='text-2xl font-semibold'>Reception List</p>
  <table className="w-[900px] h-auto border-collapse shadow-lg rounded-xl overflow-hidden mt-4">
  <thead className="bg-green-700 text-white h-[50px]">
    <tr>
      <th className="px-4 py-2 ">Field</th>
      <th className="px-4 py-2">Data</th>
       
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    <tr>
        <td className="px-4 py-3   font-semibold">Reception id</td>
        <td className="px-4 py-3  " ><p>{reception.id}</p></td>
    </tr>   
    <tr>
        <td className="px-4 py-3   font-semibold">Reception Name</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionName(e.target.value)}  value={receptionname} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Reception Password</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionPass(e.target.value)}  value={receptionpass} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Reception Mail</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionMail(e.target.value)}  value={receptionmail} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Reception Mobile</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionMobile(e.target.value)}  value={receptionmobile} type="text"></input></td>
    </tr>
    <tr>
        <td className="px-4 py-3   font-semibold">Reception DOB</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionDob(e.target.value)}  value={receptiondob} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3  font-semibold">Reception Gender</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionGender(e.target.value)}  value={receptiongender} type="text"></input></td>
    </tr>
    
     
    <tr>
        <td className="px-4 py-3   font-semibold">Reception Address</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionAddress(e.target.value)}  value={receptionaddress} type="text"></input></td>
    </tr>  
    <tr>
        <td className="px-4 py-3   font-semibold">Reception State</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionState(e.target.value)}  value={receptionstate} type="text"></input></td>
    </tr> 
    <tr>
        <td className="px-4 py-3   font-semibold">Reception City</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionCity(e.target.value)}  value={receptioncity} type="text"></input></td>
    </tr>
    <tr>
        <td className="px-4 py-3   font-semibold">Reception Pin</td>
        <td className="px-4 py-3  " ><input className='shadow h-auto border-0' onChange={(e)=>setReceptionPin(e.target.value)}  value={receptionpin} type="text"></input></td>
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
    <p className='text-2xl font-bold text-center mt-[10px] text-green-700'>Patient <span className='text-red-700'>Details</span></p>
    
    <form className='grid grid-cols-2 font-semibold'>
      
      <div className='mt-4 ml-8'>
        <label>Reception Name</label>
        <br /><br />
        <input onChange={(e)=>setName(e.target.value)}  type="text" placeholder='Patient Name...' required />
      </div>

      <div className='mt-4 ml-8'>
        <label>Reception Mail</label>
        <br /><br />
        <input onChange={(e)=>setMail(e.target.value)} type="email" placeholder='Patient Mail...' required />
      </div>
      <div className='mt-4 ml-8'>
        <label>Password</label>
        <br /><br />
        <input onChange={(e)=>setPass(e.target.value)}  type="password" placeholder='Password...' required />
      </div>
      <div className='mt-4 ml-8'>
        <label>Confirm Password</label>
        <br /><br />
        <input onChange={(e)=>setCpass(e.target.value)}  type="password" placeholder='Confirm Password...' required />
      </div>

      <div className='mt-4 ml-8'>
        <label>Phone Number</label>
        <br /><br />
        <input onChange={(e)=>setNum(e.target.value)} type="number" placeholder='Patient Number...' required />
      </div>

      <div className='mt-4 ml-8'>
        <label>Date Of Birth</label>
        <br /><br />
        <input onChange={(e)=>setDob(e.target.value)}  type="date" required />
      </div> 

      <div className='mt-4 ml-8'>
        <label>Gender</label>
        <br /><br />
        <div className='flex'> 
          <input onChange={(e)=>setGen(e.target.value)} value="male" className='gender' type="radio" id='male' name="genders" required />
          <label htmlFor='male'>Male</label>
        </div>
        <div className='flex'>
          <input onChange={(e)=>setGen(e.target.value)} value="female" className='gender' type="radio" id='female' name="genders" required />
          <label htmlFor='female'>Female</label>
        </div>
        <div className='flex'>
          <input onChange={(e)=>setGen(e.target.value)} value="other" className='gender' type="radio" id='others' name="genders" required />
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
        <label >City</label>
        <br /><br />
        <input onChange={(e)=>setCity(e.target.value)} type="text" placeholder='Patient City...' required />
      </div>   

      <div className=' mt-4 ml-8'>
        <label>Pincode</label>
        <br /><br />
        <input onChange={(e)=>setPin(e.target.value)}type="number" placeholder='Patient Pincode...' required />
      </div>  
      
    </form>
    
  </div>
  <br></br>
  <p style={{marginTop:"20px",textAlign:"center",  color:"red" }}>{err}</p>

  <br></br>
  <button onClick={Fetch} className='mt-4 ml-8 mb-4 w-[350px]  rounded-lg h-[40px]   bg-green-600 font-bold' type="submit">Submit</button> 
      <button  onClick={()=>setAdd(false)}className='mt-4 ml-8 mb-4 w-[350px]  rounded-lg h-[40px]   bg-red-600 font-bold' type="submit">Cancel</button> 

</div>)}


     </div>
  )
}

export default reception
