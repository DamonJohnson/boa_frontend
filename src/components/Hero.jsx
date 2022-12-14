import React from "react"

const Hero = () => {
  return (
    <>
      <header className="relative sm:flex sm:items-center sm:justify-center sm:h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-75"
        >
          <source
            src="https://res.cloudinary.com/damonjohnson/video/upload/v1669295293/Boa/Hero-short.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
              <div className="z-30 w-full md:mt-64">
                  <div className="bg-secondary border-primary border-2 lg:ml-32 lg:w-7/12 lg:pl-24 lg:py-8 rounded-l-3xl rounded-tr-3xl"
                  style={
{background: "linear-gradient(90deg, rgba(38,36,61,1) 3%, rgba(26,48,62,1) 45%, rgba(9,86,145,1) 85%, rgba(0,28,31,1) 100%, rgba(78,117,72,1) 100%)"}}>
                      <div className="">
            <h1 className="text-white font-semiboldsm:text-4xl mx-auto lg:w-full md:text-4xl lg:text-6xl xl:text-8xl ">
              Reusable Pallet Wraps
            </h1>
              <div className="mt-8 lg:flex mx-auto">
                <p className="lg:text-2xl text-white pr-20">
                  A sustainable alternative to single use shrink wrap film
                          </p>
                          <div className="lg:relative lg:bottom-3">
                <a href="/products">
                  <button className="bg-primary font-semibold text-white py-3 lg:px-16 duration-100 rounded-l-lg rounded-tr-lg hover:text-blue-700">
                    View products
                  </button>
                                  </a>
                                  </div>
                              </div>
                              </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default Hero
