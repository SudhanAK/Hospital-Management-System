import React from 'react'
import {useState,useEffect} from 'react'
function chat() {
  const [name,setName]=useState('');
  const [id,setId]=useState('');
  const [message,setMsg]=useState([]);
  const [reply,setReply]=useState('')
  const [err,setErr]=useState('');

  useEffect(()=>{
    async function call(){  
    const res= await fetch('http://localhost:3000/get-message',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({})
           
    })
    const data= await res.json()
    setMsg(Array.isArray(data) ? data : [])

  }
  call()
  },[])
  console.log(message)
  function Fetch(e){
    e.preventDefault();
    fetch('http://localhost:3000/update-message',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id,reply})
           
    })
    .then((response)=>response.json())
    .then((data)=>alert("Reply Sent"))
    .catch((err)=>console.log(err))
     
  }
   
  return (
    <div>
      <p className='text-2xl font-bold'>Please Reply ASAP<br></br> </p> 
       <br></br>
      
  
      <br></br><br></br>
      
 <div>{message.map((msg) => (
    <div className=' mt-6 border-2 border-blue-100 bg-blue-100 h-auto w-[500px] px-8 py-8 rounded-lg'>
    <div   className="mb-6">

      <p className='font-semibold' >{msg.name} - {msg.id}</p>
      <p  className='text-sm'>{msg.date.slice(0,25)}</p>
      <p className='font-bold bg-blue-300 rounded-lg px-2 py-1 mt-2'>{msg.message}</p>

      <form 
        onSubmit={(e) => {
          e.preventDefault();
          }} 
        className="mt-4"
      >
        <p className='text-lg font-semibold'>Reply</p>
        <textarea
          onChange={(e) =>{setId(msg.id); setReply(e.target.value)}}
          className='border-2 border-gray-400 rounded-lg w-[450px] h-[130px] shadow p-2'
          placeholder='Type your message here...'
        />
        <button 
          onClick={(e)=>{Fetch(e)}}
           className='mt-4 w-[350px] rounded-lg h-[40px] bg-green-600 font-bold text-white'
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </div> 
  ))}
 </div>

  
    </div>
   )
}

export default chat
