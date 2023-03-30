import React from "react"

const DesktopHero = () => {
  return (
    <>
      <header className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50"
        >
          <source
            src="https://res.cloudinary.com/damonjohnson/video/upload/v1669295293/Boa/Hero-short.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="z-10 xs:w-full md:w-3/5 lg:2/5 mt-44">
          <div className="md:py-6 text-center">
            <h1 className="text-white  ml-auto mr-auto xs:text-4xl  md:text-5xl lg:text-6xl">
              Reusable Pallet Wraps
            </h1>
            <div className="mt-6">
              <h3 className="text-white text-center xs:text-lg text-xl">
                A sustainable alternative to single use shrink wrap film
              </h3>
              <div className="md:bottom-2 pt-8">
                <a href="/store">
                  <button className="bg-primary font-semibold w-2/5 text-white py-3 md:px-8 duration-100 rounded-l-lg rounded-tr-lg hover:ring-4">
                    View Store
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

export default DesktopHero
