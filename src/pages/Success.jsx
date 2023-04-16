import React from "react"

const Success = () => {
  return (
    <div className="text-secondary py-8 lg:py-16  mx-auto max-w-screen-xl mb-52">
      <h2 className="mb-4 text-4xl font-extrabold text-center">Thank you for your order! </h2>
      <body>
        <p className="pt-4 text-center px-8">
          We have received your request and are
          processing it as quickly as possible. You will receive a confirmation
          email with your order details shortly.
          </p>
        <p className="pt-2 text-center px-8">
          We appreciate your business and look forward to serving
          you again in the future. Thank you for choosing our company!
        </p>
      </body>
    </div>
  )
}

export default Success
