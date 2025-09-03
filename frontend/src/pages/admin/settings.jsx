import React from 'react'
import { useState } from 'react'
function settings() {

  const [docname,setDocname]=useState('');
  const [docmail,setDocmail]=useState('');
  const [ pass ,setPass]=useState('');
  const [cpass,setCpass]=useState('');
  const [err,setErr]=useState('');

  function Fetch(e){
    e.preventDefault();
    if( docname.length<=4){
      return setErr("name should atleast 5 characters")
    }
    if(!docmail){
      return setErr("mail is empty")
    }
    if(!docmail.includes('@')){
      return setErr("invalid mail")
    }
    if( docmail.lastIndexOf('@')>recmail.indexOf('.com')){
      return setErr("invalid mail")
    }
    if(pass.length<=4){
      return setErr("password should atleast 5 characters")

    }
    if(pass!=cpass){
      return setErr("password and confirm password are different")
    }
    fetch('http://localhost:3000/',
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({docname,docmail,pass,cpass})
      }
    )
    .then((response)=>response.text())
    .then((data)=>alert("submitted"))
    .catch((err)=>console.log(err))
  }

  return (
    <div >
      <p className=' grid gap-4 text-2xl font-bold ml-300'>Settings</p><br></br>
      <img className=' ml-[380px] w-[200px] h-[200px] border-2 rounded-[100px] ' src="admin.jpg"></img> <br></br>
      <table className=' ml-[320px]'>
        <thead>
            <th> </th>
            <th> </th>    
                              
        </thead>
        <tbody>
            <tr> 
                <td>Update Name</td>
                <td> <form><input onChange={(e)=>setDocname(e.target.value)}  className="shadow w-[200px] h-[30px]"type="text"></input></form></td>
            </tr><br></br>
            <tr> 
                <td>Update Email</td>
                <td> <form><input onChange={(e)=>setDocmail(e.target.value)}  className="shadow w-[200px] h-[30px]"type="text"></input></form></td>
            </tr><br></br>
            <tr> 
                <td>Change Password</td>
                <td> <form><input onChange={(e)=>setPass(e.target.value)} className="shadow w-[200px] h-[30px]"type="text"></input></form></td>
            </tr><br></br>
            <tr> 
                <td>Confirm Password</td>
                <td> <form><input onChange={(e)=>setCpass(e.target.value)} className="shadow w-[200px] h-[30px]"type="text"></input></form></td>
            </tr>
        </tbody>
      </table>
      <p style={{marginTop:"20px",marginLeft:"-140px" ,textAlign:"center",  color:"red" }}>{err}</p>
      <button  onClick={Fetch} className='mt-4 ml-[321px] mb-4 w-[350px]  rounded-lg h-[40px]   bg-green-600 font-bold' type="submit">Submit</button> 

    </div>
  )
}

export default settings
