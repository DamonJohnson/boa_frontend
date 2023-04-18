import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    navigate("/message-sent")
    await submitContactForm(formData)
  }

  const submitContactForm = async (formData) => {
    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <>
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary">
            Contact Us
          </h2>
          <p className="mb-2 lg:mb-16 text-center text-secondary">
            If you would like to know more about our products or offer some
            feedback send us a message to get in touch.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                for="firstname"
                className="block mb-2 text-sm font-medium text-secondary w-full"
              >
                First name
              </label>
              <input
                type="firstname"
                id="firstname"
                className="shadow-sm mb-6 bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="John"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label
                for="lastname"
                className="block mb-2 text-sm font-medium text-secondary w-full"
              >
                Last name
              </label>
              <input
                type="lastname"
                id="lastname"
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="Doe"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@acme.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Your phone number
              </label>
              <input
                type="phone"
                id="phone"
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5"
                placeholder="0412 345 678"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm text-secondary font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-secondary bg-pale-grey rounded-md border  border-grey shadow-sm focus:ring-secondary focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-secondary "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-secondary bg-pale-grey rounded-md shadow-sm border  border-grey focus:ring-secondary focus:border-primary-500"
                placeholder="Leave a comment..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                className="py-3 px-10 text-sm font-medium text-center text-white rounded-md  bg-secondary sm:w-fit hover:ring-2"
              >
                Send message
              </button>
              <p className="text-secondary text-sm pt-10">
                You will not be subscribed to a recurring mail service by
                submitting this form
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
