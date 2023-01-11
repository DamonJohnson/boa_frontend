import { BrowserRouter, Routes, Route } from "react-router-dom"

import {StoreContextProvider} from "./context/StoreContext"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cart from "./components/Cart"

import Landing from "./pages/Landing"
import Contact from "./pages/Contact"
import Store from "./pages/Store"
import Quote from "./pages/Quote"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"

function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StoreContextProvider>
  )
}

export default App
