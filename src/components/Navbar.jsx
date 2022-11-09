import React from 'react'

const NavbarLanding = () => {
  return (
    
    <nav class="border-b-4 border-primary" style={
{background: "linear-gradient(90deg, rgba(38,36,61,1) 3%, rgba(26,48,62,1) 32%, rgba(9,86,145,1) 67%, rgba(0,28,31,1) 100%, rgba(78,117,72,1) 100%)"}}>
  <div class="container flex flex-wrap justify-between items-center mx-auto z-10">
    <a href="/" class="flex items-center">
        <img src="https://res.cloudinary.com/damonjohnson/image/upload/v1666511301/Boa/Green-transparent_llezws.png" class="mr-0 h-20 sm:h-20"alt="Boa Wraps Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-primary rounded-lg md:hidden hover:bg-gray focus:outline-none focus:ring-2 focus:gray :text-gray-400" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-slate-800 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li>
          <a href="/" class="block py-2 pr-4 pl-3 text-primary bg-blue-700 rounded md:bg-slate-800 md:text-primary md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/contact" class="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">Contact</a>
        </li>
        <li>
          <a href="/about" class="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">About</a>
        </li>
        <li>
          <a href="/store" class="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">Store</a>
        </li>
        <li>
          <a href="/my-account" class="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">My Account</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavbarLanding