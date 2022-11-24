import React from 'react'

const Contact = () => {
    return (
      <>
    <section  className="bg-white">
  <div  className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2  className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blac">Contact Us</h2>
      <p  className="mb-8 lg:mb-16 font-light text-center text-black dark:text-black sm:text-xl">If you would like to know more about our products or services, or offer some feedback, please do not hesitate to get in touch.</p>
      <form action="#"  className="space-y-8">
          <div>
              <label for="name"  className="block mb-2 text-sm font-medium text-black dark:text-black">Your name</label>
              <input type="name" id="name"  className="shadow-sm bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required />
                        </div>
                        <div>
              <label for="email"  className="block mb-2 text-sm font-medium text-black dark:text-black">Your email</label>
              <input type="email" id="email"  className="shadow-sm bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                                  <div>
              <label for="mobile"  className="block mb-2 text-sm font-medium text-black dark:text-black">Your mobile</label>
              <input type="mobile" id="mobile"  className="shadow-sm bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="0412 345 678" required />
          </div>
          <div>
              <label for="subject"  className="block mb-2 text-sm font-medium text-black dark:text-black">Subject</label>
              <input type="text" id="subject"  className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div  className="sm:col-span-2">
              <label for="message"  className="block mb-2 text-sm font-medium text-black dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6"  className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit"  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
            </section>
        </>
    
  )
}

export default Contact