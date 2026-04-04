import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from "./components/Hero"
import ResortDetails from "./components/ResortDetails"
import Resort2 from './components/Resort2'
import Resort3 from './components/Resort3'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/resort" element={<ResortDetails />} />
        <Route path="/resort2" element={<Resort2 />} />
        <Route path="/resort3" element={<Resort3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App