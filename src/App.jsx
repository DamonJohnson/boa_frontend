import { BrowserRouter, Routes, Route } from "react-router-dom"
import {StoreContextProvider} from "./context/StoreContext"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ShoppingCart from "./components/ShoppingCart"
import Landing from "./pages/Landing"
import Contact from "./pages/Contact"
import Store from "./pages/Store"
import Quote from "./pages/Quote"
import Success from "./pages/Success"
import Fail from "./pages/Fail"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import CheckoutUnavailable from "./pages/CheckoutUnavailable"

function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="checkout-unavailable" element={<CheckoutUnavailable />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StoreContextProvider>
  )
}

export default App
