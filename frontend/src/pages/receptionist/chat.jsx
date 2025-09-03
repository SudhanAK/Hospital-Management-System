import React from 'react'

function chat() {
  return (
    <div>
      <p className='text-2xl font-bold'>Have questions, doubts, or feedback?<br></br> Just send us a message!</p><br></br>
      <form>
        <label className='text-lg font-semibold'>User Name</label>
        <input className='w-[150px] h-[30px] shadow ml-[30px] ' type="text"></input><br></br>
         
      </form><br></br>
      <form>
        <label className='text-lg font-semibold'>User Id</label>
        <input className='w-[150px] h-[30px] shadow ml-[30px] ' type="text"></input><br></br>
         
      </form><br></br>
      <form>
        <p className='text-lg font-semibold'>Message</p> 
        <textarea className=' border-2 border-gray-400 rounded-lg w-[750px] h-[230px] shadow    ' placeholder='Type your message here.... '></textarea><br></br>
         
      </form>
                      <button className='mt-4 ml-[201px] mb-4 w-[350px]  rounded-lg h-[40px]   bg-green-600 font-bold' type="submit">Submit</button> 

      <br></br><br></br>
      <p className='text-2xl font-bold'> Reply Messages </p><br></br>
      <div className='border-2 border-blue-100 bg-blue-100 h-auto w-[500px] px-8 py-8 rounded-lg'>
        <p className='font-semibold' >Username:</p><br></br>
        <p className='font-semibold' >User id:</p><br></br>
        <p className='   font-bold bg-blue-300 h-auto w-auto rounded-lg'>Messages.......................</p><br></br>
         
      </div>
  
    </div>
  )
}

export default chat
