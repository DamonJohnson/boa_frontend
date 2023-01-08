import React from "react"

const Contact = () => {
  function submitEmail(event) {
    emailjs.init("YOUR_PUBLIC_KEY")
  }

  return (
    <>
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary">
            Contact Us
          </h2>
          <p className="mb-2 lg:mb-16 text-center text-secondary">
            If you would like to know more about products or
            offer some feedback send us a message to get in touch.
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
                className="shadow-sm mb-6 bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="John"
                required
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
                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="Doe"
                required
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
                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@acme.com"
                required
              />
            </div>
            <div>
              <label
                for="mobile"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Your mobile
              </label>
              <input
                type="mobile"
                id="mobile"
                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5"
                placeholder="0412 345 678"
                required
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
                className="block p-3 w-full text-sm text-secondary bg-pale-grey rounded-lg border border-secondary shadow-sm focus:ring-secondary focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
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
                className="block p-2.5 w-full text-sm text-secondary bg-pale-grey rounded-lg shadow-sm border border-secondary focus:ring-secondary focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="py-3 px-10 text-sm font-medium text-center text-white rounded-lg  bg-secondary sm:w-fit  hover:ring-1"
              >
                Send message
              </button>
              <p className="text-secondary text-sm pt-10">You will not be subscribed to a recurring mail service by submitting this form</p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
