import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Landing from "./Landing"
import Contact from "./Contact"
import About from "./About"



function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
