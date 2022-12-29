import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Landing from "./Landing"
import Contact from "./Contact"
import Store from "./Store"
import Quote from "./Quote"
import Footer from "./Footer"


function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
