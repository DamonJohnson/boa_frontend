import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserDetails from "./UserDetails"
import Orders from "./Orders"

const MyAccount = () => {
  return (
    <>
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary">
            My Details
                  </h1>
                  <UserDetails />
          <h2 className="mb-4 text-2xl tracking-tight text-center text-secondary">
            Coming Soon...
                  </h2>
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary">
            My Orders
                  </h1>
                  <Orders />
        </div>
        
        
      </section>
    </>
  )
}

export default MyAccount
