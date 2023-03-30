import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";


const Nav = () => {
  
  const { cartQuantity, totalCartQuantity } = useContext(StoreContext)
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
 
  return (
    <>
      <nav
        className="border-b-2 border-primary sticky top-0 z-50"
        style={{
          background:
            "linear-gradient(90deg, rgba(38,36,61,1) 3%, rgba(26,48,62,1) 55%, rgba(9,86,145,1) 90%, rgba(0,28,31,1) 100%, rgba(78,117,72,1) 100%)",
        }}
      >
        <div className="container flex flex-wrap sm:justify-between items-center md:mx-auto  l z-10">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/damonjohnson/image/upload/v1671437857/Boa/Boa_Wraps_rsknxp.svg"
              className="mr-0 xs:h-14 md:h-16 l:h-20"
              alt="Boa Wraps Logo"
            />
          </Link>

          <IconButton
          variant="text"
          className="h-6 w-6 text-inherit sm:pr-10 pb-5 xs:right-8 xs:absolute text-white bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={() => setOpenNav(!openNav)}>
            <span> <Link
                  to="/"
                  className="block mt-3 pl-3 text-white rounded md:p-0 hover:text-primary"
                  aria-current="page"
                >
                  Home
                </Link></span>
            </Button>
              <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={() => setOpenNav(!openNav)}>
            <span> <Link
                  to="/contact"
                  className="block mt-3 pl-3 text-white rounded md:p-0 hover:text-primary"
                  aria-current="page"
                >
                  Contact
                </Link></span>
            </Button>

              <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={() => setOpenNav(!openNav)}>
            <span> <Link
                  to="/store"
                  className="block mt-3 pl-3 text-white rounded md:p-0 hover:text-primary"
                  aria-current="page"
                >
                  Store
                </Link></span>
            </Button>
                <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={() => setOpenNav(!openNav)}>
            <span> <Link
                  to="/cart"
                  className="block mt-3 pl-3 text-white rounded md:p-0 hover:text-primary"
                  aria-current="page"
                >
                  Cart ({totalCartQuantity})
                </Link></span>
            </Button>
        </div>
      </MobileNav>
          <div className="hidden lg:w-full lg:flex lg:justify-end lg:-mt-14 lg:pb-2 lg:pr-14" id="navbar-default">
            <ul className="flex flex-col bg-slate-800 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:text-sm md:font-medium md:border-0">
              <li>
                <Link
                  to="/"
                  className="block mt-3 pl-3 text-white rounded md:p-0 hover:text-primary"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block mt-3 pr-4 pl-3 text-white rounded  hover:text-primary md:p-0"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/store"
                  className="block mt-3 pr-4 pl-3 text-white rounded hover:text-primary  md:p-0"
                >
                  Store
                </Link>
              </li>
              
              <Link to="/cart">
                <button className="w-10 rounded-full relative border-2 border-primary md:mt-1 md:py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="white"
                    className="w-5 h-5 translate-x-2"
                  >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                  </svg>
                  <div
                    className="rounded-full bg-primary d-flex"
                    style={{
                      color: "white",
                      width: "1.35rem",
                      height: "1.3rem",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transform: "translate(25%, 25%)",
                    }}
                  >
                     {totalCartQuantity}

                  </div>
                </button>
              </Link>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Nav
