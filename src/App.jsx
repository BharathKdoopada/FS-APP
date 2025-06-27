import { useState } from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
  <div className="h-[100dvh] w-full">
    <Routes>
    <Route
        path="/"
        element={<Home/>} />
      <Route
        path="/login"
        element={
          <div
            className="w-full h-full grid justify-center items-center"
            style={{ backgroundImage: "linear-gradient(to right, #DECBA499, #3E515199)" }}
          >
            <Login />
          </div>
        }
      />
    </Routes>
  </div>
</BrowserRouter>

  )
}

export default App
