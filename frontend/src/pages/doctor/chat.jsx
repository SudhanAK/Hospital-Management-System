import React from 'react'

function chat() {
  return (
    <div>
      <p className='text-2xl font-bold'>Messages </p><br></br>
      <div className='border-2 border-blue-100 bg-blue-100 h-auto w-[500px] px-8 py-8 rounded-lg'>
        <p className='font-semibold' >Username:</p><br></br>
        <p className='font-semibold' >User id:</p><br></br>
        <p className='   font-bold bg-blue-300 h-auto w-auto rounded-lg'>Messages.......................</p><br></br>
        <form>
          <input className="h-[30px] w-[230px]"type="text"></input><button type='submit' className='border h-[30px] w-[50px] rounded-md shadow-lg   bg-green-600'>Reply</button>
        </form>
      </div>
  
    </div>
     
)}

export default chat
