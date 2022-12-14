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
            <div className="lg:w-8/12 xl:w-7/12">
            <h1 className="text-white font-semiboldsm:text-4xl lg:w-full md:text-4xl lg:text-6xl xl:text-8xl lg:ml-32">
              Reusable Pallet Wraps
            </h1>
              <div className="mt-8 lg:flex lg:w-full lg:ml-32">
                <p className="lg:text-2xl font-semibold text-white pr-10">
                  A sustainable alternative to single use shrink wrap film
                          </p>
                          <div className="lg:relative lg:bottom-3">
                <a href="/products">
                  <button className="bg-primary font-semibold text-white py-3 lg:px-16 duration-100 rounded-md hover:text-blue-700">
                    View products
                  </button>
                              </a>
                              </div>
                              </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default Hero
