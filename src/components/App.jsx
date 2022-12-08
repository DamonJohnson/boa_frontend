import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Landing from "./Landing"
import Contact from "./Contact"
import About from "./About"
import Products from "./Products"
import MyAccount from "./MyAccount"
import Login from "./Login"
import Registration from "./Registration"



function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
