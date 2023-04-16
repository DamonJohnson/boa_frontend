import React from "react"
import { Link } from "react-router-dom"

const CheckoutUnavailable = () => {
  return (
    <div className="text-secondary py-8 lg:py-16  mx-auto max-w-screen-xl mb-52">
      <h2 className="mb-4 text-4xl font-extrabold text-center">
        Sorry! We are unable to fulfill this order right now.
      </h2>
      <body>
        <p className="pt-4 text-center px-8">
          Please{" "}
          <Link
            to="/contact"
            className="underline hover:text-primary "
            aria-current="page"
          >
            contact us
          </Link>{" "}
          to place your order and we will get in touch as soon as possible.{" "}
        </p>
      </body>
    </div>
  )
}

export default CheckoutUnavailable
