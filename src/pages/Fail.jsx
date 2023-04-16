import React from "react"
import { Link } from "react-router-dom"


const Fail = () => {
  return (
    <div className="text-secondary py-8 lg:py-16  mx-auto max-w-screen-xl mb-52">
      <h2 className="mb-4 text-4xl font-extrabold text-center">
        We're sorry, but your order could not be processed at this time{" "}
      </h2>
      <body>
        <p className="pt-4 text-center px-8">
          Please check your payment information and try again, or <Link to="/contact"  className="underline hover:text-primary " aria-current="page">contact us</Link> if
          you continue to experience issues.
        </p>
      </body>
    </div>
  )
}

export default Fail
