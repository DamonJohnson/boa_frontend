import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./Landing"
import NavbarLanding from "./NavbarLanding"



function App() {
 
  return (
    <BrowserRouter>
      <NavbarLanding/>
      <Routes>

      </Routes>
    </BrowserRouter>
  )
}

export default App
