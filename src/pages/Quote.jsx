import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Quote = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [products, setProducts] = useState("")
  const [requirements, setRequirements] = useState("")
  const formData = {
    firstName: firstName,
    lastName: lastName,
    company: company,
    email: email,
    phone: phone,
    products: products,
    requirements: requirements,
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await submitQuoteForm(formData);
      navigate("/message-sent");
    } catch (error) {
      console.error("Form submission error:", error);
      navigate("/contact-unavailable");
    }
  };

const submitQuoteForm = async (formData) => {
  const response = await fetch(process.env.PROD_API_URL + "/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });
  if (!response.ok) {
    throw new Error(`Failed to submit quote form: ${response.statusText}`);
  }
};

  return (
    <>
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary">
            Request a Quote
          </h2>
          <p className="mb-2 lg:mb-16 text-center text-secondary">
           Submit the form below for an obligation free quote.
          </p>
          <form  className="space-y-8">
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
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Your company
              </label>
              <input
                id="company"
                className="shadow-sm bg-pale-grey border  border-grey text-secondary text-sm rounded-md focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                required
                onChange={(e) => setCompany(e.target.value)}
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
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="requirements"
                className="block mb-2 text-sm font-medium text-secondary "
              >
                Your Requirements
              </label>
              <textarea
                id="requirements"
                rows="6"
                className="block p-2.5 w-full text-sm text-secondary bg-pale-grey rounded-md shadow-sm border  border-grey focus:ring-secondary focus:border-primary-500"
                onChange={(e) => setRequirements(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                className="py-3 px-10 text-sm font-medium text-center text-white rounded-md  bg-secondary sm:w-fit hover:ring-2"
              >
                Send requirements
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

export default Quote