import React from "react"

const Registration = () => {
  return (
    <section>
      <div className="py-8 lg:py-16 px-2 mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary">
          Create your account
        </h2>
        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-secondary"     
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="firstname"
              className="block mb-2 text-sm font-medium text-secondary"
            >
              Firstname
            </label>
            <input
              type="firstname"
              id="firstname"
              className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
              placeholder="John"
              required
            />
          </div>
            <div>
              <label
                for="lastname"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Lastname
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
                for="phone"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Phone number
              </label>
              <input
                type="phone"
                id="phone"
                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="0464 342 951"
                required
              />
            </div>
            <div>
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Company name
              </label>
              <input
                type="company"
                id="company"
                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="Acme Corporation"
              />
            </div>
            <div>
              <label
                for="address"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Address
              </label>
              <input
                type="address"
                id="address"
                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="10 Adelaide Street"
                required
              />
            </div>
            <div>
              <label
                for="suburb"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Suburb
              </label>
              <input
                type="suburb"
                id="suburb"
                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="Brisbane City"
                required
              />
            </div>
            <div>
              <label
                for="state"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                State
              </label>
              <input
                type="state"
                id="state"
                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="Queensland"
                required
              />
            </div>
            <div>
              <label
                for="postcode"
                className="block mb-2 text-sm font-medium text-secondary"
              >
                Postcode
              </label>
              <input
                type="postcode"
                id="postcode"
                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                placeholder="4000"
                required
              />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-secondary"
            >
              Password (atleast 6 characters)
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
              placeholder="********"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-secondary"
            >
              Confirm Password
            </label>
            <input
              type="password-confirm"
              id="password-confirm"
              className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
              placeholder="********"
              required
            />
      </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="py-3 px-10 text-sm font-medium text-center text-white rounded-lg  bg-secondary sm:w-fit  hover:ring-1"
            >
              Create your account
            </button>
      </div>
        </form>
      </div>
    </section>
  )
}

export default Registration
