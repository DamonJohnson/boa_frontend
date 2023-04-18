import React from "react"
import { Link } from "react-router-dom"

const MessageSent = () => {
  return (
    <div className="text-secondary py-8 lg:py-16  mx-auto max-w-screen-xl mb-60">
      <h2 className="mb-4 text-4xl font-extrabold text-center">
        Thankyou
      </h2>
      <body>
        <p className="pt-4 text-center px-8">
         Your message has been submitted and we will get back to you as soon as possible.
        </p>
      </body>
    </div>
  )
}

export default MessageSent
