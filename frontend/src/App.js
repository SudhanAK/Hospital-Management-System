import React from 'react'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
