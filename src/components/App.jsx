import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing"
import NavbarLanding from "./NavbarLanding"



function App() {
 
  return (
    <BrowserRouter>
      <NavbarLanding />
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
