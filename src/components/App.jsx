import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Landing from "./Landing"
import Contact from "./Contact"
import Products from "./Products"
import MyAccount from "./MyAccount"
import Footer from "./Footer"
import Login from "./Login"
import Registration from "./Registration"
import Product1 from "./Products/Product1"
import Product2 from "./Products/Product2"
import Product3 from "./Products/Product3"
import Product4 from "./Products/Product4"


function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/product4" element={<Product4 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
