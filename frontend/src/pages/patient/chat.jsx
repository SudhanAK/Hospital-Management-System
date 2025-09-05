import React from 'react';
import { useState, useEffect } from 'react';

function Chat({ patient }) {
  const [name, setName] = useState(patient.name);
  const [id, setId] = useState(patient.id);
  const [message, setMsg] = useState('');
  const [reply, setReply] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    async function call() {
      const res = await fetch('https://hospital-management-system-b06p.onrender.com/reply-message', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: patient.id })
      });
      const data = await res.json();
      setReply(Array.isArray(data) ? data : []);
    }
    call();
  }, []);

  function Fetch(e) {
    e.preventDefault();
    fetch('https://hospital-management-system-b06p.onrender.com/add-message', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, message })
    })
      .then((response) => response.json())
      .then((data) => alert("Message Sent!"))
      .then((err) => console.log(err));
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <p className="   text-2xl sm:text-3xl font-bold text-center">
        Have questions, doubts, or feedback?<br /> Just send us a message!
      </p><br />

      <form className="flex flex-col items-center">
        <p className="lg:ml-[100px] text-lg sm:text-xl font-semibold mb-2">Message</p>
        <textarea
          onChange={(e) => setMsg(e.target.value)}
          className="lg:ml-[100px] border-2 border-gray-400 rounded-lg w-full sm:w-[750px] h-[200px] sm:h-[230px] shadow p-2 resize-none"
          placeholder="Type your message here...."
        ></textarea>
      </form>

      <p className="mt-4 text-center text-red-600 font-medium">{err}</p>
      <button
        onClick={Fetch}
        className="mt-4 mb-4 w-full sm:w-[350px] rounded-lg h-[40px] bg-green-600 font-bold block mx-auto"
        type="submit"
      >
        Submit
      </button>

      <div className="mt-6 space-y-6">
        {reply.map((re, index) => (
          <div key={index}>
            <p className="text-2xl sm:text-3xl font-bold text-center">Reply Messages</p><br />
            <div className="border-2 border-blue-100 bg-blue-100 h-auto w-full sm:w-[500px] px-4 sm:px-8 py-4 sm:py-8 rounded-lg mx-auto">
              <p className=" font-bold mb-2">Message: {re.message}</p>
              <p className="text-sm mb-2">{re.date.slice(0, 25)}</p>
              <p className="font-bold bg-blue-300 p-2 rounded-lg">Reply: {re.reply}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
