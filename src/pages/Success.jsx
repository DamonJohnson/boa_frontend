import React from "react"

const Success = () => {
  return (
    <div className="text-secondary py-8 lg:py-16  mx-auto max-w-screen-xl mb-52">
      <h2 className="mb-4 text-4xl font-extrabold text-center">Thank you for your order! </h2>
      <body>
        <p className="pt-4 text-center px-8">
          We have received your request and are
          processing it as quickly as possible. You will receive an email from our team shortly.
          </p>
        <p className="pt-2 text-center px-8">
          We appreciate your business and thank you for choosing Boa Wraps!
        </p>
      </body>
    </div>
  )
}

export default Success
