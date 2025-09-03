import React from 'react';

function Dashboard({ patient }) {
  return (
    <div className="p-4">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
        Welcome <span className="text-yellow-600">{patient.name}😊</span>!
      </p>
      <br />
      <div className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 rounded-2xl shadow-lg mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg">
          "Your Health, Our Priority"
        </h1>
        <p className="text-base sm:text-lg text-center mt-4 opacity-90">
          Access your records, appointments, and care with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 gap-4">
        <div className="hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 rounded-lg w-full sm:w-[300px] h-[80px] bg-gray-400">
          <p className="mt-1 ml-1 sm:ml-2 text-white font-bold">Blood Pressure</p>
          <img className="mt-[-27px] ml-auto sm:ml-[220px] h-[60px] w-[60px]" src="bp.png" alt="" />
          <p className="text-xl ml-3 sm:ml-[15px] mt-[-30px] text-white font-bold">120/80 mmHg</p>
        </div>
        <div className="hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 rounded-lg w-full sm:w-[300px] h-[80px] bg-gray-400">
          <p className="mt-1 ml-1 sm:ml-2 text-white font-bold">Sugar</p>
          <img className="mt-[-27px] ml-auto sm:ml-[220px] h-[60px] w-[60px]" src="sugar.png" alt="" />
          <p className="text-xl ml-3 sm:ml-[15px] mt-[-30px] text-white font-bold">95 mg/dL</p>
        </div>
        <div className="hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 rounded-lg w-full sm:w-[300px] h-[80px] bg-gray-400">
          <p className="mt-1 ml-1 sm:ml-2 text-white font-bold">Weight</p>
          <img className="mt-[-27px] ml-auto sm:ml-[220px] h-[60px] w-[60px]" src="weight.png" alt="" />
          <p className="text-xl ml-3 sm:ml-[15px] mt-[-30px] text-white font-bold">65kg</p>
        </div>
        <div className="hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 rounded-lg w-full sm:w-[300px] h-[80px] bg-gray-400">
          <p className="mt-1 ml-1 sm:ml-2 text-white font-bold">Height</p>
          <img className="mt-[-27px] ml-auto sm:ml-[220px] h-[60px] w-[60px]" src="height.png" alt="" />
          <p className="text-xl ml-3 sm:ml-[15px] mt-[-30px] text-white font-bold">164 cm</p>
        </div>
        <div className="hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 rounded-lg w-full sm:w-[300px] h-[80px] bg-gray-400">
          <p className="mt-1 ml-1 sm:ml-2 text-white font-bold">Oxygen</p>
          <img className="mt-[-27px] ml-auto sm:ml-[220px] h-[60px] w-[60px]" src="oxygen.png" alt="" />
          <p className="text-xl ml-3 sm:ml-[15px] mt-[-30px] text-white font-bold">95% - 100%</p>
        </div>
        <div className="hover:scale-105 transition duration-500 ease-in-out border text-xl bg-gradient-to-r from-green-600 to-teal-500 rounded-lg w-full sm:w-[300px] h-[80px] bg-gray-400">
          <p className="mt-1 ml-1 sm:ml-2 text-white font-bold">Temperature</p>
          <img className="mt-[-27px] ml-auto sm:ml-[220px] h-[60px] w-[60px]" src="temp.png" alt="" />
          <p className="text-xl ml-3 sm:ml-[15px] mt-[-30px] text-white font-bold">98.6 °F</p>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 items-center gap-4"></div>
    </div>
  );
}

export default Dashboard;
